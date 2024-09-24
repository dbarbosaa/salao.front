import { useState } from "react";
import NumberFormat, { NumberFormatProps } from "react-number-format";


export const CurrencyFormatterInput = (formatted_value: any) => {
  if (!Number(formatted_value)) return "";
  const br = { style: "currency", currency: "BRL" };
  return new Intl.NumberFormat("pt-BR", br).format(formatted_value / 100);
};


export const CurrencyFormatterLabel = (formatted_value: any) => {
  if (!Number(formatted_value)) return "R$ 0,00";
  const br = { style: "currency", currency: "BRL" };
  return new Intl.NumberFormat("pt-BR", br).format(formatted_value);
};

const CurrencyField = ({ onValueChange, floatValue }: NumberFormatProps) => {

  const [value, setValue] = useState<string | number>(floatValue * 10000);

  const isValid = floatValue > 0 ? "is-valid" : "none";

  const handleChange = (v: any) => {
    setValue(parseFloat(v.value) * 100);
    if (onValueChange) {
      onValueChange({ ...v, floatValue: v.floatValue / 100 });
    }
  };


  const keyDown = (e: any) => {
    if (e.code === "Backspace" && !value) {
      e.preventDefault();
    }
    if (e.code === "Backspace" && value < 1000) {
      e.preventDefault();
      setValue(0);
    }
  };


  return (
    <NumberFormat
      className={`form-control ${isValid}`}
      value={Number(value) / 100}
      format={CurrencyFormatterInput}
      onValueChange={handleChange}
      allowEmptyFormatting
      decimalSeparator=","
      thousandSeparator="."
      decimalScale={2}
      onKeyDown={keyDown}
    />
  );
};

export default CurrencyField;

