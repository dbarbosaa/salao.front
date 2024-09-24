import IRecuperaLista from "../Interfaces/Basic/IRecuperaLista";
import FiltroProfissional from "../Interfaces/Profissional/IFiltroProfissional";
import IProfissional from "../Interfaces/Profissional/IProfissional";
import api from "./Basic/Api";



class ProfissionalService {

// Paginação de dados;    
    public async findAll(filtros: FiltroProfissional): Promise<IRecuperaLista<IProfissional>> {

        let { data: result } = await api.get<IRecuperaLista<IProfissional>>(`profissional/all?page=${filtros.page}&size=${filtros.size}&sort=id`);

        return result;  
    }

// Salva e altera os dados;    
    public async save(profissional: IProfissional): Promise<IProfissional> {

        let { data: result } = await api.post<IProfissional>(`profissional`, profissional);

        return result;
    }
   
}

export default new ProfissionalService();