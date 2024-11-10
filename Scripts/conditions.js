// console.log("if-statement ");

// // if statement ------ 
// // if(condition){
// // code to be executed if condition is true
// //

// if(3>1){
//     console.log("I am inside the if statement");
// }

// let isTrue = false;

// if(isTrue){
//     console.log("Yes");
// }else{
//     console.log("No");
// }

// let age = 50;

// if(age>=21){
//     console.log("you are an adult");
// }else{
//     console.log("you are an underage");
// }

// // -- if-else if-else statements --

// // if(condition){
// //     code to be executed if condition is true
// // }else{
// //     code to be executed if condition2 is true
// // }else{
// //     code to be executed if conditions are false
// // }

// age = 75;

// if(age<13){
//     console.log("Child");
// }else if(age<20){
//     console.log("Teenager");
// }else if(age<64){
//     console.log("adult");
// }else{
//     console.log("Senior");
// }

// let week = new Date().getDay();

// if(week == 1){
//     console.log("Monday")
// }else if(week == 2){
//     console.log("Tue")
// }else if(week == 3){
//     console.log("Wed")
// }else if(week == 4){
//     console.log("Thurs")
// }else if(week == 5){
//     console.log("Fri")
// }else if(week == 6){
//     console.log("Sat")
// }else if(week == 7){
//     console.log("Sun")
// }else{
//     console.log("Invalid");
// }

// let userAge = 15;

// if (userAge<12){
//     console.log("$5");
// }else if(userAge<18){
//     console.log("$8");
// }else {
//     console.log("$10");
// }

// movie ticket answer //

// function ticketCalculator(){
//     let age = prompt("Enter the age");
//     let price;
//     if (userAge<12){
//         price=5;
//     }else if(userAge<18){
//         price=8;
//     }else {
//         price=10;
//     }

//     console.log("Your ticket price is: $" + price);
// }

function outfitSuggestion(){
    let temp = prompt("What is the temperature in Celsius?");
    let outfitSuggestion;
    if (temp<15){
        outfitSuggestion="It's pretty cold. You should wear a jacket";
    }else if(temp<25){
        outfitSuggestion="It's a bit chilly, you should wear a sweater";
    }else {
        outfitSuggestion="You're good. Wear a t-shirt";
    }

    console.log(outfitSuggestion);
}