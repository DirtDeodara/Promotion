import { useState, useEffect } from 'react';
import { fetchPromotion } from '../services/promotionsApi';

export const usePromotion = id => {
  const [promotion, setPromotion] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPromotion(id, setPromotion, setLoading);
  }, [id]);

  return { promotion, loading, promoteStudent };
}

export const usePromoteStudent = () => {

};
