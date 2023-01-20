// Guessing roll number

// const roll = 41;

// let guess = prompt("Guess my roll number , it is between 1 to 100");

// guess = Number(guess);

// // console.log( typeof guess);

// if(guess <= 20 && guess >= 1){
//     document.write(" not too close");
//  }else if(guess <= 40 && guess >= 20){
//     document.write(" very close !!");
//  }else if(guess == 41){
//     document.write(" yes!!, my roll number is 41.");
//  }else if(guess <= 60 && guess >= 42){
//     document.write("very close !!");
//  }else if(guess <= 80 && guess >= 60){
//     document.write(" not too close");
//  }else if(guess <= 100 && guess >= 80){
//     document.write(" not close");
//  }else{
//     document.write(" I said between 1 and 100 !!");
//  }



// Making a pattern not with " "

// function attach ( alpha, times){
//    let result;  

//    for(let a = 0; a <= times; a++){     

//        let middle = alpha + result ?? "";
//        result = middle ;

//    }
//    let len = result.length;
//    result = result.substr(0, len - 10);
//    document.write(result);
//    // document.write('<br>');
// }
// // attach("a",72);
// function pattern(v){

//    for(let a = 0; a <= 70; a++){
//        document.write( attach("_", a) ?? "" +  v);
//        document.write('<br>');
//    }
//    for(let b = 70; b >= 0; b--){
//        document.write( attach("_", b) ?? "" +  v);
//        document.write('<br>');
//    }

// }
// pattern("|");
// pattern("|");
// pattern("|");

// pattern("|");
// pattern("|");
// pattern("|");
// pattern("|");
// pattern("|");
// pattern("|");
// pattern("|");
// pattern("|");
// pattern("|");
// pattern("|");

// pattern("|");
// pattern("|");
// pattern("|");
// pattern("|");
// pattern("|");
// pattern("|");

// pattern("|");
// pattern("|");
// pattern("|");

// pattern("|");
// pattern("|");
// pattern("|");


//  A simple clock

// let date = new Date();


// let day = date.getDay();
// let mon = date.getMonth();
// let date1 = date.getDate();
// let hour = date.getHours();
// let min = date.getMinutes();
// let sec = date.getSeconds();
// let msec = date.getMilliseconds();

// switch(mon){
//     case 0: {
//         mon = "Jan";
//         break;
//     }
//     case 1: {
//         mon = "Feb";
//         break;
//     }
//     case 2: {
//         mon = "Mar";
//         break;
//     }
//     case 3: {
//         mon = "April";
//         break;
//     }
//     case 4: {
//         mon = "May";
//         break;
//     }
//     case 5: {
//         mon = "June";
//         break;
//     }
//     case 6: {
//         mon = "July";
//         break;
//     }
//     case 7: {
//         mon = "Aug";
//         break;
//     }
//     case 8: {
//         mon = "Sep";
//         break;
//     }

//     case 9: {
//         mon = "Oct";
//         break;
//     }
//     case 10: {
//         mon = "Nov";
//         break;
//     }
//     case 11: {
//         mon = "Dec";
//         break;
//     }
// }
// switch(day){
//     case 0:{
//         day = "Mon";
//     }
//     case 1: {
//         day = "Tue";
//     }
//     case 2: {
//         day = "Wed";
//     }
//     case 3: {
//         day = "Thu";
//     }
//     case 4: {
//         day = "Fri";
//     }
//     case 5: {
//         day = "Sat";
//     }
//     case 6: {
//         day = "Sun";
//     }
// }

// document.write(`${mon} ${date1} ${day}`);
// document.write('<br>');
// document.write( `${hour} : ${min} : ${sec} : ${msec}`);

//  Uncompleted calculator

// let a = prompt("Enter your equation:");

// let plus_1 = a.split("+");

// for(let b = 0; b < plus_1.length; b++){
//     plus_1[b] = "+" + plus_1[b];
// }

// let minus;

// for(let d = 0; d < plus_1.length; d++){
//     minus = plus_1[d].split("-");
// }

// for(let e = 1; e < minus.length; e++){
//     minus[e] = "-" + minus[e];
// }

// let multi;

// for(let f = 0; f < minus.length; f++){
//     multi = minus[f].split("*");
// }

// for(let h = 0; h < minus.length; h++){
//     multi = minus[h].split("x");
// }

// for(let i = 0; i < minus.length; i++){
//     multi = minus[i].split("X");
// }

// for(let g = 1; g < multi.length; g++){
//     multi[g] = "*" + multi[g];
// }

// let divide;

// for(let j = 0; j < multi.length; j++){
//     divide = multi[j].split("/");
// }

// for(let k = 0; k < multi.length; k++){
//     divide = multi[k].split("÷");
// }

// for(let l = 1; l < divide.length; l++){
//     divide[l] = "/" + divide[l];
// }

// console.log(divide);