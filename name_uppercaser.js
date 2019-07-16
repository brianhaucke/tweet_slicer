var name = prompt("Enter your name: ");
var first_letter = (name.slice(0,1)).toUpperCase();
var rest_of_name = (name.slice(1, (name.length))).toLowerCase();
var full_name = first_letter + rest_of_name;
alert("Hello, " + full_name);