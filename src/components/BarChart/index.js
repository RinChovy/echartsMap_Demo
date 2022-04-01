import BaseChart from '../BaseChart';
import option from './option';
import getOption from './getOption';

/**
 * BarChart
 */

export default class Bar extends BaseChart {
  static defaultProps = {
    option,
    getOption,
  };
}
