import React,{Component} from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

import HomePage from './Components/home-page';

class App extends Component{
  render(){
    return <HomePage/>;
  }
}

const store = createStore(rootReducer)
window.store= store;

ReactDOM.render(    <Provider store={store}>
    <App />
</Provider>, document.getElementById("index"));



