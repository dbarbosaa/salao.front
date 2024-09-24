import api from "./Api";

class Export {

    public exportar = async (url: string, nome: string, query: string): Promise<void> => {
        try {
            const response = await api.get(`${url}?${query}`, {
                responseType: 'blob', // Trata a resposta como um arquivo binário
            });

            const urlBlob = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = urlBlob;
            link.setAttribute('download', `${nome}`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); // Limpeza após o download
            window.URL.revokeObjectURL(urlBlob); // Libera o recurso quando o download é concluído

        } catch (error) {
            console.error('Erro ao baixar o arquivo:', error);
        }
    }
}

export default new Export();