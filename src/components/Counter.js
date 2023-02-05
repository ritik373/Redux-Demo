import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter=useSelector(state=>state.counter)

  const dispatch=useDispatch();


  const onIncreaseHandler=()=>{
    console.log("increase")
    dispatch({type:'increment'})
  }
  const onDecreaseHandler=()=>{
    console.log("Decrease")
    dispatch({type:'decrement'})
  }
  


  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={onIncreaseHandler}>Increase</button><span> <button onClick={onDecreaseHandler}>Decrease</button></span><br />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;