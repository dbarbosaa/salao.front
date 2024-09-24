
export enum EPerfilEnum {
  Plus = 2,
  Master = 1,
  Operador = 3,
  Suporte = 4,
}

export const Perfil = (perfilId: number) => {
  switch (perfilId) {
    case EPerfilEnum.Plus:
      return "Plus";

    case EPerfilEnum.Master:
      return "Master";

    case EPerfilEnum.Suporte:
      return "Suporte";

    case EPerfilEnum.Operador:
      return "Operador";

    default:
      return `Suporte`;
  }
};