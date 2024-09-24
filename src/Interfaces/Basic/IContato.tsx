import IBasico from "./IBasico";

export interface IContato extends IBasico {
  pessoaId?: number | null;
  empresaId?: number | null;
  clienteId?: number | null;
  nome: string;
  departamento: string;
  celular: string;
  telefone: string;
  email: string;
  observacao: string;

}
