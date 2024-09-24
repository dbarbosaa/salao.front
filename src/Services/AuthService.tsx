import IAutenticacao from "../Interfaces/IAutenticao";
import api from "./Basic/Api";

class AuthService {

    async signIn(email: string, senha: string): Promise<any> {
        let { data: result } = await api.post<any>('autenticacao/logar', { email, senha });
        return result;
    }

    async resetPassword(email: string): Promise<void> {
        await api.put<IAutenticacao>('usuario/resetarSenha', { email });
    }

    async resetPasswordConfirmCode(email: string, codigoResetSenha: string): Promise<void> {
        await api.put<IAutenticacao>('usuario/confirmaResetSenha', { email, codigoResetSenha });
    }

    async refreshToken(ip: string): Promise<IAutenticacao> {
        let { data: result } = await api.post<IAutenticacao>('autenticacao/refreshToken', {ip});

        return result;
    }
}


export default new AuthService();