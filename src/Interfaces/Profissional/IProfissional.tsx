import IBasico from "../Basic/IBasico";

// interface do prof;
export default interface IProfissional extends IBasico {
    nome: string,
    especializacao: string;
}