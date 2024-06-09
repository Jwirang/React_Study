import { InputHTMLAttributes } from "react"
import { StyleError, StyledInputField } from "./style"

type InputFieldProps = {
    width?: number | undefined,
    message?: string | undefined,
} & InputHTMLAttributes<HTMLInputElement>

const InputField = ({ width, message, ...rest }: InputFieldProps) => {
    return (
        <div>
            <StyledInputField $width={width} {...rest} />
            { message && <StyleError>{message}</StyleError>}
        </div>
    )
}

export default InputField
