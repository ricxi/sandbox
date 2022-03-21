import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './state/actionCreators';

function App() {
  // get the state from inside the store
  const accountBalance = useSelector((state) => state.account.balance);

  // create a dispatch instance
  const dispatch = useDispatch();

  // bind dispatch to all action creators
  const { deposit, withdraw } = bindActionCreators(actionCreators, dispatch);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{accountBalance}</h1>
      <button onClick={() => withdraw(1)}> - </button>
      <button onClick={() => deposit(1)}> + </button>
    </div>
  );
}

export default App;
