import { StyledContainer, StyledImage} from "./style";
import fatbrain from '../../assets/fatbrain.png';
import LoginForm from "../../components/LoginForm";
import JoinForm from "../../components/JoinForm";
import { Link, useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  
  return (
    <StyledContainer>
    <Link to="/login">
      <StyledImage src={fatbrain} alt="Logo" />
    </Link>
    {isLogin ? (
      <LoginForm />
    ) : (
      <JoinForm />
    )}
    </StyledContainer>
  )
}

export default Login;