import IBasico from "../Basic/IBasico";

export default interface IServico extends IBasico {
    nome: string;
    valor: number;
    descricao: string;
}