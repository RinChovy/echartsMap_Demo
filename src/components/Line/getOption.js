function seriesCreator(series) {
  return series.map(e => ({
    type: 'line',
    symbol: 'circle',
    smooth: true,
    lineStyle: {
      normal: {
        width: 3,
      },
    },
    ...e,
  }));
}

export default function (option, data) {
  const { tooltip, xAxis, yAxis, series = [], ...rest } = data;

  return {
    ...option,
    xAxis: {
      ...option.xAxis,
      ...xAxis,
    },
    tooltip: {
      ...option.tooltip,
      ...tooltip,
    },
    // yAxis:[
    //   ...yAxis],
    series: seriesCreator(series),
    ...rest,
  };
}
