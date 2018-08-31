import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from './app/store/configureStore';
import 'semantic-ui-css/semantic.min.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
const rootEl = document.getElementById('root')

const store =configureStore();

let render = () => {
    ReactDOM.render(
        <Provider store={store}>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
        </Provider>
        ,rootEl)
}
if (module.hot) {
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render)
    })
}
render();

registerServiceWorker();
