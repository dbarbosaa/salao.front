import styled from "@emotion/styled";

export const FeedbackStyle = styled.a`
    width: 100%;
    margin-top: 0.25rem;
    font-size: 70%;
    color: red !important; // Adicionando o ponto-e-vírgula por consistência
`

interface IAlertValidationType {
  text?: string;
}

const AlertValidation = ({ text }: IAlertValidationType) => {
  return (
    <>
      {text && (
        <FeedbackStyle>
          {text}
        </FeedbackStyle>
      )}
    </>
  );
};

export default AlertValidation;
