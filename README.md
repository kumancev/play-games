# Тестовое задание Frontend

Разработать интерфейс для сайта [Free-To-Play Games](https://www.freetogame.com/), состоящий из двух страниц.

## Продуктовые требования

### Главная страница

- [x] Показывает игры
  - [x] Игры можно отфильтровать по платформе и жанру (например, шутер)
  - [x] Игры можно отсортировать по дате релиза, популярности и тд
- [x] Каждая игра в списке содержит:
  - [x] название
  - [x] дата релиза (в российском формате)
    - [x] издатель
    - [x] жанр
    - [x] картинка
- [x] По клику на игру происходит переход на страницу игры
- [x] На загрузку игр показывать индикатор загрузки
- [x] Если не получилось получить данные, необходимо сообщить пользователю

### Страница игры

- [x] Должна содержать (в любом порядке/виде):
  - [x] название
  - [x] дата релиза (в российском формате)
    - [x] издатель
    - [x] разработчик
    - [x] жанр
    - [x] картинка/постер
    - [x] карусель скриншотов
    - [x] системные требования
- [x] На странице должна быть кнопка для возврата к списку игр
- [x] На загрузку игры показывать индикатор загрузки
- [x] Если не получилось получить данные, необходимо сообщить пользователю

## Технические требования

- [x] С приложением должно быть удобно работать, как с мобильного экрана, так и с десктопа (адаптивный интерфейс)
- [x] Приложение разработано с помощью React 18+ и Redux / Redux Toolkit
- [x] Использован [Free-To-Play Games API](https://www.freetogame.com/api-doc) (не важно с или без CORS). Вызовы API и обработка данных от него производятся напрямую с фронтенда (кроме случая, если вы сделаете опциональное задание про Node.JS).
- [x] Роутинг выполнен с использованием [React Router v6](https://reactrouter.com/en/main)
- [x] Фреймворк UI любой на ваше усмотрение (например, [Ant Design](https://ant.design/), [Semantic UI](https://react.semantic-ui.com/), [Element UI](http://elemental-ui.com/))
- [x] Пакетный менеджер `npm`
- [x] Приложение должно запускаться по адресу `localhost:3001` командой `npm start`
- [x] При переходах по ссылкам страница не перезагружается
- [x] Если карточка игры была открыта, то она должна быть доступна при последующих открытиях (перезагрузках) страницы без дополнительного запроса в течение 5 минут
- [x] Исходный код решения должен быть выложен с вашего аккаунта на [Github](http://github.com/)

## Опциональные задания

- [x] Использование TypeScript
- [ ] Учитывать, что список игр может содержать тысячи тайтлов
- [x] При неудачном запросе должно быть три попытки повторного запроса
- [x] При переходе со страницы на страницу запросы, относящиеся к старой странице, должны прерываться (отменяться/прекращаться)
- [ ] Бэкенд для хостинга статики и API для инкапсуляции внешних запросов на Node.JS
- [ ] Покрытие кода юнит-тестами

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

Follow these steps to set up and run the app locally:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/kumancev/play-games
   ```

2. Navigate to the project directory:

   ```bash
   cd play-games
   ```

3. Install project dependencies using npm:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root of the project directory by renaming the provided `.env.example` file. Update the values in the `.env` file to match your configuration.

   ```bash
   cp .env.example .env
   ```

   Replace the placeholders with actual values:

   ```dotenv
   VITE_BASE_URL='https://free-to-play-games-database.p.rapidapi.com/api/'
   VITE_RAPID_API_KEY='your-api-key'
   VITE_RAPID_API_HOST='free-to-play-games-database.p.rapidapi.com'
   ```

5. Start the development server:

   ```bash
   npm start
   ```

   This command will launch the app in development mode using Vite.

6. Open your web browser and go to `http://localhost:3001` to see the app in action.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm start`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to lint your code.
- `npm run format`: Formats your code using Prettier.
- `npm run preview`: Previews the production build.
- `npm run prepare`: Installs Husky hooks for pre-commit linting and formatting.
