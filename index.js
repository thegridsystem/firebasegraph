var firebase = require('firebase')

var config = {
    apiKey: "AIzaSyDqzcIJEDrb8E4yJubktyfyIh2YFZFJL54",
    authDomain: "grid-b7f66.firebaseapp.com",
    databaseURL: "https://grid-b7f66.firebaseio.com",
    projectId: "grid-b7f66",
    storageBucket: "grid-b7f66.appspot.com",
    messagingSenderId: "571229097625"
};
firebase.initializeApp(config);

setInterval(function() {
    var date = new Date();
    var current = date.getHours();
    var current_hour = current + 1;
    console.log("The hour is " + current_hour);
    if(current_hour < 6){
        console.log("under six");
        preNuclear = Math.random() * ((0.35-0.30)+1) + 30;
        preSolar = 0;
        preHydro = Math.random() * ((5-0)+1) + 0;
        prePavegen = Math.random() * ((2-0)+1) + 0;
        preOther = Math.random() * ((10-0)+1) + 0;
    }
    else if(current_hour < 12){
        console.log("under 12");
        preNuclear = Math.random() * ((0.30-0.20)+1) + 20;
        preSolar = Math.random() * ((35-25)+1) + 25;
        console.log(preSolar);
        preHydro = Math.random() * ((15-10)+1) + 10;
        prePavegen = Math.random() * ((15-10)+1) + 10;
        preOther = Math.random() * ((10-4)+1) + 4;
    }  
    else if(current_hour < 15){
        console.log("under 15");
        preNuclear = Math.random() * ((0.30-0.25)+1) + 25;
        preSolar = Math.random() * ((45-30)+1) + 30;
        preHydro = Math.random() * ((15-10)+1) + 10;
        prePavegen = Math.random() * ((12-5)+1) + 5;
        preOther = Math.random() * ((6-4)+1) + 4;
    }  
    else if(current_hour < 18){
        console.log("under 18");
        preNuclear = Math.random() * ((0.33-0.30)+1) + 30;
        preSolar = Math.random() * ((35-28)+1) + 28;
        preHydro = Math.random() * ((14-10)+1) + 10;
        prePavegen = Math.random() * ((15-10)+1) + 10;
        preOther = Math.random() * ((6-4)+1) + 4;
    }  
    else if(current_hour < 24){
        console.log("under 24");
        preNuclear = Math.random() * ((0.35-0.30)+1) + 30;
        preSolar = 0
        preHydro = Math.random() * ((6-2)+1) + 2;
        prePavegen = Math.random() * ((5-0)+1) + 0;
        preOther = Math.random() * ((5-0)+1) + 0;
    }  
    else if(current_hour == 24){
        preNuclear = Math.random() * ((0.45-0.40)+1) + 40;
        preSolar = 0;
        preHydro = Math.random() * ((4-0)+1) + 0;
        prePavegen = 0;
        preOther = Math.random() * ((4-0)+1) + 0;
    }  
    else{
        console.log("Error, Time Settings are not correct");
    }    
    
    total = preNuclear + preSolar + preHydro + prePavegen + preOther;
    nuclear = Math.round(preNuclear/total * 100);
    solar = Math.round(preSolar/total * 100);
    hydro = Math.round(preHydro/total * 100);
    pavegen = Math.round(prePavegen/total * 100);
    other = Math.round(preOther/total * 100);
    console.log(nuclear+solar+hydro+pavegen+other);

    firebase.database().ref('/graph').set({
        nuclear: nuclear,
        solar: solar,
        hydro: hydro,
        pavegen: pavegen,
        other: other,
    });
}, 4000);

