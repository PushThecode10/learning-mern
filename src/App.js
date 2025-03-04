import './App.css';
import NavBar from './component/NavBar';
import TextForm from './component/TextForm';
function App() {
  return (
    <>

 <NavBar title="My App" about="About us" />
 <div className='container my-3'>
 <TextForm heading="Enter the text to analysis"/>
 </div>
 
 </>
  );
}

export default App;
