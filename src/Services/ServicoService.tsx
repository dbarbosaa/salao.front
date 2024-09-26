import IRecuperaLista from "../Interfaces/Basic/IRecuperaLista";
import FiltroServico from "../Interfaces/Servico/IFiltroServico";
import IServico from "../Interfaces/Servico/IServico";
import api from "./Basic/Api";

class ServicoService {

    public async findAll(filtros: FiltroServico): Promise<IRecuperaLista<IServico>> {
        let { data: result } = await api.get<IRecuperaLista<IServico>>(`servico/all?page=${filtros.page}&size=${filtros.size}&sort=id`);
        return result;
    }

    public async save(servico: IServico): Promise<IServico> {
        let { data: result } = await api.post<IServico>(`servico`, servico);
        return result;
    }
}

export default new ServicoService();
