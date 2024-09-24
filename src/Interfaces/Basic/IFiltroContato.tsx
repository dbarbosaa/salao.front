import FiltroPesquisa from "./FiltroPesquisa";

export default interface IFiltroContato extends FiltroPesquisa {
    empresaId?: number;
    clienteId?: number;
    nome: string;
    email: string;
    status: number;
}
