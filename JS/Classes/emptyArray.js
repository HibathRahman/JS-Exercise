

//  class

class personalInfo1  {
    constructor(name , age){
      this.name = name;
      this.age = age;
      this.additional = ["HTML" , "CSS" ,"JAVASCRIPT","react" ,"nodJS"];
      this.role ="fullStackDeveloper";
      this.qualification = [];
    }
    getQualification(){
      return this.qualification ;
    }
    setQualification(degree){
      this.qualification.push(degree);
    }

   softwareDeveloper (){
          return console.log (`If Studied ${this.additional} , you will become a ${this.role}.
           my name is ${this.name}. age is ${this.age}. degree is ${this.qualification}`);
}
}

const personalHibath = new personalInfo1("hibath" , 28);

personalHibath.age = 25;
personalHibath.setQualification("frontend Developer");
personalHibath.setQualification("backend Developer");
personalHibath.setQualification("iOS Developer");

console.log(personalHibath.additional);
personalHibath.softwareDeveloper();

const personalNaseem = new personalInfo1("naseem" , 29);
const personalYusuf = new personalInfo1("yusuf " , 30);
personalNaseem.softwareDeveloper();
personalYusuf.softwareDeveloper();


//  class children -------- study about this

// class biodata extends personalInfo1 {
//         constructor()
// }