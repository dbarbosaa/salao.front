import IRecuperaLista from "../Interfaces/Basic/IRecuperaLista";
import FiltroUsuario from "../Interfaces/Usuario/IFiltroUsuario";
import IUsuario from "../Interfaces/Usuario/IUsuario";
import api from "./Basic/Api";

class UsuarioService {

    public async findAll(filtros: FiltroUsuario): Promise<IRecuperaLista<IUsuario>> {

        let { data: result } = await api.get<IRecuperaLista<IUsuario>>(`usuario/all?page=${filtros.page}&size=${filtros.size}&sort=id`);

        return result;  
    }

    public async save(usuario: IUsuario): Promise<IUsuario> {

        let { data: result } = await api.post<IUsuario>(`usuario`, usuario);

        return result;
    }
   
}

export default new UsuarioService();