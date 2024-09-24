export const CorreiosAPI = (cep: string): Promise<any> => {
  let resultado: any;
  try {
    resultado = fetch(`https://viacep.com.br/ws/${cep}/json/`);
  } catch (error) {
  }
  return resultado;
};