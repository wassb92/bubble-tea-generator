import React, { useState, Component } from 'react';
import './App.css';
import reactCSS from 'reactcss';
import { ChromePicker, SketchPicker } from 'react-color';

class App extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '255',
      g: '255',
      b: '255',
      a: '255',
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
  };

  render() {
    const css_option = `
    div {
        color: aqua;
        text-align: center;
        float: center;
      }
      `;
    const styles = reactCSS({
      'default': {
        color: {
          width: '60px',
          height: '32px',
          borderRadius: '4px',
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
        swatch: {
          padding: '5px',
          paddingRight: '90%',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div className="option">
        <div style={styles.swatch} onClick={this.handleClick}>
        <h1 className="border_option">Border</h1>
          <div style={styles.color} />
          <style>{css_option}</style>
        </div>
        { this.state.displayColorPicker ? <div style={styles.popover}>
          <div style={styles.cover} onClick={this.handleClose} />
          <SketchPicker style={{position:'relative'}} color={this.state.color} onChange={this.handleChange} />
        </div> : null}
      </div>
    )
  }
}

export default App