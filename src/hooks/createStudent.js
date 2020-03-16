import { useState } from 'react';
import { RNS3 } from 'react-native-aws3';
import { ipAddrToUse } from '../data/ipAddresses';

export const useStudentInfo = () => {
  const [dob, setDOB] = useState(new Date());
  const [name, setName] = useState('');
  const [image, setImage] = useState({ image: null });
  const [stripes, setStripes] = useState(0);

  const file = {
    // `uri` can also be a file system path (i.e. file://)
    uri: image.image,
    name: `${name}.jpg`,
    type: "image/jpg"
  }

  const options = {
    keyPrefix: 'student_photos/',
    bucket: 'promotion-images-dirtdeodara',
    region: 'us-west-2',
    accessKey: 'AKIAT5TPVNV4E6EJSU5F',
    secretKey: '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',
    successActionStatus: 201
  }

  const uploadPhoto = () => {
    RNS3.put(file, options).then(response => {
      console.log('response body = ', response);
      if (response.status !== 201)
        throw new Error("Failed to upload image to S3");
      /**
       * {
       *   postResponse: {
       *     bucket: "your-bucket",
       *     etag : "9f620878e06d28774406017480a59fd4",
       *     key: "uploads/image.png",
       *     location: "https://your-bucket.s3.amazonaws.com/uploads%2Fimage.png"
       *   }
       * }
       */
    });
  }

  const handleSubmit = async () => {
    setHasSubmitted(true);
    uploadPhoto();
    const createStudentRes = await fetch(`http://${ipAddrToUse}:3000/api/v1/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        date_of_birth: dob,
        gym: "Straight Blast Gym"
      }),
    });

    const student = await createStudentRes.json();
  
    fetch(`http://${ipAddrToUse}:3000/api/v1/promotions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        studentId: student.id,
        belt_color: 'white-white-white',
        stripes: 0,
        coach_who_promoted: 'dirt'
      })
    })
    .then(setHasSubmitted(false));
  };

  return {
    uploadPhoto,
    handleSubmit,
    dob, setDOB,
    name, setName,
    image, setImage,
    stripes, setStripes
  }
}