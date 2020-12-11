

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
