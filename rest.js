function average(...nums) {
  const sum = nums.reduce((acc, x) => acc + x, 0);
  const result = sum / nums.length;
  return result;
}

module.exports = average;
