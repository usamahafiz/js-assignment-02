function clearbutton(){
    document.getElementById("output").innerHTML = "";
}

function clearstatement(){

    document.getElementById("statement").innerHTML ="";
}

//concatenate strings
function concatenate(){

    let message = "How are you"
    let name =  "Mr.Usama"
    let banger = "!"
    let finalmessage = message + " " + name + banger ;
    document.getElementById("statement").innerHTML = "Concatenetion of strings are given below:"
    document.getElementById("output").innerHTML = finalmessage ;
}

// ask name 
function askname(){

    let firstName = prompt("Please enter your firstname")
    let lastName = prompt("Please enter your lastname")
    let fullName = `${firstName} ${lastName}`;
    document.getElementById("statement").innerHTML = `first name = ${firstName} <br> last name = ${lastName} <br> full name = first name + last name`;
    document.getElementById("output").innerHTML = `fullname = ${fullName}`;
}
//comparison
function comparison(){
    let num1 = prompt("Enter first number");
    let num2 = prompt("Enter second number");
    if(num1 == num2){
        document.getElementById("statement").innerHTML = "num1 == num2";
        document.getElementById("output").innerHTML = `The first number ${num1} is equal than the
        second number ${num2}`;
}
else{
    document.getElementById("statement").innerHTML = "num1 != num2";
    document.getElementById("output").innerHTML = `The first number ${num1} is not equal than
    the second number ${num2}`;
}
}

//if else if statement
function ifelse(){
    let number = prompt("please enter your number")
    if(number > 90){
        document.getElementById("output").innerHTML = "Congratulation! your grade is A"
}
else if(number > 80){
    document.getElementById("output").innerHTML = "well done! your grade is B"
}
else if (number > 70){
    document.getElementById("output").innerHTML = "good! your grade is C"
}
else{
    document.getElementById("output").innerHTML = "sorry! your grade is F"
}
}

//tested conditions 
function conditions(){
    let age = prompt("please enter your age");
    let weight = prompt ("please enter your weight")
    if(age <=10 && weight >= 28 ){
        document.getElementById("output").innerHTML = "you are a baby boy"
    }
    else if( age <=18 && weight <= 46){
        document.getElementById("output").innerHTML = "you are a teenager and healthy"
    }
    else if( age <=24 && weight <= 79){
        document.getElementById("output").innerHTML = "you are a young man and fatty"
    }
    else{
        document.getElementById("output").innerHTML = "you are an old man and skinny"
    }

}
//nested if statement 
function nestedif(){
    let userName = prompt ("please enter your username")
    if(userName === "hafizusama"){
        let password = prompt ("please enter your password")
        if(password == 6446){
            document.getElementById("output").innerHTML = "welcome Hafiz Usama"
    }
    else{
        document.getElementById("output").innerHTML = `<span class='text-danger'>${password}</span> is incorrect password. <br> correct password is <span class='text-success'>6446</span>`
    }
}
    else{
        document.getElementById("output").innerHTML = `<span class='text-danger'>${userName} </span> is incorrect user name. <br> correct user name is <span class='text-success'> "hafizusama"</span>`
    }

}

// login 
function login(){
    let userName = prompt("please enter username")
    let passWord = +prompt("please enter password")
    if (userName === "Hafiz Usama" && passWord === "6446"){
        document.getElementById("statement").innerHTML = `<span style='color:green; font-weight:bold;'>${userName}</span>`
        document.getElementById("output").innerHTML = `<span style='color:green; text-transform:capitalize;'>you are successfully logged in</span>`
    }
    else {
        document.getElementById("output").innerHTML = "Try using Hafiz Usama as username and 6446 as a password"
    }

}
