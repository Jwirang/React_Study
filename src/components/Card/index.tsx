import { ReactNode } from "react"
import { StyledCard } from "./style"

type CardProps = {
  children: ReactNode
}

const Card = ({ children }: CardProps) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  )
}

export default Card