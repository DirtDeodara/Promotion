import { ipAddrToUse } from '../data/ipAddresses';

export const fetchStudents = async (color, name, age, setStudents, setIsLoading) => {
  if(color) {
    try {
      const response = await fetch(`http://${ipAddrToUse}:3000/api/v1/students/color/${color.toLowerCase()}`);
      const data = await response.json();
      setStudents(data)
      setIsLoading(false);
    }
    catch (err) {
      console.log('Load students failed', err);
    }
  } else if(name) {
    const reformattedName = name.split(' ').join('')
    try {
      const response = await fetch(`http://${ipAddrToUse}:3000/api/v1/students/name/${reformattedName}`);
      const data = await response.json();
      setStudents(data)
      setIsLoading(false);
    } catch (err) {
      console.log("The desired student failed to load", err);
    }
  } else if(age === 'adults') {
    try {
      const response = await fetch(`http://${ipAddrToUse}:3000/api/v1/students/age/${age}`);
      const data = await response.json();
      setStudents(data)
      setIsLoading(false);
    } catch (err) {
      console.log("The desired student failed to load", err);
    }
  } else if(age === 'teens') {
    try {
      const response = await fetch(`http://${ipAddrToUse}:3000/api/v1/students/age/${age}`);
      const data = await response.json();
      setStudents(data)
      setIsLoading(false);
    } catch (err) {
      console.log("The desired student failed to load", err);
    }
  } else if(age === 'kids') {
    try {
      const response = await fetch(`http://${ipAddrToUse}:3000/api/v1/students/age/${age}`);
      const data = await response.json();
      setStudents(data)
      setIsLoading(false);
    } catch (err) {
      console.log("The desired student failed to load", err);
    }
  } else {
    try {
      const response = await fetch(`http://${ipAddrToUse}:3000/api/v1/students`);
      const data = await response.json();
      setStudents(data)
      setIsLoading(false);
    }
    catch (err) {
      console.log('Load students failed', err);
    }
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




