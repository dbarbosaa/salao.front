import IBasico from "../Basic/IBasico";

export default interface IUsuario extends IBasico {
  perfil: string,
  senha: string;
  email: string;
}