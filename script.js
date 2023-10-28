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
    b = prompt ("Nechi baho berasz?"),
    c = prompt("Oxirgi ko'rgan serialingiz?"),
    d = prompt ("Nechi baho berasz?");

    seriesDB.series[a] = b;
    seriesDB.series[c] = d;

    console.log(seriesDB)



}