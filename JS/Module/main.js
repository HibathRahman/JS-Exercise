import earnMoney from "./submain.js";
import { growMoney, giveMoney } from "./submain.js";
console.log(earnMoney());
console.log(growMoney());
console.log(giveMoney());

// all are work but giving name is better bcoz employees may give same name 


import { growMoney as grow, giveMoney as give } from "./submain.js";
console.log(earnMoney());
console.log(grow());
console.log(give());


// * mean everything , when u use everything dont give name default 
import * as data from "./submain.js";
console.log(data.default());
// console.log(data.earnMoney());  change default in subMain then call this
console.log(data.growMoney());
console.log(data.giveMoney());



import { myData } from "./submain.js";
const me = new myData("hibath")
console.log(me);
console.log(me.emailme());

