import Counter from './components/Counter';
import Auth from '../src/components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile'
import { useSelector } from 'react-redux';


function App() {
  const Authen =useSelector(state=>state.auth.Authenticatin)
  return (  
  <>
     <Header/>
    {!Authen &&<Auth />}
    {Authen && <UserProfile/>}
    
    <Counter />
    </>
  );
}

export default App;
