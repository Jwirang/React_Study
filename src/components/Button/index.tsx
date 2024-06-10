import { ButtonHTMLAttributes, ReactNode } from "react"
import { StyledButton } from "./style"

type ButtonProps = {
    width?: number | undefined,
    padding?: number | undefined,
    font?: number | undefined,
    children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ width, children,padding, font, ...rest}: ButtonProps) => {
    return (
        <StyledButton $width={width} $padding={padding} $font={font} {...rest}>
            {children}
        </StyledButton>
    )
}
export default Button