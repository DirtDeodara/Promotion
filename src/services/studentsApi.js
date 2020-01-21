const homeIpAddr = `10.0.0.201`;
const schoolIpAddr = `192.168.1.82`

export const fetchStudents = async (color, setStudents, setIsLoading) => {
  try {
    let url = color 
    ? 
    `http://${homeIpAddr}:3000/api/v1/students/color/${color.toLowerCase()}` 
    :
    `http://${homeIpAddr}:3000/api/v1/students`;
    const response = await fetch(url);
    const data = await response.json();
    setStudents(data)
    setIsLoading(false);
  }
  catch (err) {
    console.log('Load students failed', err);
  }
};

export const fetchStudent = async (id, setStudent) => { 
  try {
    const response = await fetch( 
      `http://${homeIpAddr}:3000/api/v1/students/${id}`
    );
    const data = await response.json();
    setStudent(data);
  } catch (err) {
    console.log("The desired student failed to load", err);
  }
};

export const fetchNewestStudent = async () => { 
  try {
    const response = await fetch( 
      `http://${homeIpAddr}:3000/api/v1/students/newest`
    );
    const data = await response.json();
    console.log('from api', data)
    return data;
  } catch (err) {
    console.log("The desired student failed to load", err);
  }
};


