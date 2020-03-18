import { useState } from 'react';
import { RNS3 } from 'react-native-aws3';
import nameConverter from '../utils/nameConverter';

export const useStudentInfo = () => {
  const [dob, setDOB] = useState(new Date());
  const [name, setName] = useState('');
  const [image, setImage] = useState({ image: null });
  const [stripes, setStripes] = useState(0);

  const nameToUse = nameConverter(name);

  const file = {
    // `uri` can also be a file system path (i.e. file://)
    uri: image.image,
    name: `${nameToUse}.jpg`,
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
    return RNS3.put(file, options).then(response => {
      if (response.status !== 201)
        throw new Error("Failed to upload image to S3");
     
      return response.body.postResponse.location
    });
  }

  return {
    uploadPhoto,
    dob, setDOB,
    name, setName,
    image, setImage,
    stripes, setStripes
  }
}