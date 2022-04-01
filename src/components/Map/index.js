import BaseChart from '../BaseChart';
import option from './option';
import getOption from './getOption';

/**
 * Map chart
 */

export default class Map extends BaseChart {
  static defaultProps = {
    option,
    getOption,
  };
}
