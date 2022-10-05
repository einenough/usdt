"use strict";

const inputRub = document.querySelector("#rub");
const inputUsd = document.querySelector("#usd");

inputRub = addEventListener("input", () => {
  const request = new XMLHttpRequest();

  request.open("GET", "js/current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  request.addEventListener("load", () => {
    if (request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);
      inputUsd.value = +inputRub.value * data.current.usd;
    } else {
      inputUsd.value = "something wrong, any trouble";
    }
  });
});

//status - очевидно, что текущий статус сервера
//statusText -  тот же статус, но написано буквами, а не цифрами
//response - типо ответ от сервака
//readyState
