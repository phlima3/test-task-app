const randomBetween = (min: number, max: number) =>
  min + Math.floor(Math.random() * (max - min + 1));

const getRandomColor = () => {
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  return `rgb(${r},${g},${b})`;
};

export { getRandomColor };
