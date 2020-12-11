

//file to add dynamic properties to the web page

$("#name").on('blur focus', function(e) {
    switch(e.type) {
        case  "blur":
            greet();        
        break;

        case  "focus":
            ask_name();        
        break;
    }
});

$("#date").on('blur focus', function(e) {
    switch(e.type) {
        case  "blur":
            get_age();        
        break;

        case  "focus":
            prompt_age();        
        break;
    }
});

//ask for name on focus
function ask_name() {
    document.getElementById("nameOutput").innerText = "Hello there! What's your name?";
  }

//greet with name on blur
function greet() {
    username = document.getElementById("name").value;

    if (username){
        document.getElementById("nameOutput").innerText = `Hi, ${username}!`;
    }
    else {
        document.getElementById("nameOutput").innerText = "Hi! Please enter your name ";
        }
    }   

//calculation of age taken from https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
function get_age() {
    birthdate = document.getElementById("date").value;

    if (birthdate){
        var birthday = +new Date(birthdate); //converts the object to the integer representation of the date object
        age =  ~~((Date.now() - birthday) / (31557600000)); //~~ for rounding. Subtract the difference and divide by a year(24 * 3600 * 365.25 * 1000)
        document.getElementById("ageOutput").innerText = `Hi, you are ${age} years old! Congrats on making it thus far :)`;
        }
    else {
        document.getElementById("ageOutput").innerText = `Would you mind entering your birthdate?`;
        }
    }

function prompt_age(){
    document.getElementById("ageOutput").innerText = `Lemme guess, your age is...`;
}