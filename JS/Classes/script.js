
// Object
//  remember Object Literals
const personalInfo = {
    userId               :  321453 ,
    name                 : "Hibath",
    age                  : 28,
    role                 : "fullStackDeveloper" ,
    qualification        : { degree : "B.E" , passedOut : 2016  } ,
    additional           : ["HTML" , "CSS" ,"JAVASCRIPT","react" ,"nodJS"],
    softwareDeveloper    : function () {
                            return console.log (`If Studied ${this.additional} , you will become a ${this.role}`);
                          }
 }
 personalInfo.softwareDeveloper();

//  class

 class personalInfo1  {
                #country = "india";
                _state = "tamilnadu"
               constructor(name , age){
                this.name = name;
                this.age = age;
                this.additional = ["HTML" , "CSS" ,"JAVASCRIPT","react" ,"nodJS"];
                this._role ="fullStackDeveloper";
                this.qualification = "B.E";
              }
              getQualification(){
                return this.qualification ;
              }
              setQualification(degree){
                this.qualification = degree
              }

             softwareDeveloper (){
                    return console.log (`If Studied ${this.additional} , you will become a ${this._role}.
                     my name is ${this.name}. age is ${this.age}. degree is ${this.qualification} and country is ${this.#country}`);
   }
 }

 const personalHibath = new personalInfo1("hibath" , 28);

 personalHibath.age = 25;
 personalHibath.setQualification("software Developer")
 console.log(personalHibath.additional);
 personalHibath.softwareDeveloper();

 const personalNaseem = new personalInfo1("naseem" , 29);
 const personalYusuf = new personalInfo1("yusuf " , 30);
 personalNaseem.softwareDeveloper();
 personalYusuf.softwareDeveloper();
