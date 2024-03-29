const fs = require('fs');

const writeFile = (fileContent) => {
  if (!fs.existsSync('./dist')) {
    fs.mkdir('./dist', (err) => {
      if (err) throw err;
    });
  }
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'HTML file generated!',
      });
    });
  });
};

module.exports = { writeFile };
