import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'semantic-ui-css/semantic.min.css';
import { injectGlobal } from 'styled-components';
import { ThemeProvider } from 'styled-components';

const theme = {
    fg: 'white',
    bg: 'black',
  }

injectGlobal`
  html, body {
    background-color: linear-gradient(to bottom right, black, silver);
    width: 100%;
    height: 100%;
    color: white;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
