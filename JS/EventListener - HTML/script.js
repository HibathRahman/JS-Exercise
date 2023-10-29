// syntax
// .addEventListener(event, function , useCapture)
// useCapture mean BUBBLING UP IF FALSE 
// IF TRUE BUBBLING DOWN
//  STOPPROPAGATION stops the up and down
// const doSomething = () =>{
//     alert("check");
// }


// h2.addEventListener("click" , doSomething , false)
// h2.removeEventListener("click" , doSomething , false)

// view.classList.add("purple");
// view.classList.remove("blue");

// view.classList.toggle("bg-color");
// view.classList.toggle("border");



// firstApp Initiate

document.addEventListener("readystatechange" , (event)=>{
if(event.target.readyState === "complete"){
    console.log("complete");
    initApp();
}
})
// bubbling down bcoz true

const initApp = () =>{

    const view = document.querySelector("#view2");
    console.log(view);
    
    const div = view.querySelector("div");
    
    const h2 = div.querySelector("h2");

    view.addEventListener("click" , (event) =>{
        // event.stopPropagation();
        view.classList.add("purple");
    },true)
    // view is a parent its include child div and grandchild h2
    // true mean bubbling down 
    
    div.addEventListener("click" , (event)=>{
        event.stopPropagation();
        div.style.backgroundColor = "green";
    },true);
     
 
    // when h2 click bubbling down happen within sec , view -> div -> h2
    h2.addEventListener("click" , (event)=>{
        // event.stopPropagation();
        event.target.innerText = "Rahman"

    },true)
}

// BUBBLING UP AND STOPPROPAGATION 

// const initApp = () =>{

//     const view = document.querySelector("#view2");
//     console.log(view);
    
//     const div = view.querySelector("div");
    
//     const h2 = div.querySelector("h2");

//     view.addEventListener("click" , (event) =>{
//         event.stopPropagation();
//         view.style.backgroundColor = "purple";
//     })
//     // view is a parent its include child div and grandchild h2
    
//     div.addEventListener("click" , (event)=>{
//         event.stopPropagation();
//         div.style.backgroundColor = "green";
//     });

//     h2.addEventListener("click" , (event)=>{
//         event.stopPropagation();
//         event.target.innerText = "Rahman"

//     })
// }




// h2.addEventListener("click", function(event){
//    console.log( event.target);
//    event.target.textContent = "changed"
// })
