module.exports = function reverse(n) {
  if (n < 0) {
    n = 0 - n;
  }
  return String(n).split('').reverse().join('');
}