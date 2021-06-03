import React from 'react';
import './App.css';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';

class BorderColor extends React.Component {
  state = {
      displayColorPicker_border: false,
      displayColorPicker_tea: false,
      displayColorPicker_bubble: false,
      displayColorPicker_smile: false,
      color_border: {
        r: '168',
        g: '0',
        b: '183',
        a: '100',
      },
      color_tea: {
        r: '34',
        g: '25',
        b: '77',
        a: '100',
      },
      color_bubble: {
        r: '0',
        g: '0',
        b: '0',
        a: '1',
      },
      color_smile: {
        r: '255',
        g: '255',
        b: '255',
        a: '255',
      },
  };

  /* */
  handleClick_border = () => {
    this.setState({ displayColorPicker_border: !this.state.displayColorPicker_border });
  };

  handleClose_border = () => {
    this.setState({ displayColorPicker_border: false })
  };

  handleChange_border = (color_border) => {
    this.setState({ color_border: color_border.rgb });
  };

  /* */
  handleClick_tea = () => {
    this.setState({ displayColorPicker_tea: !this.state.displayColorPicker_tea });
  };

  handleClose_tea = () => {
    this.setState({ displayColorPicker_tea: false })
  };

  handleChange_tea = (color_tea) => {
    this.setState({ color_tea: color_tea.rgb });
  };
  
  /* */
  handleClick_bubble = () => {
    this.setState({ displayColorPicker_bubble: !this.state.displayColorPicker_bubble });
  };

  handleClose_bubble = () => {
    this.setState({ displayColorPicker_bubble: false })
  };

  handleChange_bubble = (color_bubble) => {
    this.setState({ color_bubble: color_bubble.rgb });
  };

  /* */
  handleClick_smile = () => {
    this.setState({ displayColorPicker_smile: !this.state.displayColorPicker_smile });
  };

  handleClose_smile = () => {
    this.setState({ displayColorPicker_smile: false })
  };

  handleChange_smile = (color_smile) => {
    this.setState({ color_smile: color_smile.rgb });
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
        color_border: {
          width: '60px',
          height: '32px',
          borderRadius: '4px',
          background: `rgba(${this.state.color_border.r}, ${this.state.color_border.g}, ${this.state.color_border.b}, ${this.state.color_border.a})`,
        },
        color_tea: {
          width: '60px',
          height: '32px',
          borderRadius: '4px',
          background: `rgba(${this.state.color_tea.r}, ${this.state.color_tea.g}, ${this.state.color_tea.b}, ${this.state.color_tea.a})`,
        },
        color_bubble: {
          width: '60px',
          height: '32px',
          borderRadius: '4px',
          background: `rgba(${this.state.color_bubble.r}, ${this.state.color_bubble.g}, ${this.state.color_bubble.b}, ${this.state.color_bubble.a})`,
        },
        color_smile: {
          width: '60px',
          height: '32px',
          borderRadius: '4px',
          background: `rgba(${this.state.color_smile.r}, ${this.state.color_smile.g}, ${this.state.color_smile.b}, ${this.state.color_smile.a})`,
        },
        swatch: {
          padding: '5px',
          paddingRight: '38%',
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
    let color = styles.color_border.background;
    let color_tea = styles.color_tea.background;
    let color_bubble = styles.color_bubble.background;
    let color_smile = styles.color_smile.background;
    return (
      <div>
        <div className="option">
          <div style={styles.swatch} onClick={this.handleClick_border}>
            <h1>Border</h1>
            <style>{css_option}</style>
            <div style={styles.color_border} />
          </div>
          {this.state.displayColorPicker_border ? <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose_border} />
            <SketchPicker style={{ position: 'relative' }} color={this.state.color_border} onChange={this.handleChange_border} />
          </div> : null}


          <div style={styles.swatch} onClick={this.handleClick_tea}>
            <h1>Tea</h1>
            <div style={styles.color_tea} />
          </div>
          {this.state.displayColorPicker_tea ? <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose_tea} />
            <SketchPicker style={{ position: 'relative' }} color_tea={this.state.color_tea} onChange={this.handleChange_tea} />
          </div> : null}

          
          <div style={styles.swatch} onClick={this.handleClick_bubble}>
            <h1>Bubble</h1>
            <div style={styles.color_bubble} />
          </div>
          {this.state.displayColorPicker_bubble ? <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose_bubble} />
            <SketchPicker style={{ position: 'relative' }} color_bubble={this.state.color_bubble} onChange={this.handleChange_bubble} />
          </div> : null}


          <div style={styles.swatch} onClick={this.handleClick_smile}>
            <h1>Smile </h1>
            <div style={styles.color_smile} />
          </div>
          {this.state.displayColorPicker_smile ? <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose_smile} />
            <SketchPicker style={{ position: 'relative' }} color_smile={this.state.color_smile} onChange={this.handleChange_smile} />
          </div> : null}


        </div>
        <div className="bubbletea">
          <svg xmlns="http://www.w3.org/2000/svg" width="250" viewBox="0 60 150.2 466">
            <g id="menu">
              <g id="tea">
                <path opacity="0.52" fill={color_tea} d="M109.1,71.7l-8.9,81.9c-1.4,13-12.3,22.9-25.4,22.9l-2.3,0l-14.8,0c-0.8,0-1.5,0-2.2-0.1h0c-12-1.1-21.7-10.6-23-22.8l-8.6-82c3.8,1.4,7.6,2.7,11.3,3.7c1.7,0.5,3.4,0.9,5.1,1.3h0c2.1,0.5,4.3,0.9,6.4,1.3l0,0c1.9,0.3,3.7,0.6,5.6,0.8c2.5,0.3,5,0.5,7.5,0.6c8,0.4,16.1,0,24.3-1.3C92.5,76.8,100.8,74.7,109.1,71.7z" />
              </g>
              <g id="border">
                <path fill="none" stroke={color} stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M119.2,49.7L14,49.5c0.9-10.2,4.7-19.6,10.5-27.4c3.2-4.2,7-7.9,11.2-11.1c8.7-6.3,19.4-10,30.9-10c11.5,0,22.2,3.8,30.9,10.1c4.3,3.1,8,6.9,11.2,11.1C114.6,30.1,118.3,39.5,119.2,49.7z" />
                <path fill="none" stroke={color} stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M132.1,59.6c0,0.4,0,0.8-0.1,1.2c-0.6,4.9-4.8,8.7-9.8,8.7h-3.4l-11.9,104.4c-0.3,2.9-1.4,5.5-3,7.6c-2.9,3.9-7.5,6.3-12.6,6.3l-50-0.1c-5.9,0-11.1-3.3-13.7-8.2c-1-1.8-1.6-3.7-1.8-5.8L14.3,69.3l-3.4,0c-5.4,0-9.8-4.4-9.8-9.9c0-0.4,0-0.8,0.1-1.2c0.6-4.9,4.7-8.7,9.8-8.7H14l105.2,0.2h3.1C127.7,49.7,132.1,54.2,132.1,59.6z" />
                <path fill="none" stroke={color} stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M73.5,1.6c4.4,0.6,6.7,1.7,6.7,3.1c0,2-6.1,3.5-13.5,3.5c-7.5,0-13.5-1.6-13.5-3.6c0-1.6,3.6-2.9,9.2-3.3" />
              </g>
              <g id="bubble">
                <path fill={color_bubble} d="M95.9,144.5c-0.7,2.3-3.2,3.6-5.4,2.8c-2.3-0.7-3.5-3.2-2.8-5.5c0.7-2.3,3.2-3.6,5.4-2.8C95.4,139.7,96.6,142.2,95.9,144.5z" />
                <path fill={color_bubble} d="M80.1,127.4c-0.8,2.6-3.5,4-6.1,3.2c-2.6-0.8-4-3.6-3.2-6.1c0.8-2.6,3.5-4,6.1-3.2C79.5,122,80.9,124.8,80.1,127.4z" />
                <path fill={color_bubble} d="M47.8,137.6c-0.8,2.5-3.5,3.9-6,3.1c-2.5-0.8-3.9-3.5-3.1-6.1c0.8-2.5,3.5-3.9,6-3.1C47.2,132.4,48.6,135.1,47.8,137.6z" />
                <path fill={color_bubble} d="M65.6,140.6c-0.6,1.8-2.4,2.7-4.2,2.2c-1.7-0.6-2.7-2.4-2.2-4.2c0.6-1.8,2.4-2.7,4.2-2.2C65.2,136.9,66.2,138.8,65.6,140.6z" />
                <path fill={color_bubble} d="M56.2,162.6c-0.7,2.2-3,3.4-5.2,2.7c-2.2-0.7-3.4-3-2.7-5.2c0.7-2.2,3-3.4,5.2-2.7C55.7,158.1,56.9,160.4,56.2,162.6z" />
                <path fill={color_bubble} d="M48.9,116.3c-0.7,2.2-3,3.4-5.1,2.7c-2.1-0.7-3.3-3-2.7-5.2c0.7-2.2,3-3.4,5.1-2.7C48.4,111.8,49.6,114.1,48.9,116.3z" />
                <path fill={color_bubble} d="M82.8,161.8c-0.9,2.7-3.8,4.3-6.5,3.4c-2.7-0.9-4.2-3.8-3.4-6.5c0.9-2.7,3.8-4.3,6.5-3.4C82.1,156.1,83.6,159,82.8,161.8z" />
              </g>
              <g id="smile">
                <g>
                  <path fill={color_smile} d="M75.4,32.7H57.8c-1.1,0-1.9,1-1.7,2c0.9,4.9,5.3,8.6,10.5,8.6c5.2,0,9.5-3.7,10.5-8.6C77.2,33.7,76.4,32.7,75.4,32.7z" />
                  <path fill={color_smile} d="M75.4,32.7H57.8c-1.1,0-1.9,1-1.7,2c0.1,0.5,0.2,1,0.4,1.4h20.2c0.2-0.5,0.3-0.9,0.4-1.4C77.2,33.7,76.4,32.7,75.4,32.7z" />
                  <path fill={color_smile} d="M72.4,41.6c-1.5-1.5-3.5-2.4-5.8-2.4c-2.3,0-4.3,0.9-5.8,2.4c1.7,1.1,3.7,1.7,5.8,1.7S70.7,42.7,72.4,41.6z" />
                  <path fill={color_smile} d="M50.5,31.3c-0.5,0-0.9-0.4-0.9-0.9c0-1.9-1.5-3.4-3.4-3.4c-1.9,0-3.4,1.5-3.4,3.4c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9c0-2.8,2.3-5.1,5.1-5.1c2.8,0,5.1,2.3,5.1,5.1C51.3,30.9,50.9,31.3,50.5,31.3z" />
                  <path fill={color_smile} d="M91.2,31.3c-0.5,0-0.9-0.4-0.9-0.9c0-1.9-1.5-3.4-3.4-3.4c-1.9,0-3.4,1.5-3.4,3.4c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9c0-2.8,2.3-5.1,5.1-5.1c2.8,0,5.1,2.3,5.1,5.1C92.1,30.9,91.7,31.3,91.2,31.3z" />
                  <path fill={color_smile} d="M50.7,35.9c0-0.7-2-1.3-4.5-1.3s-4.5,0.6-4.5,1.3c0,0.7,2,1.3,4.5,1.3S50.7,36.7,50.7,35.9z" />
                  <path fill={color_smile} d="M91.4,35.9c0-0.7-2-1.3-4.5-1.3c-2.5,0-4.5,0.6-4.5,1.3c0,0.7,2,1.3,4.5,1.3C89.4,37.2,91.4,36.7,91.4,35.9z" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    )
  }
}

export {
        BorderColor,
}