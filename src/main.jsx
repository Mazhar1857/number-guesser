import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import { store } from './store/store.jsx'
import { Provider } from 'react-redux'
import BtnState from './context/BtnState.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BtnState>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </Provider>
  </BtnState>
)


// store.subscribe(render);
// render();
