import React, { PureComponent } from 'react';
import { NumberBox } from './style';
import { convert } from 'utils/utils';

/**
 * ScrollNumber
 */

export default class ScrollNumber extends PureComponent {
  state = {
    numbers: '',
    newNumber: [],
    oldNumber: [],
  };

  static getDerivedStateFromProps(props, state) {
    const { numbers } = props;
    if (numbers !== state.numbers) {
      const newNumber = convert(numbers);
      const oldNumber = convert(state.numbers ? state.numbers : numbers);
      if (oldNumber.length > newNumber.length) {
        newNumber.length = oldNumber.length;
      } else {
        oldNumber.length = newNumber.length;
      }
      return {
        numbers,
        newNumber,
        oldNumber,
      };
    }
    return null;
  }

  render() {
    const { newNumber, oldNumber } = this.state;
    const { style } = this.props;
    return (
      <NumberBox style={style}>
        {newNumber.map((item, i) => {
          return (
            <li
              className={`numberItem ${isNaN(item) ? 'comm' : ''} ${
                oldNumber[i] !== newNumber[i] ? 'active' : ''
              }`}
              key={item + i}
            >
              <span className="num">{oldNumber[i]}</span>
              <span className="num">{newNumber[i]}</span>
            </li>
          );
        })}
        <li className="numberItem">{this.props.children}</li>
      </NumberBox>
    );
  }
}
