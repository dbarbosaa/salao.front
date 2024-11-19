import IRecuperaLista from "../Interfaces/Basic/IRecuperaLista";
import FiltroServicoRealizado from "../Interfaces/ServicoRealizado/IFiltroServicoRealizado";
import IServicoRealizado from "../Interfaces/ServicoRealizado/IServicoRealizado";
import api from "./Basic/Api";

class ServicoRealizadoService {

    // Método para buscar todos os serviços realizados com paginação
    public async findAll(filtros: FiltroServicoRealizado): Promise<IRecuperaLista<IServicoRealizado>> {
        let { data: result } = await api.get<IRecuperaLista<IServicoRealizado>>(
            `servico-realizado/all?page=${filtros.page}&size=${filtros.size}&sort=id`
        );
        return result;
    }

    // Método para salvar ou atualizar um serviço realizado
    public async save(servicoRealizado: IServicoRealizado): Promise<IServicoRealizado> {
        let { data: result } = await api.post<IServicoRealizado>(`servico-realizado`, servicoRealizado);
        return result;
    }
}

export default new ServicoRealizadoService();
