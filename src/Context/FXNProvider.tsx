import { createContext, ReactChild, useState } from "react";
import { IFXNInterfaceContext } from "../Interfaces/Context/IFXNInterfaceContext";

import IEmpresa from "../Interfaces/Empresa/IEmpresa";
import { ICliente } from "../Interfaces/Cliente/ICliente";
import IFuncionario from "../Interfaces/Funcionario/IFuncionario";

import { initialCliente, initialDespesa, initialEmpresa, initialFuncionario, initialLancamentoFalta } from "./InitialValuesContext";
import IDespesa from "../Interfaces/Despesa/IDespesa";
import ILancamentoFalta from "../Interfaces/LancamentoFalta/ILancamentoFalta";

export const FXNContext = createContext<IFXNInterfaceContext>({
  setFuncionario: () => ({}),
  funcionario: initialFuncionario,

  setEmpresa: () => ({}),
  empresa: initialEmpresa,

  
  setCliente: () => ({}),
  cliente: initialCliente,

  setDespesa: () => ({}),
  despesa: initialDespesa,

  setLancamentoFalta: () => ({}),
  lancamentoFalta: initialLancamentoFalta,
});


const FXNProvider = (propsProvider: { children: ReactChild }) => {

  const [empresa, setEmpresa] = useState<IEmpresa>(initialEmpresa);
  const [cliente, setCliente] = useState<ICliente>(initialCliente);
  const [despesa, setDespesa] = useState<IDespesa>(initialDespesa);
  const [lancamentoFalta, setLancamentoFalta] = useState<ILancamentoFalta>(initialLancamentoFalta);


  const [funcionario, setFuncionario] = useState<IFuncionario>(initialFuncionario);

  return (
    <FXNContext.Provider
      value={{

        funcionario,
        setFuncionario,

        empresa,
        setEmpresa,

        cliente,
        setCliente,

        despesa,
        setDespesa,

        lancamentoFalta,
        setLancamentoFalta
        
        }}
    >
      {propsProvider.children}
    </FXNContext.Provider>
  );
};

export default FXNProvider;