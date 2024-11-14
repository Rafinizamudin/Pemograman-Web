document.write("Function <br>");
function sayhello(){
    document.write("Hello Rafi!!<br>");
}

sayhello();
sayhello();

document.write("<br>Function with Parameters <br>");
function sayhellowithparam(firstName, lastName){
    document.write(`Hello ${firstName} ${lastName}!</br>`);
}

sayhellowithparam('Rafi', 'Nizamudin');
sayhellowithparam('Inzaqi', 'Rizkan');

document.write("<br>Function with Optional Parameters <br>");
function sayhellowithoptparam(firstName, lastName){
    document.write(`Hello ${firstName} ${lastName}!</br>`);
}

sayhellowithoptparam('Rafi');

document.write("<br>Function with Default Parameters <br>");
function sayhellowithdefparam(firstName, lastName = 'Zakaria'){
    document.write(`Hello ${firstName} ${lastName}!</br>`);
}

sayhellowithdefparam('Rafi', 'Nizamudin');
sayhellowithdefparam('Rizkan');

document.write("<br>Anonymous Function <br>");
let hello = function (name) {
    document.write(`Hello ${name} </br>`);
}

hello('Rafi');

document.write("<br>Function in Function <br>");
function outerfa(outerVaria) {
    function innerfa(innerVaria) {
        document.write("Outer Variable: " + outerVaria + '<br>');
        document.write("Inner Variable: " + innerVaria + '<br>');
    }
    innerfa("Inner");
}

outerfa("Outer");

document.write("<br>Arrow Function <br>");
const greet = (name) => {
    document.write("Hello, " + name + "! <br>");
};

greet("Rafi");

document.write("<br>Closure <br>");
function outerf(outerVari) {
    return function innerf(innerVari) {
        document.write("Outer Variable: " + outerVari + '<br>');
        document.write("Inner Variable: " + innerVari + '<br>');
    }
}
const newf = outerf("Outer");
newf("Inner");
newf("Outer");