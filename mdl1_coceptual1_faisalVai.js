 //30 min teke soro hbe
//vaier ajkr cls er 95t JS file clct korte hbe

console.log("hello world");
//28 min teke soro hbe
console.log("we love Javascript");

console.log("we are learning Javascript");


/*npm init --y
ata package.json file toiri korbe*/

/*npm install nodemon -D
ata node module file toiri korbe*/

//development stage,production stage,staging stage

//package.json e gie scripter oikane likbo-----> "start-dev" : "nodemon mdl1_coceptual1_faisalVai.js"
//then
//npm run start-dev

console.log("I fell nJoy learning Javascript");
console.log("I love Javascript");

let x = 6;
let y = 88;
let z = x + y;
let z2 = x * y;
let z3 = x / y;
console.log(z);
console.log(z2);
console.log(z3);

//1:02 min teke soro hbe

//.gitignore die 1t file banabo
//git remote -v------ata amar git link dibe

let name1 = "Sohel";
//console.log(name);
//console.log(name);
let a = 5;
console.log(a);
console.log(name1);
console.log("i love bangladesh");
console.log("I am Sohel Shahid");
console.log("I love my Maaaaaaaaaaaaaaaaaaaaaaaa");

let stdNm = "Shahid";
console.log(stdNm);

const instituteName = "Ostad";
console.log(instituteName);

//= is assignment opeartor;
//== loose equality
//=== strict equality


//data type

let stdAge = 32;
let isAdult = true;
console.log(typeof(isAdult));
console.log(typeof(stdAge));
console.log(typeof(stdNm));

//template literal or string literal
let income = 1000;
let expense = 500;
let information = `I am studying in ${instituteName}.My Name is ${stdNm}.My net 
    income = ${income}-${expense}==${income-expense}.I love ❤ my mother❤❤❤🥰🥰🥰.`;
console.log(information);

let fruits = ["Banana","Apple","Orange","Mango"];
console.log(fruits);
let nmbrs = [50,55,98,56,23,78];
console.log(nmbrs[3]);
console.log(fruits[fruits.length]);
console.log(fruits[fruits.length-1]);

//47 min teke sor hbe

fruits[3] = "Jambura";
console.log(fruits);

let person = {
    fistName : "Sohel",
    lastName : "Shahid",
    age : 32,
    isAdultyyy : true,
    isStudent : true,
    address : {
        road : 3,
        houseNo : "114A",
        city :"Chattogram",
        country: "Bangladesh"
    },
    education : {
        Bsc : 2017,
        Hsc : 2009,
        Ssc : 2007,
        institute : ["CUET","Rangunia College","Uttar Pomra High School"]
    },
    fullName : this.fistName + this.lastName
    //51 min teke soro hbe
}
console.log(person[fullName]);
console.log(person.age);

