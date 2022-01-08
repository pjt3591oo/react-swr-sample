import {useState, useEffect} from 'react';
import axios from 'axios';

function useUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('http://127.0.0.1:3000/user');
      setUsers(data.results);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };
  
  const update = () => {
    fetchUser();
  }

  return { users, loading, error, update };
}

export default useUser;