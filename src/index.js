module.exports = function reverse (n) {
    var c = Math.abs(n)
    return c.toString().split("").reverse().join("");
  
}
