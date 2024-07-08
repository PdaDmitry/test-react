import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import 'modern-normalize';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistore } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// import { persistedStore } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* // сохраняем в LocalStorage с помощью PersistGate*/}
      <PersistGate loading={null} persistor={persistore}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
