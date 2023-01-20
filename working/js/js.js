let eqn = prompt("Enter your equation:")

// splitting eqn in reference to "+"
let plus = eqn.split("+");
// adding "+" to the 2nd and above terms
for(let a = 1; a < plus.length; a++){
    plus[a] = "+" + plus[a];
}

// splitting plus in reference to "-"
let minus_1 = [];
for(let a = 0; a < plus.length; a++){
    minus_1[a] = plus[a].split("-");
}
// adding "-" to the 2nd and above terms
for(let a = 0; a < minus_1.length; a++){
    if(Array.isArray(minus_1[a]) == true){
        for(let b = 1; b < minus_1[a].length; b++){
            minus_1[a][b] = "-" + minus_1[a][b];
        }
    }
    else{}
}
// separating all terms (minus)
let minus = [];
for(let a = 0; a < minus_1.length; a++){
    if(Array.isArray(minus_1[a]) == true){
        for(let b = 0; b < minus_1[a].length; b++){
            minus.push(minus_1[a][b]);
        }
    }
    else{
        minus.push(minus_1[a]);
    }
}
// splitting plus in reference to "*"
let multiply_1 = [];
for(let a = 0; a < minus.length; a++){
    multiply_1[a] = minus[a].split("*");
}
// adding "*" to the 2nd and above terms
for(let a = 0; a < multiply_1.length; a++){
    if(Array.isArray(multiply_1[a]) == true){
        for(let b = 1; b < multiply_1[a].length; b++){
            multiply_1[a][b] = "*" + multiply_1[a][b];
        }
    }
    else{}
}
// separating all terms (multiply)
let multiply = [];
for(let a = 0; a < multiply_1.length; a++){
    if(Array.isArray(multiply_1[a]) == true){
        for(let b = 0; b < multiply_1[a].length; b++){
            multiply.push(multiply_1[a][b]);
        }
    }
    else{
        multiply.push(multiply_1[a]);
    }
}
// splitting plus in reference to "/"
let divide_1 = [];
for(let a = 0; a < multiply.length; a++){
    divide_1[a] = multiply[a].split("/");
}
// adding "/" to the 2nd and above terms
for(let a = 0; a < divide_1.length; a++){
    if(Array.isArray(divide_1[a]) == true){
        for(let b = 1; b < divide_1[a].length; b++){
            divide_1[a][b] = "/" + divide_1[a][b];
        }
    }
    else{}
}
// separating all terms (multiply)
let divide = [];
for(let a = 0; a < divide_1.length; a++){
    if(Array.isArray(divide_1[a]) == true){
        for(let b = 0; b < divide_1[a].length; b++){
            divide.push(divide_1[a][b]);
        }
    }
    else{
        divide.push(divide_1[a]);
    }
}
// making the equation variable
let sh_eqn = divide.join("");


// simplifying the terms / calculating the answer
divide[0] = Number(divide[0]);
let result = divide[0];
for(let a = 1; a < divide.length; a++){
    if(divide[a][0] == "+" || divide[a][1] == "+" || divide[a][2] == "+" || divide[a][3] == "+" || divide[a][4] == "+"){
        divide[a] = divide[a].replace("+", " ");
        divide[a] = Number(divide[a]);
        result = result + divide[a];
    }else if(divide[a][0] == "-" || divide[a][1] == "-" || divide[a][2] == "-" || divide[a][3] == "-" || divide[a][4] == "-"){
        divide[a] = divide[a].replace("-", " ");
        divide[a] = Number(divide[a]);
        result = result - divide[a];
    }else if(divide[a][0] == "*" || divide[a][1] == "*" || divide[a][2] == "*" || divide[a][3] == "*" || divide[a][4] == "*"){
        divide[a] = divide[a].replace("*", " ");
        divide[a] = Number(divide[a]);
        result = result * divide[a];
    }else if(divide[a][0] == "/" || divide[a][1] == "/" || divide[a][2] == "/" || divide[a][3] == "/" || divide[a][4] == "/"){
        divide[a] = divide[a].replace("/", " ");
        divide[a] = Number(divide[a]);
        result = result / divide[a];
    }
    else{
        document.write("Invalid Equation!");
    }
}

let result0 = document.createElement("div");// making an elm to store the final result
result0.innerHTML = "=" + result;
result0.id = "result";
let script_tag = document.querySelector("script[src=\"js.js\"]")
let body = document.body;
body.insertBefore(result0, script_tag);// inserting the result elm

let equation = document.getElementById("equation");// making an elm to store the eqn

let eqn0 = document.createElement("div");
eqn0.innerHTML = sh_eqn;
eqn0.id = "eqn";
equation.appendChild(eqn0);// inserting the eqn