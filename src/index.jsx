import React from 'react';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { store, persistor } from './store/index.jsx';
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from './App.jsx';

const root = document.getElementById('root')

createRoot(root).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)