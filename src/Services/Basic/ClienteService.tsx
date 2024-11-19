import IRecuperaLista from "../../Interfaces/Basic/IRecuperaLista";
import FiltroCliente from "../../Interfaces/Cliente/IFiltroCliente";
import ICliente from "../../Interfaces/Cliente/ICliente";
import api from "./Api"

//import api from "./Basic/Api";



class ClienteService {

// Paginação de dados;    
    public async findAll(filtros: FiltroCliente): Promise<IRecuperaLista<ICliente>> {

        let { data: result } = await api.get<IRecuperaLista<ICliente>>(`cliente/all?page=${filtros.page}&size=${filtros.size}&sort=id`);

        return result;  
    }

// Salva e altera os dados;    
    public async save(cliente: ICliente): Promise<ICliente> {

        let { data: result } = await api.post<ICliente>(`cliente`, cliente);

        return result;
    }

 // Busca cliente por ID
     public async findById(id: number): Promise<ICliente> {

            let { data: result } = await api.get<ICliente>(`cliente/${id}`);

            return result;
        }  
   
}

export default new ClienteService();