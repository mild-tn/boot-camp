import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'
import TextBox from './component/TextBox'
import Card from './component/Card'


const Text = ['CARTOONS', 'BRANDER', 'WEB & APP']

const Topic =(prop)=>['OUR MAIN SERVICES','OUR MAIN SERVICES']

class App extends Component {
  handleEvent = e => {
    console.log(e)
    e.preveventDefualt()//เป้นการบอก ให้หยุดการกระทำ ทุกแล้วไปทำอะไรสักอย่างตามบรรทัดล่างต่อไป ส่วนใหญ่ใช้กับ form
  }

  state = {
    position: 0,
  }

  tick() {
    this.setState(state => ({
      position: state.position + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  render() {
    if (this.state.position >= 3) {
      this.setState({ position: 0 })
    }
    return (
      <React.Fragment>
        <div className="App">
        <div className="row">
        <div className="col-12">
          <Navbar className="sticky-top"/>
          <TextBox text={Text[this.state.position]} />
          <Card/>
        </div>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
