import inquirer from "inquirer";
const number = Math.floor(Math.random());
const answer = await inquirer.prompt([
    {
        message: "Enter Number Tried Luck",
        type: "number",
        name: "guessingnumber"
    }
]);
if (answer.guessingnumber === number) {
    console.log("Congratulation ! You Win A Guessing Game .");
}
else {
    console.log("PLEASE ENTER CORRECT NUMBER");
}
