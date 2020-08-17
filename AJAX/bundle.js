"use strict";

var minhaPromise = function minhaPromise() {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/marlloncampos');
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
          console.log('tteste');
        }
      } else {
        reject('Erro na requisição a API');
      }
    };
  });
};

minhaPromise().then(function (response) {
  return console.log(response);
})["catch"](function (error) {
  return console.error(error);
});
