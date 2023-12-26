 

import './App.css';
import Router from './routes';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';

import store from './redux/store';
function App(){
return(
  <Provider store={store}>
    <div className="App">
      <Router />
    </div>
  </Provider>
)


}
export default App





























// import './App.css';
// import Router from './routes';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { provider } from 'react-redux';

// import store from './redux/store';

// function App() {
//   return (
//     <provider store={store}>
//     <div className="App">
//       <Router />
//     </div>
//     </provider>
//   );
// }

// export default App;
