module.exports = function callmise(fn, ...args) {
  return new Promise((resolve, reject) => {
    try {
      fn(...args, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    } catch (err) {
      reject(err);
    }
  });
};
