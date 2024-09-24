export default interface IAutenticacao {
    token: string;
    refreshToken: string;
    usuario: IUsuario;
}

interface IUsuario {
    id: number,
    email: string,
    nome: string,
    perfilId: number,
    status: number,
}