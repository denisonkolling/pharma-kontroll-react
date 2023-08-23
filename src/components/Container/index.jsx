import { ContainerStyled } from "./style"

const Container = ({children, ...props}) => {
  return (
    <ContainerStyled {...props}>{children}</ContainerStyled>
  )
}

export default Container