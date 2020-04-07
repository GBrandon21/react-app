import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import 'tachyons';
// import { robots } from './robots';


ReactDOM.render (<App />, document.getElementById('root'));
serviceWorker.unregister();

//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
