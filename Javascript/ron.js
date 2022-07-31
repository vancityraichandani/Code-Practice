function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum) {
    return [endNum]
  }
  const rr = rangeOfNumbers(startNum + 1, endNum)
  rr.unshift(startNum)
  return rr
};

console.log(rangeOfNumbers(2, 6));