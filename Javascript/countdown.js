function countdown(n){
  if(n < 1){
    return []
  }
  let rr = [n]
  return rr.concat(countdown(n - 1));
}
console.log(countdown(5)); 