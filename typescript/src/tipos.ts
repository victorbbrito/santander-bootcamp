// tipos de variaveis
/*
    tipos primitivos: Boolean, number, string
*/
let ligado:boolean = true;
let tamanho:number = 800;
let nome:string = "Victor";
let altura:number = 1.70;

/*
    tipos null e undefined
*/
let nulo:null = null;
let indefinido:undefined = undefined;

/* 
    tipos abrangentes any e void
*/
let qualquer:any = "String";
let qualquer1:any = 90;
let retorno: void;

/*
    tipo objeto
*/
let produto:object = {
    nome: "camisa",
    preco: 49.90,
};
/*
    criando uma struct com um novo tipo
*/
type ProdutoLoja = {
    nome:string;
    preco:number;
    unidades:number;
}

let meuProduto: ProdutoLoja = {
    nome: "Tenis",
    preco: 490,
    unidades: 100
}

/*
    arrays
*/
let dados:string[] = ["victor","lucas","bruno"];
let dados2: Array<string> = ["novo","usado","semi-novo"];

let infos:(string | number)[] = ["victor",24,"william",24];

/*
    tuplas
*/
let boleto:[string, number,number] = ["conta de luz", 1309222011, 139.59];

/*
    Datas
 */
let nascimento: Date = new Date("1999-04-06 13:00");
