import useUser from '../../api/axios.api.js';

import Com1 from './com1.jsx';
import Com2 from './com2.jsx';

const AxiosComponent = (props) => {
  const {update} = useUser();
  
  return (
    <div>
      <h1>for axios </h1>
      <Com1 />
      <Com2 />
      <button onClick={update}>axios refresh</button>
    </div>
  )
}

export default AxiosComponent;