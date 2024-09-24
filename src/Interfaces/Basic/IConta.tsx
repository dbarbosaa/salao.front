import IBasico from "./IBasico";
import IDominio from "./IDominio";

export interface IConta extends IBasico {

    credorId?: number | null;
    devedorId?: number | null;
    pessoaId?: number | null;

    contaId: number;
    bancoId: number;

    banco?: IDominio,

    agencia: string;
    numero: string;
    pix: string;

    exibirContaTermo: boolean;

    observacao: string;
  }
  