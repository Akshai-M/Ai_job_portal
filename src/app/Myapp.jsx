// pages/_app.js
import Dragdrop from '../components/Dragdrop';
import Chatbot from './Chatbot';

function Myapp() {
  return (
    <div className='inline-block'>
      {/* <Dragdrop /> */}
     <Chatbot/>
    </div>
  );
}

export default Myapp;
