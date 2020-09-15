//W3D3 HW

//1: booleans
//2: string
//3: object
//4: array
//5: object and array
//6: object and array



// Take it easy 


//1
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
//2
console.log(rainbow[4]);
//3
const Arron = {
    team: "ChelseaFC",
    food: "Taco's & Enjera",
    hobby: "Soccer",
    ethinicity: "Eritrean",
    datatype: "array"
}
//4
console.log(Arron.hobby);




///////
//////Crazy Object /////


//1.
console.log(crazyObject.taco[1].salsa[5])

//2.
console.log(crazyObject.larry.quotes[0]);

//3.
console.log(crazyObject.larry.characters[2].favourtieHobby);

//4.
console.log(crazyObject.larry.characters[1]);

//5. 
crazyObject.larry.quotes.push('I\'m trying to elevate small talk to medium talk')
console.log(crazyObject.larry.quotes);



//// Object-ception

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null

console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo)



//Bond films
//////

//1 
const bondYear = []
for(i = 0; i < bondFilms.length; i++){
    if(bondFilms[i].year % 2 !== 0 ){
        bondYear.push(bondFilms[i].year)
    }
}

console.log(bondYear)

//2
const oddBonds = bondFilms; 
function oddYear(year){
oddBonds.filter((year),)
}
for(i = 0; i < oddBonds.length; i++){
    if(oddBonds[i].year % 2 !== 0 ){
        console.log(oddBonds[i]);
    }
}

//3

const totalGross = bondFilms.reduce((currentTotal, bondFilms) => {
    return bondFilms.gross + currentTotal
}, 0)
    console.log(totalGross);


    //The best i could do so far, will try again soon on hungry for more.