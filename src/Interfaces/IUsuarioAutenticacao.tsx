import IBasico from "./Basic/IBasico";

export default interface IUsuarioAutenticacao extends IBasico {
    email: string;
    perfil: string;
}