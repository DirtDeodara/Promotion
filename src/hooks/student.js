import { useState, useEffect } from 'react'
import { fetchStudent } from '../services/studentsApi';
import { ipAddrToUse} from '../data/ipAddresses.js';

export const useStudent = id => {
  const [student, setStudent] = useState();
  const [loading, setLoading] = useState(true);

  const promoteStripe = () => {
    return fetch(`http://${ipAddrToUse}:3000/api/v1/students/${student.id}/stripe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        coach_who_promoted: 'Chris' //TODO change this to chris and then to eddie
      })
    })
  };

  const promoteBelt = () => {
    return fetch(`http://${ipAddrToUse}:3000/api/v1/students/${student.id}/belt`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        coach_who_promoted: 'Eddie'
      })
    })
  }

  useEffect(() => {
    fetchStudent(id, setStudent, setLoading)
  }, [id]);

  return { student, setStudent, loading, promoteStripe, promoteBelt };
};
