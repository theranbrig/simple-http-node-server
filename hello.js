const fs = require('fs');

module.exports = {
  sayHello: function() {
      fs.writeFile('hello-world.txt', "Hello to this great world", "utf-8", (err) => {
      if(err) throw err;
      console.log('success');
    });
  }
}
