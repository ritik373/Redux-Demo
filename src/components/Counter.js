import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterAction } from '../store/ReduxAuth';

const Counter = () => {
  const dispatch=useDispatch();
  const counter=useSelector(state=>state.counter.counter)
  const showCounter=useSelector(state=>state.counter.showCounter)
  // console.log("counter",counter)



  const onIncreaseHandler=()=>{
    console.log("increase")
    dispatch(counterAction.increase())
  }
  const onDecreaseHandler=()=>{
    console.log("Decrease")
    dispatch(counterAction.decrease())
  }
  


  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());


  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={onIncreaseHandler}>Increase</button><span> <button onClick={onDecreaseHandler}>Decrease</button></span><br />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
