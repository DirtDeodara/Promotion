import { useState, useEffect } from 'react'
import { fetchStudent } from '../services/studentsApi';

export const useStudent = id => {
  const [student, setStudent] = useState();
  const [loading, setLoading] = useState(true);

  const promoteStripe = () => {
    // TODO use service to call route
    // e.g. fetch('http://${schoolIpAddr}:3000/api/v1/students/:id/stripe, { })
  };

  const promoteBelt = () => {
    // TODO use service to call route
    // e.g. fetch('http://${schoolIpAddr}:3000/api/v1/students/:id/belt, { })
  }

  useEffect(() => {
    fetchStudent(id, setStudent)
      .then(() => setLoading(false));
  }, [id]);

  return { student, loading, promoteStripe, promoteBelt };
};
