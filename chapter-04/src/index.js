import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './components/Application';

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
    root.render(
        <React.StrictMode>
            <Application />
        </React.StrictMode>
    )}, 1000
);