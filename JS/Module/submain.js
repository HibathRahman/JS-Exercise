export default function earnMoney(){
    return "earn Money is important";
};

export const growMoney = () =>{
    return "growMoney is need"
};

export const giveMoney =()=>{
    return "giveMoney is charity"
}

// (or)
// export default earnMoney;
// export{growMoney,giveMoney};

export class myData{
    constructor(name){
        this.name=name;
    }
    emailme(){
        return`hi i am a ${this.name}. i emailed to ebat@gmail.com`
    }
}