module.exports = function dataType(anyData) {
  return Object.prototype.toString.call(anyData).replace(/\[object\s|\]/g, '').toLowerCase();
}