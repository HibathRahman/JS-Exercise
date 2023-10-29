const bioData = ["B.E" ,"player", "Male"];
        bioData.push("Married") ;
        bioData.unshift("Hibath");
        bioData[4] = "india";
        console.log(bioData);
        console.log(bioData.length);

        const lastValue = bioData[bioData.length - 1];
        const firstDel  = bioData.shift();
        const lastDel   = bioData.pop();
        console.log(bioData);
        
    const knife = ["a","b","c","d","e","f","g","h"];
    // const slice = knife.slice(1,4);  ---["b","c","d"]
    // console.log(slice);
    //   -- (0) ----["a","b","c","d","e","f","g","h"]
    //  ----(0,1) ---["a"]
    // ---(2,4)--- ["c","d"]

    // const splice = knife.splice(1,4)  ---["b","c","d","e"]
    // console.log(splice);
    //   -- (0) ----["a","b","c","d","e","f","g","h"]
    //  ----(0,1) ---["a"]
    // --(2,6)---- // ["c","d","e","f","g","h"]
 
    // const reverse = knife.reverse();
    // console.log(reverse);   --------['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']

    // const join = knife.join();
    // console.log(join);      -----a,b,c,d,e,f,g,h----
    // console.log(typeof join);   string

    const conCat = knife.concat(bioData);
    console.log(conCat);

    const spreadOp = [...bioData,...knife];
    console.log(spreadOp);

    const split = "strings only can split".split(" ");
    console.log(split);


    // Nested Array ////

    const earnMoneyA = ["frontend" , "backend" ,"fullstack"];
    const earnMoneyB = ["AI", "blockchain" , "datascience"];
    const growMoneyA = ["stock", "realestate" ,"FS"];
    const growMoneyB = ["options" , "futures"];
    const giveMoney  = ["qualityeducation"];

    console.log(earnMoneyA[1],growMoneyB[1]);
    // backend futures

    const newEarn   = [earnMoneyA,earnMoneyB];
    const newGrow   = [growMoneyA,growMoneyB];

    console.log(newEarn[0][1],newGrow[1][1] );
    // backend futures

    const nested = [newEarn, newGrow , giveMoney];

    console.log(nested[0][0][1] , nested[1][1][1]);
    // backend futures
    


























