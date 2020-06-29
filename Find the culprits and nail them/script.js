// alert("I'm invoked!");

// alert("I'm JavaScript!");
// alert('Hello') // this line is not having semicolon
// alert(`Wor
//  ld`)
// alert(3 +
// 1
// + 2); // this is multiple line code and its working

// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname+' '+lname;
// alert( admin ); // "Guvi geek"

var a = "2" > "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}
console.log("Because in a the string 2 and 12 where string 2 is greater than 12. It can be Diffused by changing 2 and 12 as number")


a = prompt("Enter a number?");
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}
console.log("Cancel the prompt instead of giving input to get result");

let value = prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else if(value != null){
      console.log("You scored",value);
}
else{
    console.log("You scored 0")
}

let login = 'Employee';
let msg = (login == 'Employee') ? "Welcome Employee": // Added meessage if true
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(msg);


let message;
if (null || 2 || undefined )
{
 message = "welcome boss"; // removed let
}
else
{
  message = "Go away"; // removed let
}
  console.log(message);

message;
let lock = 0; //changed from 2 to 0
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);


message;
lock = 0; //changed from 2 to 0
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);


let i = 3;
while (i) {
  console.log(i--);
}

let num = 1;

while(num < 11){
    let cnt = 4, res = "";
    while(cnt > 0 && num < 11){
        res += num++ +' '
        cnt--;
    }
    console.log(res)
}
console.log('-----------------');
console.log('Even number only')
for (let num = 2; num <= 20; num += 2) {
    console.log(num)
}

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log('Wrapped '+gifts[i] +'and added a bow!');
}

let countdown = 100;
while (countdown > 100) {
 if(countdown == 0)
  {
   console.log("bomb triggered");
  } 
  countdown--;
}


var lemein = "0";
var lemeout = 0;
msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log("consoles hi because if we pass string to 'if' condition the length of string is tested")
console.log(msg);