window.onload = function(){
    "use strict";

    const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");

    const seriesDB = {
        count: numberOfSeries,
        series: {},
        actors: {},
        genres: [],
        private: false,
    };

    const a = prompt("Oxirgi ko'rgan serialingiz?"),
    b = prompt ("Nechi baho bergan bo'lardingiz?"),
    c = prompt("Oxirgi ko'rgan serialingiz?"),
    d = prompt ("Nechi baho bergan bo'lardingiz?");

    seriesDB.series[a] = b;
    seriesDB.series[c] = d;

    console.log(seriesDB)




    let ason = 10;
    let bson = 10;

    console.log(ason++);
    console.log(bson--)

}