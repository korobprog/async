import json from "./parser.js";
import read from "./reader.js";
import GameSaving from "./GameSaving.js";

export default class GameSavingLoader {
  static load() {
    return read() // получаем буфер (массив байтов)
      .then((data) => json(data)) // декодируем буфер в строку JSON
      .then((string) => new GameSaving(JSON.parse(string))) // создаем объект GameSaving из строки JSON
      .catch(() => {
        throw new Error("Ошибка загрузки файла");
      }); // обрабатываем ошибки
  }
}
