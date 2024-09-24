 
 export interface IHome {
  despesa: Ano | null;
  faturamento: Ano | null;
  diferenca: Ano | null;

  despesaTotalAnual: number;
  faturamentoTotalAnual: number;
  diferencaTotalAnual: number;
}

 interface Ano {
  janeiro: number;
  fevereiro: number;
  marco: number;
  abril: number;
  maio: number;
  junho: number;
  julho: number;
  agosto: number;
  setembro: number;
  outubro: number;
  novembro: number;
  dezembro: number;
}

