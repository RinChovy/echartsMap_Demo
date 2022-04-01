import BaseChart from '../BaseChart';
import option from './option';
import getOption from './getOption';

export default class Pie extends BaseChart {
  static defaultProps = {
    option,
    getOption,
  };
}
