import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'
import TextBox from './component/TextBox'
import Parallax from 'react-springy-parallax'
import PicPara from './component/Parallax'
import Section from './component/Section'

const Text = ['CARTOONS', 'BRANDER', 'WEB & APP']


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
    const styles = {
      fontFamily: 'Menlo-Regular, Menlo, monospace',
      fontSize: 14,
      lineHeight: '10px',
      color: 'white',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }
    return (
      <React.Fragment>
        <Parallax ref="parallax" pages={4}>
        <Navbar />
          <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: 'transparent' }} />
          <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: 'transparent' }} />
          <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: 'transparent' }} />
          <Parallax.Layer
            offset={0}
            speed={0.5}
            style={styles}
            onClick={() => this.refs.parallax.scrollTo(1)}>
          </Parallax.Layer>
          <div className="App">
            {/* <PicPara/> */}
            <TextBox text={Text[this.state.position]}/>
          <Section/>
          </div>
          <Parallax.Layer
            offset={1}
            speed={-0.1}
            style={styles}
            onClick={() => this.refs.parallax.scrollTo(2)}>
      </Parallax.Layer>
          <Parallax.Layer
            offset={2}
            speed={0.5}
            style={styles}
            onClick={() => this.refs.parallax.scrollTo(0)}>
            The end.
      </Parallax.Layer>
      <Parallax.Layer
            offset={2}
            speed={0.5}
            style={styles}
            onClick={() => this.refs.parallax.scrollTo(0)}>
            The end.
      </Parallax.Layer>
        </Parallax>
      </React.Fragment>
    );
  }
}

export default App;
