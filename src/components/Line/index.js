import BaseChart from '../BaseChart';
import option from './option';
import getOption from './getOption';

export default class Line extends BaseChart {
  static defaultProps = {
    option,
    getOption,
  };
}
