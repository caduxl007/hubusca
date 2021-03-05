import styled from 'styled-components';

interface IInputProps {
  isError: boolean;
}

export const Container = styled.div<IInputProps>`
  max-width: 384px;
  width: 100%;

  span {
    font-size: 1rem;
    color: #212121;
    font-weight: 600;
    line-height: 1.2rem;
  }

  input {
    display: block;
    margin-top: 4px;
    width: 100%;
    height: 40px;
    padding-left: 5px;
    border: 1px solid ${(props) => (props.isError ? 'red' : '#424242')};
  }

  p {
    font-size: 0.8rem;
    color: red;
  }
`;
