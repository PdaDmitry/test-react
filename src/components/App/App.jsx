import { useDispatch, useSelector } from 'react-redux';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import { deposit, withdraw } from '../../redux/balanceSlice';

export default function App() {
  //функция отправки action
  const dispatch = useDispatch();

  //state.balance.value это одна часть состояния
  const balance = useSelector(state => state.balance.value);
  //console.log(balance);

  const lang = useSelector(state => state.local.lang);

  return (
    <div>
      <LangSwitcher />
      <p>Current lang: {lang}</p>
      <hr />
      <p>Balance: {balance} credits</p>
      <button onClick={() => dispatch(deposit(10))}>Deposit 10 credits</button>
      <button onClick={() => dispatch(withdraw(5))}>Withdraw 5 credits</button>
    </div>
  );
}
