document.addEventListener("readystatechange" , (event)=>{
    if(event.target.readyState === "complete"){
        console.log("complete");
        initApp();
    }
})


// event target mean touched element backgroundcolor will change

const initApp = () =>{

    const view = document.querySelector("#view2");
    console.log(view);
    
    const div = view.querySelector("div");
    
    const h2 = div.querySelector("h2");

    view.addEventListener("click" , (event) =>{
        // event.stopPropagation();
        event.target.classList.add("purple")
    })
    // view is a parent its include child div and grandchild h2
    
    div.addEventListener("click" , (event)=>{
        // event.stopPropagation();
        event.target.style.backgroundColor = "green";
    });

    h2.addEventListener("click" , (event)=>{
        // event.stopPropagation();
        event.target.innerText = "Rahman"

    })
}


const navBar =  document.querySelector("nav");
const h1 = navBar.querySelector("h1");

navBar.addEventListener("mouseover" , (event)=>{
       event.target.style.backgroundColor = "green";
       
})

navBar.addEventListener("mouseout" , (event)=>{
    event.target.style.backgroundColor = "purple";
    
})

h1.addEventListener("click" , (event)=>{
    const text = event.target.textContent;
    text === "welcome" ? event.target.textContent = "good bye" :  event.target.textContent = "welcome" 
})