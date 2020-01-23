import { schoolIpAddr, homeIpAddr } from '../data/ipAddresses';

export const fetchPromotion = async (id, setPromotion, setIsLoading) => { 
  try {
    const response = await fetch(
      `http://${schoolIpAddr}:3000/api/v1/promotions/${id}`
    );
    const data = await response.json();
    setPromotion(data);
    setIsLoading(false);
  } catch (err) {
    console.log("The desired promotion failed to load", err);
  }
};