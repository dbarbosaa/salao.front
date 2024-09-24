import { IDivisaoEnum } from "../enum/IDivisaoEnum";
import { IGrauEstudoEnum } from "../enum/IGrauEstudoEnum";

export const getTipoClienteText = (value) => {
  switch (value) {
      case 1:
          return "Jurídico";
      case 2:
          return "Pessoa Física";
      default:
          return "Selecione...";
  }
};

export const getTipoCategoriaText = (value) => {
  switch (value) {
      case 1:
          return "Condomínio";
      case 2:
          return "Casa";
      case 3:
          return "Empresa";
      default:
          return "Selecione...";
  }
};

export const getFormaPagamentoText = (value) => {
  switch (value) {
      case 1:
          return "Cartão de Crédito";
      case 2:
          return "Cartão de Débito";
      case 3:
          return "Boleto";
      case 4:
          return "Transferência Bancária";
      case 5:
          return "Pix";
      case 6:
          return "Dinheiro";
      case 7:
          return "Outros";
      default:
          return "Selecione...";
  }
};

export function getTipoFGTS(fgtsType: any): number {
  switch (fgtsType) {
      case "OptantePeloFGTS":
          return 1;
      default:
          return 0;
  }
}

export function getTipoContrato(tipo: any): number {
  switch (tipo) {
      case "Indeterminado":
          return 1;
      default:
          return 2;
  }
}


export function getVinculo(tipo: any): number {
  switch (tipo) {
      case "TrabalhadorUrbanoVinculadoAEmpregadorPessoaJuridica":
          return 1;
      default:
          return 2;
  }
}   

export function getTipoAdmissao(tipo: any): number {
  switch (tipo) {
      case "Reemprego":
          return 1;
      default:
          return 2;
  }
}

export function getDivisao(divisao: any): number  {
  switch (divisao) {
    case "Serviços":
      return IDivisaoEnum.Servicos;
    case "Producao":
      return IDivisaoEnum.Producao;
    case "Administrativo":
      return IDivisaoEnum.Administrativo;
    case "Financeiro":
      return IDivisaoEnum.Financeiro;
    case "Recursos Humanos":
      return IDivisaoEnum.RecursosHumanos;
    case "Marketing":
      return IDivisaoEnum.Marketing;
    case "Vendas":
      return IDivisaoEnum.Vendas;
    case "TI":
      return IDivisaoEnum.TI;
    case "Pesquisa Desenvolvimento":
      return IDivisaoEnum.PesquisaDesenvolvimento;
    case "Logistica":
      return IDivisaoEnum.Logistica;
    case "Juridico":
      return IDivisaoEnum.Juridico;
    default:
      return 0; // or throw an error if that's preferred
  }
}

export function getGrauEstudo(tipo: any): number {
  switch (tipo) {
    case "Fundamental":
      return IGrauEstudoEnum.Fundamental;
    case "Medio":
      return IGrauEstudoEnum.Medio;
    case "Superior":
      return IGrauEstudoEnum.Superior;
    case "PosGraduacao":
      return IGrauEstudoEnum.PosGraduacao;
    case "Doutorado":
      return IGrauEstudoEnum.Doutorado;
    case "Analfabeto":
      return IGrauEstudoEnum.Analfabeto;
    default:
      return 0;
  }
}

export const getFalta = (value: any): string => {
  switch (value) {
      case 1:
          return "Afastamento";
      case 2:
          return "Atestado Médico";
      case 3:
          return "DSR";
      case 4:
          return "Falta";
      case 5:
          return "Falta Justificada";
      case 6:
          return "Feriado";
      case 7:
          return "Folga";
      case 8:
          return "Licença Maternidade";
      case 9:
          return "Licença Não Remunerada";
      case 10:
          return "Licença Paternidade";
      case 11:
          return "Suspensão Disciplinar";
      default:
          return "Selecione...";
  }
};


export function getEstadoCivil(tipo: any): number {
  let retorno: number;
  switch (tipo) {
    case "Solteito":
      retorno = 1
      break;
    case "Casado":
      retorno = 2
      break;
    case "Divociado":
      retorno = 3
      break;
    default:
      retorno = 4
      break;
  }

  return retorno;
}