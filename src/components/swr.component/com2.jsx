import useUser from '../../api/swr.api';

const Com2 = (props) => {
  const {users} = useUser();

  return (
    <div>
      <h1>Com2</h1>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>{user.name} : {user.age}</li>
        ))}
      </ul>
    </div>
  )
}

export default Com2;
