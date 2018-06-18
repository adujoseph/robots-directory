import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import CardList from './CardList';
// import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {robots} from './robots';

ReactDOM.render(
                <div>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
    , document.getElementById('root'));
registerServiceWorker();
 