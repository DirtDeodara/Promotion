import { ipAddrToUse } from '../data/ipAddresses';

export const fetchStudents = async (color, setStudents, setIsLoading) => {
  try {
    let url = color 
    ? 
    `http://${ipAddrToUse}:3000/api/v1/students/color/${color.toLowerCase()}` 
    :
    `http://${ipAddrToUse}:3000/api/v1/students`;
    const response = await fetch(url);
    const data = await response.json();
    setStudents(data)
    setIsLoading(false);
  }
  catch (err) {
    console.log('Load students failed', err);
  }
};

export const fetchStudent = async (id, setStudent, setIsLoading) => { 
  try {
    const response = await fetch( 
      `http://${ipAddrToUse}:3000/api/v1/students/${id}`
    );
    const data = await response.json();
    setStudent(data);
    setIsLoading(false)
  } catch (err) {
    console.log("The desired student failed to load", err);
  }
};

export const fetchNewestStudent = async () => { 
  try {
    const response = await fetch( 
      `http://${ipAddrToUse}:3000/api/v1/students/newest`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("The desired student failed to load", err);
  }
};


