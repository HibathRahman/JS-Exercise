// global scope 
var x = 1;

// block scopes

let y = 2;
const z = 3;

console.log(`global scope : ${x}`);
console.log(`global scope : ${y}`);
console.log(`global scope : ${z}`);


// local scope - functional scope
// local scope - block scope ( if else loop - { inside })

function myFunc(){

    const z = 5 ;
        console.log(`functional scope : ${x}`);
        console.log(`functional scope : ${y}`);
        console.log(`functional scope : ${z}`);

    if(true){
        let y = 4;
        console.log(`block scope : ${x}`);
        console.log(`block scope : ${y}`);
        console.log(`block scope : ${z}`);
    }
}
myFunc();
console.log(y);

/////8888888888888888888888/////////////////////////////////

// // global scope 
// var x = 1;

// // block scopes

// let y = 2;
// const z = 3;

//         console.log(`global scope : ${x}`);
//         console.log(`global scope : ${y}`);
//         console.log(`global scope : ${z}`);


// // local scope - functional scope
// // local scope - block scope ( if else loop - { inside })

// function myFunc(){

//     const z = 5 ;

//     if(true){
//         let y = 4;
//         //  y = 4 value cant go outside
//         //  mufunc is a parent of this if statement . so parent value come inside
//         console.log(`block scope : ${x}`);
//         console.log(`block scope : ${y}`);
//         console.log(`block scope : ${z}`);
//     }
//         console.log(`functional scope : ${x}`);
//         console.log(`functional scope : ${y}`);
//         console.log(`functional scope : ${z}`);
// }
// myFunc();
// console.log(y);