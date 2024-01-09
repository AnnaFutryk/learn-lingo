# LearnLingo

"LearnLingo" - це застосунок компанії, яка надає послуги онлайн вивчення мов. Основна мета застосунку - допомогти користувачам знайти та вибрати відповідного викладача для своїх освітніх потреб.

## LOGO

Структура застосунку включає три сторінки:

1. **Головна сторінка**: На цій сторінці користувачі можуть ознайомитися з перевагами компанії.

2. **Сторінка "Викладачі"**: На цій сторінці користувачі можуть переглядати список викладачів, доступних для навчання. За замовчуванням на сторінці відображаються лише 4 картки викладачів, але користувачі можуть завантажити більше карток, натиснувши кнопку "Load more". Користувачі також можуть додавати викладачів до своїх "обраних", натискаючи на кнопку із зображенням серця. Якщо користувач не авторизований, йому буде показано попередження, що ця функція доступна лише авторизованим користувачам.

3. **Приватна сторінка "Обрані"**: Ця сторінка доступна лише авторизованим користувачам. На ній вони можуть переглядати всіх викладачів, яких вони додали до своїх "обраних". Сторінка стилізована аналогічно сторінці "Викладачі".

## Технічні деталі

### Авторизація:

Додаток використовує Firebase для реєстрації, входу в систему, отримання даних поточного користувача та виходу з системи.

### Форми:

Форми для реєстрації/авторизації та валідації їх полів реалізовані за допомогою бібліотек formik та yup.

### База даних:

Для збереження інформації про викладачів використовується Firebase Realtime Database. Інформація про викладачів включає їх ім'я, прізвище, мови, рівні володіння, рейтинг, відгуки, ціну за годину, кількість занять, URL аватара, інформацію про заняття, умови та досвід.

### Модальні вікна:

Вікна для реєстрації, входу в систему, бронювання та попередження про неавторизований доступ реалізовані як модальні вікна. Вони будуть закриватися при натисканні на "хрестик", на затемнений фон або при натисканні на клавішу Esc.

### Функціонал обраних:

Авторизовані користувачі зможуть додавати та видаляти викладачів зі своїх "обраних". Кнопка із зображенням "серця" змінить колір, коли викладач буде доданий або видалений. Інформація про обраного викладача залишиться, навіть якщо користувач оновить сторінку.

### Функціонал "Докладніше":

Користувачі зможуть переглядати додаткову інформацію про викладача та переглядати відгуки його учнів, використовуючи кнопку "Докладніше".

### Маршрутизація:

Для навігації між сторінками використовується бібліотека React Router.
