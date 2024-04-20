#! usr/bin/env node

import inquirer from "inquirer";
import promptSync from 'prompt-sync'
const prompt = promptSync();
console.log('<====================== Well come to the Todo list==========================>')
let myList: string  [] = [];

while(true){


const answer = await inquirer.prompt([
    {
        type:'list',
        name:'query',
        message: 'what do you want to do list',
        choices: ['View list','Add item','Delet item','Exit']

    }
])
console.log('<====================================== View List===========================>')
if(answer.query === 'View list'){
    for(let item of myList){
    console.log(myList.indexOf(item) +' : ' + item);
    }
console.log('<=======================================Add Item ============================>')    
}else if(answer.query === 'Add item'){
    let input = prompt("Enter Add item here:");
    myList.push(input);
console.log('<========================================Delet Items==========================>')    
}else if (answer.query === 'Delet item'){
    for(let item of myList){
        console.log(myList.indexOf(item)+ ' : ' + item);
 }
     let deletIndex = Number(prompt('Enter index number of item that you want to delet:'));
    myList.splice(deletIndex, 1);
 
    }else{
    console.log('<============================= Thanks using My Application=============================>');
    break;
}
};
   

