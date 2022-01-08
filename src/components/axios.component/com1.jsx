import useUser from '../../api/axios.api';

const Com1 = (props) => {
  const {users} = useUser();

  return (
    <div>
      <h1>Com1</h1>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>{user.name} : {user.age}</li>
        ))}
      </ul>
    </div>
  )
}

export default Com1;