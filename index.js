if (!Array.prototype.effectMap) {
  Array.prototype.effectMap = function (callback) {
    this.forEach(callback)
    return this;
  }
}