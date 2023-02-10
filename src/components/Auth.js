import classes from './Auth.module.css';
import { AuthAction } from '../store/ReduxAuth';
import { useDispatch } from 'react-redux';

const Auth = () => {
  const dispatch=useDispatch();
  const onSubmitHandler=(e)=>{
    e.preventDefault();
    console.log("you data submitted")
  dispatch( AuthAction.logIn());


  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
