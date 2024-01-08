window.onload = function(){
    "use strict";

    // let numberOfSeries;
    // function startApp() {
    //     numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");
    // }
    // startApp();

    // const seriesDB = {
    //     count: numberOfSeries,
    //     series: {},
    //     actors: {},
    //     genres: [],
    //     private: false,
    // };

    // for(let i = 0; i < 2; i++){
    //     const a = prompt("Oxirgi ko'rgan serialingiz?"),
    //     b = prompt ("Nechi baho bergan bo'lardingiz?");

    //     if(a != null && b != null && a != "" && b != ""){
    //         seriesDB.series[a] = b;
    //         console.log("done")
    //     }else{
    //         console.log("error");
    //         i--;
    //     }
    // }
    
    // if(seriesDB.count < 5){
    //     console.log("Kam serial ko'ripsiz");
    // }else if(seriesDB.count >= 5 && seriesDB.count < 10){
    //     console.log("siz classik tomashabin ekansiz")
    // }else if(seriesDB.count >= 10){
    //     console.log("siz serialchi zvezda ekansiz")
    // }else{
    //     console.log("Error")
    // }

    // console.log(seriesDB)



    // const age = +prompt("yoshingiz nechida?", "");

    //  if(age > 10){
    //     console.log("welcome")
    //  }else(
    //     console.log("no entry")
    //  )

    // (age > 10) ? console.log("welcome"): console.log("no entry");

    // const color = "red";
    // switch(color){
    //     case "red":
    //         console.log("stop")
    //     break;
    //     case "yellow":
    //         console.log("prepare")
    //     break;
    //     case "green":
    //         console.log("go")
    //     break;
    //     default: 
    //         console.log("daltonik");
    //     break;
    // }


    // let i = 1;
    // while(i <= 20){
    //     console.log(i);
    //     i++;
    // }

    // do{
    //     console.log(i);
    //     i++;
    // } while(i <= 20);

    // let gacha = 100;
    // for(let i = 0; i <= gacha; i++){
    //     console.log(i)
    // }

   
    // function logger(text){
    //     console.log(text)
    // }
    // logger("hello world");
    // logger("hello javaScript");

    // function calc(a, b){
    //     console.log(a + b)
    // }
    // calc(10, 5);
    // calc(10, 9);

    // function sayMyName(name, surname){
    //     console.log(`My name is ${name} ${surname}`)
    // }
    // sayMyName("Jamshid", "Choriyev")

    // function calc(a, b){
    //     return a + b;
    // }
    // console.log(calc(10, 5));
    
    // function calc(a, b){
    //     return a + b;
    // }
    // const sumOfAandB = calc(10, 5);
    // console.log(sumOfAandB);


     // function expression 

    //  const logger = function(){
    //     console.log("Hello world")
    //  }
    //  logger();



    // arrow function

    // const logger = () => {
    //     console.log("hello world")
    // }
    // logger();




    // method and properties

    // string
    // const user = "Jamshid";
    // console.log(user.length);

    // const arr = [1, 2, 3, 4];
    // console.log(arr.length);


    // const upperCaseUser = user.toUpperCase();
    // console.log(upperCaseUser);
    // console.log(user.toLowerCase());
    
    // const greeting = "Hello world";
    // console.log(greeting.indexOf("w"));

    // console.log(greeting.slice(0, 5));
    // console.log(greeting.slice(6, 11));


    // number

    //const num = 8.8;
    //console.log(Math.round(num));

    //const borderWidth = "13.8px";
    //console.log(parseInt(borderWidth));
    // bunda malumotni number qiladi lekin 13 qaytaradi
    //console.log(parseFloat(borderWidth));
    // bunda malumotni number qiladi lekin 13.8 qaytaradi




    //  callback 
    // function first () {
    //     setTimeout(()=>{
    //         console.log(1);
    //     }, 1000)
    // }
    // function second () {
    //     console.log(2);
    // }

    // first();
    // second();

    function edu(subject, callback){
        console.log(`I wanna teach ${subject}`);
        callback();
    }

    edu("Javascript", function(){
        console.log("That's great");
    });


}

