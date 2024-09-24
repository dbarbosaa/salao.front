// Basic Interfaces
import { IHome } from "../Interfaces/Home/IHome";
import IPessoa from "../Interfaces/Basic/IPessoa";
import IDominio from "../Interfaces/Basic/IDominio";
import { IConta } from "../Interfaces/Basic/IConta";
import IEmpresa from "../Interfaces/Empresa/IEmpresa";
import IDespesa from "../Interfaces/Despesa/IDespesa";
import { IContato } from "../Interfaces/Basic/IContato";
import IEndereco from "../Interfaces/Endereco/IEndereco";
import { ICliente } from "../Interfaces/Cliente/ICliente";
import IFuncionario from "../Interfaces/Funcionario/IFuncionario";
import ILancamentoFalta from "../Interfaces/LancamentoFalta/ILancamentoFalta";

export const initialLancamentoFalta: ILancamentoFalta = {
    ativo: true,
    data: "",
    id: 0,
    funcionarioId: 0,
    observacao: "",
    tipoCategoria: 0,

};
export const initialHome: IHome = {
    despesa: {
        janeiro: 0,
        fevereiro: 0,
        marco: 0,
        abril: 0,
        maio: 0,
        junho: 0,
        julho: 0,
        agosto: 0,
        setembro: 0,
        outubro: 0,
        novembro: 0,
        dezembro: 0
    },
    faturamento: {
        janeiro: 0,
        fevereiro: 0,
        marco: 0,
        abril: 0,
        maio: 0,
        junho: 0,
        julho: 0,
        agosto: 0,
        setembro: 0,
        outubro: 0,
        novembro: 0,
        dezembro: 0
    },
    diferenca: {
        janeiro: 0,
        fevereiro: 0,
        marco: 0,
        abril: 0,
        maio: 0,
        junho: 0,
        julho: 0,
        agosto: 0,
        setembro: 0,
        outubro: 0,
        novembro: 0,
        dezembro: 0
    },
    despesaTotalAnual: 0,
    diferencaTotalAnual: 0,
    faturamentoTotalAnual: 0
};

export const initialEndereco: IEndereco = {
    id: 0,
    bairro: '',
    cep: '',
    cidade: '',
    complemento: '',
    numero: '',
    uf: '',
    ativo: true,
    latitude: '',
    logradouro: '',
    longitude: '',
}

export const initialDominio: IDominio =
{
    id: 0,
    nome: '',
    ativo: true,
}

export const initialConta: IConta =

{
    id: 0,
    credorId: null,
    devedorId: null,
    pessoaId: null,
    agencia: '',
    ativo: false,
    bancoId: 0,
    contaId: 0,
    exibirContaTermo: false,
    numero: '',
    pix: '',
    observacao: '',

}

export const initialContato: IContato = {
    id: 0,
    nome: "",
    departamento: "",
    telefone: "",
    email: "",
    ativo: true,
    celular: '',
    observacao: '',
};

export const initialPessoa: IPessoa =
{
    id: 0,
    endereco: initialEndereco,
    conta: initialConta,

    nomeCompleto: '',
    cpf: '',
    estadoCivil: 0,

    nomeConjuge: '',
    dataNascimento: '',
    sexo: 0,
    ativo: true,
    contato: initialContato,

}

export const initialEmpresa: IEmpresa = {
    id: 0,
    ativo: true,
    inscricaoMunicipal: '',
    razaoSocial: '',
    documento: '',
    representanteLegal: '',
    enderecos: [],
    contatos: [],
}

export const initialFuncionario: IFuncionario = {
    id: 0,
    pessoa: initialPessoa,
    cargo: initialDominio,
    empresa: initialEmpresa,

    emailEmpresa: '',
    pessoaId: 0,
    cargoId: 0,
    empresaId: 0,
    ativo: true,
}

export const initialDespesa: IDespesa = {
    id: 0,
    ativo: true,
    descricao: '',
    data: new Date(),
    clienteId: null,
    observacao: "",
    valor: 0,
}

export const initialCliente: ICliente = {
    id: 0,
    ativo: true,
    contatos: [],
    documento: '',
    enderecos: [],
    nome: '',
    tipoCategoria: 1,
    tipoCliente: 1,
    contratoVigente: true,

    valorContrato: 0,
    valorRetencao: 0,
    valorBoleto: 0
}

export const initialBanco: IConta = {
    id: 0,

    credorId: null,
    pessoaId: null,
    devedorId: null,

    contaId: 0,
    agencia: '',
    exibirContaTermo: false,

    bancoId: 0,
    numero: '',
    pix: '',
    ativo: true,

    observacao: "",

};


