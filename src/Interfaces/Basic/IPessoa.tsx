import IBasico from "./IBasico";
import { IConta } from "./IConta";
import { IContato } from "./IContato";
import IEndereco from "../Endereco/IEndereco";


export default interface IPessoa extends IBasico {
    // Additional fields
    nomeCompleto?: string;
    cpf?: string;
    dataNascimento?: Date | string;
    sexo?: number;
    estadoCivil?: number;
    grau?: number;
    
    nomePai?: string;
    nomeMae?: string;
    nomeConjuge?: string;

    pis?: string;
    ctps?: string;
    ctpsSerie?: string;
    ctpsuf?: string;
    ctpsData?: Date | string;
    rg?: string;
    orgaoEmissor?: string;
    rgData?: Date | string;
    cnh?: string;
    cnhVencimentoData?: Date | string;
    tituloEleitor?: string;
    tituloEleitorUF?: string;
    zonaEleitoral?: string;
    resevista?: string;
    resevistaSerie?: string;
    resevistaData?: Date | string;

    endereco: IEndereco;
    conta: IConta;
    contato?: IContato;

}

