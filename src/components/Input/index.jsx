import { InputStyled } from './styles';

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <InputStyled 
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
       />
  );
};

export default Input;