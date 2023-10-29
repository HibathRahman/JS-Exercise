

const personalInfo = {
    userId               :  321453 ,
    name                 : "Hibath",
    age                  : 28,
    role                 : "fullStackDeveloper" ,
    qualification        : { degree : "B.E" , passedOut : 2016  } ,
    additional           : ["HTML" , "CSS" ,"JAVASCRIPT","react" ,"nodJS"],
    softwareDeveloper    : function () {
                            return `If Studied ${this.additional} , you will become a ${this.role}`;
                          }
 }
    // insert new values
    personalInfo.Earning = "60000Rs";
    personalInfo.result   = function (){ console.log("passed the exam");}

    console.log(personalInfo);

    // get keys and values
    console.log(Object.keys(personalInfo));
    for(let key in personalInfo){console.log(key);}
    console.log(Object.values(personalInfo));
    for(let value in personalInfo){console.log(personalInfo[value]);}
    //  Dot notation method to get value
    console.log(personalInfo.userId);
    console.log(personalInfo.name);
    console.log(personalInfo.qualification.degree);
    console.log(personalInfo.additional);
    console.log(personalInfo.softwareDeveloper());
    // Bracket notation method  to get value
    console.log(personalInfo["userId"]);
    console.log(personalInfo["name"]);
    console.log(personalInfo.qualification["degree"]);
    // delete key and value
    delete personalInfo.age;
    console.log(personalInfo.age);
    //  create new object inside the parent
    const anotherInfo = Object.create(personalInfo);
    console.log(anotherInfo);
    // nested 
    anotherInfo.country = "india";
    console.log(anotherInfo);
    console.log(anotherInfo.role);

    // Destructuring the objects - we can change key name by our wish 
    const {name : myName ,role: favRole} = personalInfo;
    console.log(myName,favRole);
    console.log(personalInfo.name);

    // Object Literals
    function personalInformation(userId,name,role,qualification,age){
        return{
            userId,
            name,
            role,
            qualification,
            isSenior(){
                return age > 20;
            }
        }
    }
    const addInfo = personalInformation(2341 ,"rahman" , "frontend DEVELOPER" , "B.E" , 28);
    console.log(addInfo);

    // values to object key

    let last = "lastname";
    let obj = {
        firstName : "hibath",
        [last]    : "rahman"
    }
    console.log(obj);
