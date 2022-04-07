import React from 'react';
import App from './App';
import Card from './components/index';


render()(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementsByName('root')
);