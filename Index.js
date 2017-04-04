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
    preNuclear = Math.random() * ((0.45-0.35)+1) + 35;
    preSolar = Math.random() * ((45-30)+1) + 30;
    preHydro = Math.random() * ((15-5)+1) + 5;
    prePavegen = Math.random() * ((10-2)+1) + 2;
    preOther = Math.random() * ((15-5)+1) + 5;
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
}, 2000);