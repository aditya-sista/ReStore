import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/layout/styles.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/Routes.tsx';
import { Provider } from 'react-redux';
import { store } from './app/store/configureStore.ts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
