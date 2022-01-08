import useUser from '../../api/swr.api.js';
import Com1 from './com1.jsx';
import Com2 from './com2.jsx';

const RwrComponent = (props) => {
  const { mutate } = useUser();
  return (
    <div>
      <h1>for swr </h1>
      <Com1 />
      <Com2 />

      <button onClick={mutate}>swr refresh</button>
    </div>
  )
}

export default RwrComponent;