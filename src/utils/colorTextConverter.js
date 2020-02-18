export default beltColorText = beltColor => {
  const splitColor = beltColor.split('-');
  if(splitColor[0] === splitColor[1]) {
    return splitColor[0];
  } else return `${splitColor[0]}/${splitColor[1]}`
}