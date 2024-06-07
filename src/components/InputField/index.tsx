import { InputHTMLAttributes } from "react"
import { StyledInputField } from "./style"

type InputFieldProps = {
    width?: number | undefined,
} & InputHTMLAttributes<HTMLInputElement>

const InputField = ( {width, ...rest}: InputFieldProps) => {
    return(
        <StyledInputField $width={width} {...rest}>
        </StyledInputField>
    )
}

export default InputField