// higher order function

import { posts } from "./subMain.js";

// can't declare variable for forEach 
// it can't return value
// we can get value from empty array by push
const array=[];
posts.forEach((data)=>{
     array.push(data);
    //  array.push(data.id);

    // console.log(data);
    // console.log(data.userId);
    // console.log(data.id);
    // console.log(data.title);

});
console.log(array);
// console.clear();
// all console value will delete


const filterPost = posts.filter((data)=>{
    // return data.userId === 5 ;
        // return   data; 
        // condition apply to get value

        // can't use dot notation
        return data.userId;
})
console.log(filterPost);


const mappedPost = filterPost.map((data) =>{
    // return data;
    return data.id
    //  return {id:data.id ,  title:data.title}
    // use dot notation to get value 

    // can't apply condition in map 
    // return data.userId === 5 ;

})
console.log(mappedPost);