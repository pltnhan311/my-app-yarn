import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

const tryConvert = (temperature, scaleInput) => {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) return ''

  let output
  if (scaleInput === 'f') {
    output = (input - 32) / 1.8
  } else {
    output = (input * 1.8) + 32
  }
  output = Math.round(output * 1000) / 1000
  return output
}

export class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: "",
      scale: "c",
    };
  }

  handleChange = (scale) => (value) => {
    this.setState({
      temperature: value,
      scale,
    });
  };

  render() {
    const {scale, temperature} = this.state
    const celsius =
      scale === "f" ? tryConvert(temperature, scale) : temperature
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, scale) : temperature;

    return (
      <div>
        <TemperatureInput
          title={scaleNames.c}
          temperature={celsius}
          onTemperatureChange={this.handleChange("c")}
        />
        <TemperatureInput
          title={scaleNames.f}
          temperature={fahrenheit}
          onTemperatureChange={this.handleChange("f")}
        />
        <BoilingVerdict celsius={Number(celsius)} />
      </div>
    );
  }
}

export default Calculator