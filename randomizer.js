function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomShapeType() {
  const types = ['circle', 'square', 'triangle'];
  return types[getRandomNumber(0, types.length - 1)];
}

module.exports = {
  getRandomNumber,
  getRandomColor,
  getRandomShapeType
