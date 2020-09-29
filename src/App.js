import React, { Component } from 'react';

import './App.css'
import 'antd-mobile/dist/antd-mobile.css'; 
import Header from './components/Header/Header'
import List from './components/List/List'

//通过继承 Component 构建组件
class App extends Component {
  render(){
   return (
     <div className="App">
       <Header/>
       <List/>
     </div>
   )
  }
}

export default App;
