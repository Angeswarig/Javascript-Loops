//ForEach();
var myStates=[
    "TamilNadu",
    "Rajasthan",
    1947,
    "Assam",
    "Delhi",
    "Maharashtra"
]
myStates.forEach((states)=>(console.log(states)));

//Forof() is used in Array;
var socialMedia=["YouTube","Instagram","Amazon","Twitter","Netflix"];
for(const n of socialMedia){
    console.log(n)
}

//Forin() is used in object;
var symbols={
    yt:"youtube",
    ig:"instagram",
    tw:"twitter",
    lco:"learn code online.in"
}
for(const n in symbols){
    console.log(symbols[n]);
    console.log(` key is:${n} and the value is:${symbols[n]}`);
}