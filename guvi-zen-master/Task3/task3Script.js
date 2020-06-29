let pattern = "# ";
for(let i=0; i<5; i++){
    console.log(pattern)
    pattern+="# "
}

let stringArray = ["bharani", "dharan", "guvi", "zen", "chennai"];
console.log(stringArray.join(' '))
let length = 0;
stringArray.forEach(value => length++)
console.log("The length of array is",length)

let foods = ['biriyani', 'chicken', 'dosa', 'idly', 'paneer',
              'Butter chicken', 'chapati', 'khichidi', 'kulfi',
              'icre-cream', 'rice', 'meals', 'fish', 'egg', 
              'half-boil', 'pani puri', 'samosa' ,'prawn', 'Bonda']
console.log("Fifth element in food array is ", stringArray[4]);
console.log("Length of food array is ", stringArray.length);


let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];

for (var i = 0; i < friends.length; i++) {    
    if(friends[i] == 'Mari') friends[i] = "Munnabai"
}
console.log(friends.join(', '))

console.log('Printing name until CapAmerica');
let name = ""
for (var i = 0; i < friends.length; i++) {    
    if(friends[i] == 'CaptianAmerica') break;
    name += friends[i] + ' ';
}
console.log(name);

console.log('Printing if Jeff is in Friend list');
if(friends.includes("Jeff")) console.log("Friend");
else console.log("Not friend")

var friends2 = [
    "Gabbar",
    "Rajinikanth",
    "Mass",
    "Spiderman",
    "Jeff",
    "ET"
    ];
let allFriends = friends.concat(friends2).sort()
console.log("Friend array as alphabetically-sorted list")
console.log(allFriends.join(', '));

//— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — 

let friendsList = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
let firstFriend = friendsList[0];
let lastFriend = friendsList[friendsList.length-1];
let middleFriend = [];
let midLen = friendsList.length /2 ;

if(friendsList.length%2==0){
    middleFriend.push(midLen - 1);
}

middleFriend.push(midLen);

console.log("First element in array is", firstFriend);
console.log("Last element in array is", lastFriend);
console.log("Mid element in array is", middleFriend);    

friendsList.unshift("Bharani");
friendsList.push("Thamizh");
console.log("Array after insertion at front and end is",friendsList.join('--'));

console.log("Concating array with , seperated string",friendsList.join(','));

let names = friendsList.filter(each => each.startsWith('M'));
console.log("Name starts with 'M'",names.join(' '))

names = friendsList.filter(each => each.includes('a'));
console.log("Name includes 'a' in it'",names.join(' '));

let sumOfLength = 0;
friendsList.forEach(each => {
    sumOfLength += each.length;
    console.log(each, each.length)
})
console.log("Average length friends array is", sumOfLength/friendsList.length);

let max = "";
let min = friendsList[0];
friendsList.forEach(each => {
    if(max.length < each.length) max = each;
    if(min.length > each.length) min = each;
})

console.log("Name with max character", max)
console.log("Name with min character", min)

const friendsInfo = [6, 12, "Mari", 1, true, "Munnabai", "200", "CaptianAmerica", 8, 10];
let sumOfNum = friendsInfo.reduce((acc, value) => {
    if(typeof value == "number")   acc += value;
    return acc;
},0);
console.log("Sum after adding only Number in array", sumOfNum/friendsInfo.length);

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ];

input.forEach( data => console.log(data.join(' ')))

let myObj = {"name":"GUVI Geek", "no":6, "place" : "IIT-M RP", "district":"Chennai"};
console.log(myObj)