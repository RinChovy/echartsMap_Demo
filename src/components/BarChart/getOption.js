function seriesCreator(series) {
  return series.map(e => ({
    type: 'bar', // bar 为柱状图
    ...e,
  }));
}

export default function (option, data) {
  const { tooltip, xAxis, yAxis, series = [], ...rest } = data;

  return {
    ...option,
    xAxis,
    tooltip: {
      ...option.tooltip,
      ...tooltip,
    },
    // yAxis: {
    //   ...option.yAxis,
    //   ...yAxis,
    //   data: yCategory || [],
    // },
    yAxis,
    series: seriesCreator(series),
    ...rest,
  };
}
