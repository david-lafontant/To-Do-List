const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const domHtml = new JSDOM(`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To Do list</title>

  <script src="https://kit.fontawesome.com/9eeccf4b84.js" crossorigin="anonymous"></script>

</head>

<body>

  <main>
    <section class="todoHeader">
    <h1>Today's To Do</h1><i class="fa fa-refresh"></i>
    </section>
    <section class="todoAdd">
      <input type="text" id="inputTask" name="inputTask" placeholder="Add to your list" required>
      <p class="carriageReturn">&crarr;</p>
    </section>
    <section class="showTodo">
      <ul class="list">
      </ul>
    </section>
    <section class="clearMsg">
      <p class="clrCompleted">Clear all completed</p>
    </section>
  </main>

</body>

</html>`
, { url: 'https://localhost/' });
let globaldocument = domHtml.window.document;
global.window = domHtml.window;

module.exports = globaldocument;