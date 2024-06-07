import { StyledContainer, StyledImage} from "./style";
import fatbrain from '../../assets/fatbrain.png';
import LoginForm from "../../components/LoginForm";
import JoinForm from "../../components/JoinForm";
import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const content = null;
  
  return (
    <StyledContainer>
    <StyledImage src={fatbrain} alt="Logo" />
    {isLogin ? (
      <LoginForm />
    ) : (
      <JoinForm />
    )}
    </StyledContainer>
  )
}

export default Login;