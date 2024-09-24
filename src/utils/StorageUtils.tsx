import IAutenticacao from "../Interfaces/IAutenticao";

export default class StorageUtils {
    static clearStorage() {
        localStorage.clear();
    }

    static async getToken(): Promise<string | null> {
        const token = localStorage.getItem("token");

        if (token === null) {
            return null;
        }

        return token;
    }

    static setToken(token: string): void {
        localStorage.setItem("token", token);
    }

    static async getUser(): Promise<any> {
        const user = localStorage.getItem("user");

        if (user === null) {
            return null;
        }

        return JSON.parse(user);
    }

    static setUser(user: IAutenticacao): void {
        localStorage.setItem("user", JSON.stringify(user));
    }

    static async getUrlLogo(): Promise<IAutenticacao | null> {
        const urlLogo = localStorage.getItem("urlLogo");

        if (urlLogo === null) {
            return null;
        }

        return JSON.parse(urlLogo);
    }

    static setUrlLogo(user: IAutenticacao): void {
        localStorage.setItem("user", JSON.stringify(user));
    }

    static async getVisualizarMenus(): Promise<IAutenticacao | null> {
        const visualizarMenus = localStorage.getItem("visualizarMenus");

        if (visualizarMenus === null) {
            return null;
        }

        return JSON.parse(visualizarMenus);
    }

    static setVisualizarMenus(user: IAutenticacao): void {
        localStorage.setItem("user", JSON.stringify(user));
    }

    static updateAccessExpireIn(): number {
        let dataAtual = new Date();
        let time = dataAtual.setMinutes(dataAtual.getMinutes() + 60);

        localStorage.setItem('accessExpireIn', `${time}`)

        return time;
    }

    static getAccessExpireIn(): number {
        let time = localStorage.getItem('accessExpireIn');

        return time ? parseInt(time) : 0;
    }
}