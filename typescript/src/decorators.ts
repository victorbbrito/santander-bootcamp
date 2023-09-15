// decorators
function ExibirNome(target: any){
    console.log(target);
}

@ExibirNome
class Funcionario {}

function apiVersion(version: string){
    return (target) => {
        Object.assign(target.prototype, {__version: version});
    }
}

@apiVersion("1.10")
class Api {}