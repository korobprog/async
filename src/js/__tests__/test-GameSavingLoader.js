import GameSavingLoader from "../GameSavingLoader";

test("GameSavingLoader.load() should load and parse the GameSaving file", async () => {
  const saving = await GameSavingLoader.load();

  expect(saving.id).toBe(9);
  expect(typeof saving.created).toBe("string"); // проверяем, что поле created это строка
  expect(saving.userInfo).toMatchObject({
    id: 1,
    name: "Hitman",
    level: 10,
    points: 2000,
  });

  const date = new Date(saving.created); // преобразуем строку created в экземпляр Date
  expect(date).toBeInstanceOf(Date); // проверяем, что date это экземпляр Date
});
