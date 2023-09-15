function addNumber(x:number,y:number): number{
    return x+y;
};

let soma:number = addNumber(3,2);

function sayHello(name:string){
    return `Hello ${name}`;
};

function callToPhone(phone: number | string): number | string {
    return phone;
}

async function getDataBase(id:number): Promise<string> {
    return "retorno";
}
