// DOM document Object Model 

const view1 = document.getElementById("view1");
console.log(view1); 

const view2 = document.querySelector("#view2");
console.log(view2);

view1.style.display = "flex";
// view1.style.display = "none";
view2.style.display = "flex";


const views = document.getElementsByClassName("view");
console.log(views);

const sameviews = document.querySelectorAll(".view")
console.log(sameviews);

const divs = view1.querySelectorAll("div");
console.log(divs);

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
evenDivs[4].style.backgroundColor = "red";

for(i=0 ; i<evenDivs.length ; i++){
evenDivs[i].style.width = "150px";
evenDivs[i].style.backgroundColor = "green";
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent ="Hello World";

const navBar = document.querySelector("nav");
navBar.innerHTML = '<h1>hi hiba </h1>';
console.log(navBar);
navBar.style.justifyContent = "center";


console.log(evenDivs[0].parentElement);

console.log(evenDivs[0].parentElement.children);

// childNodes takes enter too
console.log(evenDivs[0].parentElement.childNodes);

console.log(evenDivs[0].parentElement.hasChildNodes());

console.log(evenDivs[0].parentElement.lastChild);
// lastchild is a enter .. its mean text

console.log(evenDivs[0].parentElement.lastElementChild);

console.log(evenDivs[0].parentElement.firstChild);

console.log(evenDivs[0].parentElement.firstElementChild);

console.log(evenDivs[0].nextSibling);

console.log(evenDivs[0].nextElementSibling);

console.log(evenDivs[0].nextElementSibling.nextElementSibling);

console.log(evenDivs[0].previousSibling);

console.log(evenDivs[0].previousElementSibling);


view2.style.display = "flex";
view2.style.flexDirection  = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";


console.log(view2.lastElementChild);
// h2 tag will remove
// view2.lastElementChild.remove();
while(view2.lastChild){
  view2.lastChild.remove();
}

// const newDiv = document.createElement("div");
// newDiv.textContent = " Hi"
// view2.append(newDiv);
// newDiv.style.fontSize = "40px";
// newDiv.style.color = "red";
// newDiv.style.width = "100px";
// newDiv.style.height = "100px";
// newDiv.style.margin = "100px";
// newDiv.style.backgroundColor = "white";
// newDiv.style.display = "flex";
// newDiv.style.justifyContent = "center";
// newDiv.style.alignItems = "center";

//  i want 10 divs so i cant write 10 times so use for loop 

const creatDiv = (parent , iter) => {

const newDiv = document.createElement("div");
newDiv.textContent = iter;
parent.append(newDiv);
newDiv.style.fontSize = "40px";
newDiv.style.color = "red";
newDiv.style.width = "100px";
newDiv.style.height = "100px";
newDiv.style.margin = "100px";
newDiv.style.backgroundColor = "white";
newDiv.style.display = "flex";
newDiv.style.justifyContent = "center";
newDiv.style.alignItems = "center";
}

for ( i=1 ; i < 11 ; i++){
   creatDiv(view2 , i)
} 























