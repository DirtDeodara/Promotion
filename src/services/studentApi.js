const URL = '/api/v1'

export async function getStudents() {
  const url = `${URL}/students`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

export async function addStudent(student) {
  const url = `${URL}/students`;
  const response = await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(student)
  });
  const data = await response.json();
  return data;
}