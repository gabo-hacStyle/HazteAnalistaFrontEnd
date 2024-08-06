import { AUTH_URL} from './urls';
import { cookies } from 'next/headers';


export const getBalances = async (walletAddress: string) => {
    try {
       
      const response = await fetch(`${AUTH_URL}getBalances/${walletAddress}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      });
      const data = await response.json();
      return data;

    } catch (err) {
      console.error(err);
    }
  };