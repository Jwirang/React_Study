import { ButtonHTMLAttributes, ReactNode } from "react"
import { StyledButton } from "./style"

type ButtonProps = {
    width?: number | undefined,
    children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ width, children, ...rest}: ButtonProps) => {
    return (
        <StyledButton $width={width} {...rest}>
            {children}
        </StyledButton>
    )
}
export default Button