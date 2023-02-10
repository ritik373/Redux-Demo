import classes from './Header.module.css';
import { AuthAction } from '../store/ReduxAuth';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


const Header = () => {
  const [theme,setTheme]=useState('');
  const dispatch=useDispatch();
  const Auth=useSelector(state=>state.auth.Authenticatin);
  // console.log(Authen)
  // const Auth=true
  const onLogOutHandler=()=>{
    dispatch(AuthAction.logOut());


  }
  const onToggleMode=()=>{

    if(theme==='white'){
      document.querySelector('body').style.backgroundColor=theme;
      setTheme('black')
     console.log(theme)
    }else{
      document.querySelector('body').style.backgroundColor=theme;
      setTheme('white')
      console.log(theme)
  
    }
  

  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <button onClick={onToggleMode}>Toggle Mode</button>
      <nav>
        <ul>
          <li>
          { Auth && <a href='/'>My Products</a>}
          </li>
          <li>
           { Auth && <a href='/'>My Sales</a>}
          </li>
          <li>
            {Auth  &&<button onClick={onLogOutHandler}>Logout</button> }
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
