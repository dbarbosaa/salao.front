export const MASCARA_CPF = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

export const MASCARA_CNPJ = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];

export const MASCARA_CEP = [/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/];

export const MASCARA_HORARIO = [/\d/, /\d/, ":", /\d/, /\d/];

export const MASCARA_TELEFONE = ["(", /\d/, /\d/, ")", /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];

export const MASCARA_ID_PROCESSO = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

export const MASCARA_NUMERO_PROCESSO = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  ".",
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];
