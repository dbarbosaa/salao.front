export default interface IRecuperaLista<T>{
    content: T[],
    totalPages: number,
    totalElements: number,
    size: number
}