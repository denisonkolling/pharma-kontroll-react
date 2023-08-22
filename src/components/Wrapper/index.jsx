import { WrapperStyled } from "./style"

const Wrapper = ({children}) => {
  return (
    <WrapperStyled>{children}</WrapperStyled>
  )
}

export default Wrapper