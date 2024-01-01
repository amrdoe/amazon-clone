import { useEffect, useState } from "react";

export default function useClientSecret(total: number) {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await fetch(`/api/payments/create?total=${total * 100}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setClientSecret(data.clientSecret);
    }

    getClientSecret();
  }, [total]);

  return clientSecret;
}