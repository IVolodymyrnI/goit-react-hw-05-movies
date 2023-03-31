import axios from 'axios';
import { status } from 'constants';
import { useState, useEffect } from 'react';

const { PENDING, IDLE, REJECTED, RESOLVED } = status;

export const useFetchMovie = ({ url = '', query = null }) => {
  const [data, setState] = useState({});
  const [status, setStatus] = useState(IDLE);

  const isPending = status === PENDING;
  const isIdle = status === IDLE;
  const isRejected = status === REJECTED;
  const isResolved = status === RESOLVED;

  useEffect(() => {
    if (query === '') {
      return;
    }
    const params = {
      api_key: '82a1cc43eb07cca0624de05248811f1a',
      query,
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
        setState(r.data);
      })
      .catch(error => {
        setStatus(REJECTED);
        console.log(error);
      });
    return () => controller?.abort();
  }, [query, url]);

  return { data, isIdle, isPending, isRejected, isResolved };
};
