import React, { Component } from "react";
import styled from "styled-components"

import { connect } from "react-redux";

const Button = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
`
const Age = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
`

const Wrapper = styled.div`
  text-align: center;
`

const Modal = styled.div`
  position: fixed;
  display: ${props => props.show ? 'block' : 'none'};
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`

class App extends Component {
  
  render() {
    return (
      <Wrapper>
        <Modal {...this.props} onClick={this.props.onToggleModal} />
        <Age>
          your age:{this.props.age}
        </Age>
        <Button onClick={this.props.onToggleModal}>Show Modal</Button>
        <Button onClick={this.props.onAgeUp}>Age UP</Button>
        <Button onClick={this.props.onAgeDown}>Age Down</Button>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    show: state.show
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
    onToggleModal: () => dispatch({type: "SHOW_MODAL"})
  };
};

export default connect(mapStateToProps, mapDispachToProps)(App);
