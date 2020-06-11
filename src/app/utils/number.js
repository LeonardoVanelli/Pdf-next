export function random(atNumber) {
  const strNumber = (Math.random() * atNumber).toFixed(0);
  return parseFloat(strNumber, 0);
}
