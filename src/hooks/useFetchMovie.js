import axios from 'axios';
import { status } from 'constants';
import { useState, useEffect } from 'react';

const { PENDING, IDLE, REJECTED, RESOLVED } = status;

export const useFetchMovie = ({ url = '', query = null } = {}) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(IDLE);

  useEffect(() => {
    if (query === '') {
      return;
    }
    const params = {
      api_key: '82a1cc43eb07cca0624de05248811f1a',
      query: query,
    };

    let controller = new AbortController();

    setStatus(PENDING);
    axios
      .get(`https://api.themoviedb.org/3${url}`, {
        params,
        signal: controller.signal,
      })
      .then(r => {
        setStatus(RESOLVED);
        setData(r.data);
      })
      .catch(error => {
        setStatus(REJECTED);
        console.log(error);
      });
    return () => controller?.abort();
  }, [query, url]);

  if (!data) return { status };

  return { data, status };
};
