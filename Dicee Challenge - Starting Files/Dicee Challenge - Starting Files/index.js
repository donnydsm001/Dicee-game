//To select the first Dice
var randomNumber1 = Math.floor(Math.random()*6)+1;
//console.log(randomNumber1);
var randomDicee = "dice"+ randomNumber1 +".png";
var randomImages = "images/"+randomDicee;

var image1 = document.querySelectorAll('img')[0];

image1.setAttribute("src",randomImages);


//To select the second dice
var randomNumber2 =  Math.floor(Math.random()*6)+1;

var randomDice = "dice"+ randomNumber2 +".png";

var randomImage = "images/"+randomDice;

var images2 = document.querySelectorAll('img')[1];
images2.setAttribute('src',randomImage);


//if player 1 and player 2 have the same number 
if(randomNumber1 === randomNumber2){
    console.log("match nul");
    document.querySelector('h1').innerHTML=" 🏁 It's a Draw !";
//if player 2 won    
}else if(randomNumber2 > randomNumber1){
    document.querySelector('h1').innerHTML=" 🚩 Player 2 wins!";
    console.log("le joueur 2 a gagné");
    //if player 1 won
}else{
    
    document.querySelector('h1').innerHTML=" 🚩 Player 1 wins !";
    console.log("le premier joueur a gagné");
}