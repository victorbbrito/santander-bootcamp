// interfaces (type x interface)

type robot = {
    id: number;
    name: string;
};

interface robot2{
    readonly id: number; // apenas leitura, atributo protegido
    name: string;
}

const bot: robot2 = {
    id: 1,
    name: "teste"
};
