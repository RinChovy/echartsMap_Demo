export default function (option, data) {
  const { series = [], ...rest } = data;

  return {
    ...option,
    series,
    ...rest,
  };
}
