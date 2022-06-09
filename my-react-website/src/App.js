import './App.css';
import Clock from './clock';

function App() {
  return (
    <div className='outer'>
   <div className='clock'>
     <div className='hand-second'>
       <div className='second'></div>
     </div>
     <div className='hand-minute'>
       <div className='minute'></div>
     </div>
     <div className='hand-hours'>
       <div className='hours'></div>
     </div>
   </div>
   
   </div>
   
  );
  
}

export default App;
