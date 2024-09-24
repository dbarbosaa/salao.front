// Função para validar CPF
export const isCpfValid = (value: string): boolean => {

  if (!value) return false;

  const cleanValue = value.replace(/[^\d]/g, '');

  // Verifica se todos os dígitos são iguais, o que torna o CPF inválido
  if (/^(\d)\1+$/.test(cleanValue)) return false;

  // Verifica o primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanValue.charAt(i)) * (10 - i);
  }
  let remainder = 11 - (sum % 11);
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleanValue.charAt(9))) return false;

  // Verifica o segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanValue.charAt(i)) * (11 - i);
  }
  remainder = 11 - (sum % 11);
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleanValue.charAt(10))) return false;

  return true;
};

// Função para validar CNPJ
export const isCnpjValid = (value: string): boolean => {

  if (!value) return false;

  const cleanValue = value.replace(/[^\d]/g, '');

  // Verifica se todos os dígitos são iguais, o que torna o CNPJ inválido
  if (/^(\d)\1+$/.test(cleanValue)) return false;

  // Verifica o primeiro dígito verificador
  let sum = 0;
  let multiplier = 5;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cleanValue.charAt(i)) * multiplier;
    multiplier = multiplier === 2 ? 9 : multiplier - 1;
  }
  let remainder = sum % 11;
  if (remainder < 2) {
    if (parseInt(cleanValue.charAt(12)) !== 0) return false;
  } else {
    if (parseInt(cleanValue.charAt(12)) !== 11 - remainder) return false;
  }

  // Verifica o segundo dígito verificador
  sum = 0;
  multiplier = 6;
  for (let i = 0; i < 13; i++) {
    sum += parseInt(cleanValue.charAt(i)) * multiplier;
    multiplier = multiplier === 2 ? 9 : multiplier - 1;
  }
  remainder = sum % 11;
  if (remainder < 2) {
    if (parseInt(cleanValue.charAt(13)) !== 0) return false;
  } else {
    if (parseInt(cleanValue.charAt(13)) !== 11 - remainder) return false;
  }

  return true;
}

export const formartDateDDMMYYYY = (date: Date): string => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export const formartDDMMYYYToDateTime = (data: any) => {
  if (data) return new Date(data);
  return null;
};

export const formatDateYYYYDDMM = (data: string) => {
  if (data) {
    let mes = data.split("/")[0];
    let dia = data.split("/")[1];
    let ano = data.split("/")[2].substring(0, 4);
    return ano + "-" + ("0" + mes).slice(-2) + "-" + ("0" + dia).slice(-2);
  }
  return null;
};

export const addMaskCNPJ = (cnpj): string => {
  let x = cnpj.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
  cnpj = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '');
  return cnpj;
}

// 00000-000
export const addMaskCEP = value => {
  if (value) {
    return value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
  }
  return value;
}

export const removeMaskDocument = (document: string): string => {
  if (document) {
    document = document.replaceAll("/", "");
    document = document.replaceAll(".", "");
    document = document.replaceAll("-", "");
  }
  return document;
}

export const currencyFormatter = (value: any) => {
  if (!Number(value)) return "R$ 0,00";

  const amount = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value / 100);

  return `${amount}`;
};

export const currencyMoneyLabel = (value: any) => {
  if (!Number(value)) return "R$ 0,00";

  const amount = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  return `${amount}`;
};

export const formatPorcentageLabel = (value: any) => {
  if (!Number(value)) return "0,00%";

  const amount = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  // Removing the currency symbol "R$"
  const amountWithoutSymbol = amount.replace(/[^0-9,]/g, '');

  return amountWithoutSymbol;
};

export const formatPercentage = (value: any) => {
  if (!Number(value)) return "";

  const amount = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value / 100);

  return `${amount}%`?.replaceAll("R$", "");
};

export const validarCep = (cep: string) => {
  if (cep) {
    cep = cep.replace(/[^0-9]/gi, "");
    if (cep.length == 8) {
      return cep;
    }
  }
  return null;
};

export const currencyNumber = (value: any) => {
  if (!Number(value)) return "";
  return value.replace(/([^\d])+/gim, '');
};

export const countNumber = (value: string): number => {
  return (value.match(/[1-9]/g) || []).length;
};

export const camelize = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

export const countUpperCase = (value: string): number => {
  return (value.match(/[A-Z]/g) || []).length;
};

export const countLowerCase = (value: string): number => {
  return (value.match(/[a-z]/g) || []).length;
};

export const countCharacterSpecial = (value: string): number => {
  const noSpecialChars = value.replace(/[^a-zA-Z0-9 ]/g, '#');
  return (noSpecialChars.match(new RegExp("#", "g")) || []).length;
};

export const removeFormatMoney = (value: string) => {
  if (value) {
    let formatValue = value.replace("R$ ", "").replace(/\D/g, "");
    const slice = formatValue.length - 2;
    formatValue = [formatValue.slice(0, slice), ".", formatValue.slice(slice, formatValue.length)].join("");

    return Number(formatValue);
  }
  return 0;
};



export const valorAbreviado = (num: number, digits: number) => {
  let units = ['mil', 'Mi', 'Bi'],
    decimal;

  for (let i = units.length - 1; i >= 0; i--) {
    decimal = Math.pow(1000, i + 1);

    if (num <= -decimal || num >= decimal) {
      return +(num / decimal).toFixed(digits) + units[i];
    }
  }

  return num;
}
