document.addEventListener("readystatechange", (event)=>{
    if(event.target.readyState === "complete"){
        initApp();
    }
})

const initApp = () =>{
    const myContent = ["earn" , "grow" , "give"];
    const myObject = {
        name : "hibath",
        myContent : ["earn" , "grow" , "give"],
        logName : function(){
            console.log(this.name);
        }
    };

    // SESSIONSTORAGE ONCE BROWSER CLOSED , DATA WILL  DELETE

    // window.sessionStorage.setItem("mysessionstorage" , JSON.stringify(myObject));

    // const mysessionData = JSON.parse(sessionStorage.getItem("mysessionstorage"));

    // console.log(mysessionData);

    // const sessionArray = mysessionData.myContent;
    // console.log(sessionArray);

    // for (i=0 ; i <sessionArray.length ; i++){
    //     console.log(sessionArray[i]);
    // }

    // LOCALSTORAGE THOUGHT BROWSER CLOED DATA WONT DELETE

    localStorage.setItem("mysessionstorage" , JSON.stringify(myObject));
   
    const mysessionData = JSON.parse(localStorage.getItem("mysessionstorage"));

    console.log(mysessionData);

    const sessionArray = mysessionData.myContent;
    console.log(sessionArray);

    for (i=0 ; i <sessionArray.length ; i++){
        console.log(sessionArray[i]);
    }


}

// check our local storage items totally 
const key = localStorage.key(0);
console.log(key);
const length = localStorage.length;
 console.log(length);
//  const remove = localStorage.removeItem("what to remove");
// const clearAll = localStorage.clear;
