<!DOCTYPE html>
<html>

<head>
  <title>Trux Falsy</title>

  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script src="js.cookie.js"></script>
  <script src="jquery.balloon.min.js"></script>

  <script src="snapshot.js"></script>
  <script src="levels.js"></script>
  <script src="token.js"></script>
  <script src="lexer.js"></script>
  <script src="expression.js"></script>
  <script src="parser.js"></script>
</head>

<body>
  <div id="menu">
    <img src="gear_lo.png" width="50" id="gear">
  </div>

  <div id="settings" title="Settings">
  </div>

  <div id="main">
    <h1 id="levelName" style="clear: both">Level Name</h1>

    <div style="clear: both">
      <div class="gridpanel" style="float: left">
        <span class="gridtitle">Expected</span><br/>
        <svg id="expectedGrid" class="grid"></svg>
      </div>
      <div class="gridpanel" style="float: right">
        <span class="gridtitle">Actual</span><br/>
        <svg id="actualGrid" class="grid"></svg>
      </div>
    </div>

    <span style="clear: both" id="percentage">&nbsp;</span>
    <input id="guess" type="text" oninput="showGuess(true)" maxlength="255"></input><br/>
  </div>

  <script src="game.js"></script>
</body>

</html>
