module.exports = function reverse (n) {
  let str = "" + Math.abs(n);
  if(str.includes('-')){
    
  }
  return str.trim().split('').reverse().join('');

}
