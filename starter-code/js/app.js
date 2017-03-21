console.log('app.js loaded!');

// initialize the application
angular
  .module("hangmanApp",[])
  .controller("hangmanController",hangmanController);

function hangmanController(){
    var vm=this;

    vm.hangman = new HangmanGame('elephant');
    vm.guessLetter = function(input){
      vm.hangman.guess(input);
      vm.hangman.input="";
    }
}
