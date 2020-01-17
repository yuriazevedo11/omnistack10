const parseStringAsArray = (string: string) =>
  string.split(',').map(item => item.trim());

export default parseStringAsArray;
