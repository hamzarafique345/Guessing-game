import inquirer from "inquirer"

const number =Math.floor(Math.random()* 10 + 1 );

const answer =await inquirer.prompt([
    {
        message:"SELECT NETWEEN 1 TO 10",
        type:"number",
        name:"guessingnumber"
    }
])

if(answer.guessingnumber === number){
    console.log("Congratulation ! You Win A Guessing Game .")
}
else{
    console.log("PLEASE ENTER CORRECT NUMBER")    
}
