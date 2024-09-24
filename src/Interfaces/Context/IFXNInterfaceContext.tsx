import IEmpresa from "../Empresa/IEmpresa";
import { ICliente } from "../Cliente/ICliente";
import IFuncionario from "../Funcionario/IFuncionario";
import IDespesa from "../Despesa/IDespesa";
import ILancamentoFalta from "../LancamentoFalta/ILancamentoFalta";

export interface IFXNInterfaceContext {

  setFuncionario: (funcionario: IFuncionario) => void;
  funcionario: IFuncionario;

  setEmpresa: (empresa: IEmpresa) => void;
  empresa: IEmpresa;
  
  setCliente: (cliente: ICliente) => void;
  cliente: ICliente;

  setDespesa: (despesa: IDespesa)=> void;
  despesa: IDespesa;

  setLancamentoFalta: (lancamentoFalta: ILancamentoFalta)=> void;
  lancamentoFalta: ILancamentoFalta;
}
