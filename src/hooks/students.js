import { useState, useEffect } from 'react'
import { fetchStudents } from '../services/studentsApi';

export const useStudents = match => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchStudents(match.params.color, match.params.name, match.params.age, match.params.coach, setStudents, setIsLoading);
  }, [match.params.color, match.params.name, match.params.age, match.params.coach]);

  return { students, isLoading };
};
