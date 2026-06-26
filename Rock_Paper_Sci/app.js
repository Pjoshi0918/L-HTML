let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genComputerChoice = () => {

    const options = ["rock","paper","scissors"];
    
    const randomindex = Math.floor(Math.random() * 3);

    return options[randomindex];

}

const draw = () => {

    msg.innerText = "Game was Draw, Play again";
    msg.style.backgroundColor = "#081b131";


}

const showWinner = (userwin,userChoice,comChoice) => {

    if(userwin){

        msg.innerText = `You win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
        userScore ++;
        userScorepara.innerText = userScore;

    }

    else {

        msg.innerText = `You lost.  ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorepara.innerText = compScore; 


    }

}


const playgame = (UserChoice) => {

    const comChoice = genComputerChoice();

    if(UserChoice == comChoice ){

        draw();

    }
    else{

        let  userwin = true ;
       
        if(UserChoice == "rock"){
            
            userwin = comChoice === "paper" ? false : true;
            
        }

        else if(UserChoice == "paper"){
            
            userwin = comChoice === "rock" ? true : false;
            
        }

        else {

            userwin= comChoice === "rock" ? false : true;

        }

        showWinner(userwin,UserChoice,comChoice);

    }


}

choices.forEach((choice) => {

    choice.addEventListener("click",() =>{

        const userChoice = choice.getAttribute("id");
      
        playgame(userChoice);

    })

})