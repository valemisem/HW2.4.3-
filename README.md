# Инициализация Node.js проекта

## Задание

*У вас должен быть package.json с данными проекта, автора, репозитория. Добавьте .gitignore для вашей конфигурации проекта. Подключите новый пакет-фреймворк "Jest"  в ваш проект.*

## Выполнение
1. Установлен Jest 
```
npm install --save-dev jest

```
2. Создан тест для функции, которая складывает два числа, а также файл, содержащий сам тест

```
function sum(a, b) {
  return a + b;
}
module.exports = sum;



const sum = require('./sum');
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```
3. Добавлен следующий раздел в package.json
```
{
  "scripts": {
    "test": "jest"
  }
}

```

4. Запуск
```
npm run test

```