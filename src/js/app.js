import GameSavingLoader from "./GameSavingLoader.js";

GameSavingLoader.load().then(
  (saving) => {
    // saving - объект класса GameSaving
    console.log(saving);
  },
  (error) => {
    // обработка ошибки в случае неуспешной загрузки
    console.error(error.message);
  }
);
