```md
new readme.

Tic Tac Toe URL: knoddin.github.io/ProjectOne

Technologies Used:
HTML
CSS
SCSS
JavaScript
JQuery
AJAX
GitHub

Planning Process:

Requirements for the game/SPA were provided here:
https://github.com/ga-wdi-boston/game-project/blob/master/requirements.md

  User stories:
  1) As a user, I can create an account with name, email, password, and password
  confirmation.
  2) As a user, I can login to my account to access stored information like saved
    games and game history.
  3) As a user, I can click on a "play game" button to begin a new tic tac toe game.
  4) As a user, I can click on the game grid to unveil X or O during play.
  5) As a user, I can click on "save game" to save and continue playing later.
  6) As a user, wins will be determined and alerted to meautomatically upon completion of "3 in a row".
  7) As a user, I will be able to see whose turn it is - X or O? Mine or theirs?
  8) As a user, I will be able to change my password.

Initial wireframes were completed on paper. A final version was created using Mockingbird,
linked here: https://gomockingbird.com/projects/gf7murv .

The wireframe shows multiple views of a Single Page Application (SPA). The SPA was to
contain a single 3 X 3 game board with each tile/cell having an attached click handler for
game play. User options included a sign-up button, a sign-in button, a change password button,
and a sign out button. The registered user defaults to Player X, and all games for Player X are stored in the API,
http://tic-tac-toe.wdibos.com . Additionally, registered users would be able to pull stored
information to view their own game statistics.

Building the framework:

My first plan of attack was to develop the basic framework for my game using HTML and
javascript. I created 9 tiles with click handlers using javascript. The tiles were
made into a 3x3 grid using css/scss. I also created buttons and modals for the
forms and authentications (sign up, sign-in, change password, and sign out).

Secondly, I worked on creating the game logic. Using javascript, JQuery, and AJAX, I worked to create
several functions that each served a specific purpose. Primary functions included:
  createBoard(), which builds the structural framework for the game.
  onClick(), a function that actually served multiple purposes upon the click on a tile, including
    toggling of players (game should always start on X and switch to O), checking for a
    win, and feeding data into the API to store game states.
  winCondition(), a function that determines a winner or draw depending on the cells clicked

  Several other functions were coded to allow users to sign up, sign in, change their password,
  create a new game, clear the board, and sign out.

  Development Process:
  This game is my first app ever! Some processes went more smoothly than others. Major roadblocks
  were javascript syntax and getting a solid foundation for the game logic. Communicating with the API had
  its challenges as well, and I think much of that has to do with the code that I may have over-complicated.

  Successes:
  1)I was successfully able to create clickable tiles that show "X" or "O" depending on whose
  turn it is.

  2)I was able to create functioning authentication buttons for sign up, sign in, sign out, and changing
  password, all which successfully communicate with the API, and upon a cURL request, provide unique
  authentication tokens for the user.

  3)I was able to visibly show the winner of the game.

  4)I was able to prevent tiles from being clicked once a game had been completed.

  5)I was able to create a "New Game" button, which assuming a user is signed in, posts an empty new game
  to the API for game data to be collected upon play.

  Improvements to be made, version 1.0:
  1)After a POST of a new game (following sign-in), I faced problems when attempting to PATCH new game data to the
  the newly created game. Since there are no data currently being added during game play, I am unable to retrieve
  any data. Future iterations will fix this problem.

  2)As noted above, the game currently does not allow for game stats to be viewed. Future iterations will allow for
  past games to be stored and viewed, and also allow for multiple games to be played at once.

  3)While I have confirmed that many functions (authentication, adding a game, etc.) do work, they do not appear
  on the page in a way that a user would ever know it was successful. Future iterations will allow the user to know
  where they are in the process of the game.

  4)The game is messy, both aesthetically and in terms of DRY and KISS code. I may have overcomplicated some steps
  and added code where it wasn't necessary. Additionally, in focusing on requirements for a functioning game, I did not focus much on the appearance. Future iterations will hopefully look less amateur.

  5)Use better separation of concerns, both in document and in git branches. Organization is key!

  6)Stick to one problem at a time. My best work was done when focusing on one task at a time.

  Improvements made since version 1.0:
  1) A PATCH request was able to be made by updating the game status in the API.
  2) A GET request was able to be made by accessing the api and retrieving number of games that a player has played.
  3) Modal buttons hide and show depending on whether a user is signed in or signed out.
  4) The game board is hidden or shown depending on whether a user is signed in or signed out.
  5) The new game buttons is hidden or shown depending on whether a user is signed in or signed out.
  6) The game data is hidden or shown depending on whether a user is signed in or signed out.
  7) SCSS additions have been made to clean up the appearance of the app.

```;
