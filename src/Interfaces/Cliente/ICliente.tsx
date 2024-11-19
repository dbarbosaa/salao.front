import IBasico from "../Basic/IBasico";

export default interface ICliente {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  ativo: boolean;
}