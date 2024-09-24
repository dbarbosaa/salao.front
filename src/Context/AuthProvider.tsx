import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthService from '../Services/AuthService';

import StorageUtils from '../utils/StorageUtils';
import Storage from '../utils/StorageUtils';

import { errorTostify } from '../Components/Apps/Notification/Notification';
import IAutenticacao from '../Interfaces/IAutenticao';

interface IAuthContext {
    isAuthorized: boolean,
    loading: boolean,
    signOut: () => Promise<void>,
    signIn: (email: string, password: string) => Promise<void>,
    user?: IAutenticacao
}

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: any) => {
    const [isAuthorized, setAuthorized] = useState<boolean>(false);
    const [user, setUser] = useState<IAutenticacao>();
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();
    const routeIndex = () => navigate(`${import.meta.env.BASE_URL}indexpage`);

    useEffect(() => {
        loadStorageData();
    }, []);

    const loadStorageData = async (): Promise<void> => {
        const storageToken = await Storage.getToken();
        const storageUser = await Storage.getUser();

        if (storageToken && storageUser && (new Date()).getTime() < StorageUtils.getAccessExpireIn()) {
            setUser(storageUser);
            setAuthorized(true);
        } else {
            StorageUtils.clearStorage();
        }

        StorageUtils.updateAccessExpireIn();

        setLoading(false);
    }


    const signIn = async (email: string, codigo: string) => {
        try {
            const result = await AuthService.signIn(email, codigo);

            if (result === null) throw new Error("Tratar erro");

            await Storage.setToken(result.token);

            await Storage.setUser(result.usuario);

            setUser(result.usuario);

            setAuthorized(true);

            routeIndex();

        } catch (error) {
            errorTostify("Acesso negado!");
            setAuthorized(false);
        }
    }


    const signOut = async (): Promise<void> => {
        try {
            await Storage.clearStorage();
            setAuthorized(false);
            await StorageUtils.updateAccessExpireIn();
        } catch (error) {
            alert("Login não pode ser realizado");
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthorized, loading, signOut, user, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext<IAuthContext | any>(AuthContext);
    return context as IAuthContext;
}

export const urlLogoAuth = () => {
    const context = useContext<IAuthContext | any>(AuthContext);
    return context as IAuthContext;
}


