import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url) => axios.get(url).then(res => {
  return res.data
});

const useUser = () => {
  const { data, error, loading, mutate} = useSWR('http://127.0.0.1:3000/user', fetcher);
  return {users: data?.results || [], error, loading, mutate};
}

export default useUser;