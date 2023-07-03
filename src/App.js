import './App.css';
import {Provider} from 'react-redux'
import configureStore from "./Components/Redux/Store";
// import Count from './Redux/Count';
import Form from './Components/Forms/FormUncontrolled';
import Login from './Components/Login/Login';
// import Name from './Redux/Name';
function App() {
  return (
    <Provider store={configureStore()}>
      <Login/>
    </Provider>
  );
}
export default App;
