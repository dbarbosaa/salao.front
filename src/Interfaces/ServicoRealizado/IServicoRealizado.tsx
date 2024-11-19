import IBasico from "../Basic/IBasico";

export default interface IServicoRealizado extends IBasico {
    clienteId: number;
    servicoId: number;
    profissionalId: number;
    dataHorario: string; 
    valorPago: number;
}