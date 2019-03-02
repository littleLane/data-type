module.exports = function first(data) {
  return Object.prototype.toString.call(data).replace(/\[object\s|\]/g, '').toLowerCase();
}