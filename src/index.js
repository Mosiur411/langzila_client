import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'

import {
  QueryClient, QueryClientProvider
} from 'react-query'
import { Provider } from 'react-redux';
import store from "./redux/store";
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Provider store={store}>
        <App />
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
