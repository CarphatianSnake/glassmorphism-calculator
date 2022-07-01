import { useSelector, useDispatch } from "react-redux";
import {one, two, three, four, five, six, seven, eight, nine, zero, equal, plusMinus, perc, plus, minus, times, div, clear, dot} from '../../actions';

import './app.scss';

function App() {
  const value = useSelector(state => state.value);
  const history = useSelector(state => state.history);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <form className="calculator" name="calc">
        <input type="text" disabled className="history" name="history" value={history} />
        <input type="text" disabled className="value" name="value" value={value} />
        <span onClick = {() => dispatch(clear())}>c</span>
        <span onClick = {() => dispatch(plusMinus())}>+/-</span>
        <span onClick = {() => dispatch(perc())}>%</span>
        <span onClick = {() => dispatch(times())}>*</span>
        <span onClick = {() => dispatch(seven())}>7</span>
        <span onClick = {() => dispatch(eight())}>8</span>
        <span onClick = {() => dispatch(nine())}>9</span>
        <span onClick = {() => dispatch(div())}>/</span>
        <span onClick = {() => dispatch(four())}>4</span>
        <span onClick = {() => dispatch(five())}>5</span>
        <span onClick = {() => dispatch(six())}>6</span>
        <span onClick = {() => dispatch(minus())}>-</span>
        <span onClick = {() => dispatch(one())}>1</span>
        <span onClick = {() => dispatch(two())}>2</span>
        <span onClick = {() => dispatch(three())}>3</span>
        <span onClick = {() => dispatch(plus())}>+</span>
        <span onClick = {() => dispatch(zero())} className="zero">0</span>
        <span onClick = {() => dispatch(dot())}>.</span>
        <span onClick = {() => dispatch(equal())}>=</span>
      </form>
    </div>
  )
};

export default App;