import { useQuery } from "react-query";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { fetchMe } from "../../api/fatBrainApi";
import fatbrain from '../../assets/fatbrainImage.png';
import { LogoContainer, LogoImage, StyledH1, StyledHeaderContainer, StyledLink } from "./style";
import Cookies from "js-cookie";
import fatBrainClient from "../../api/fatBrainApi/client";

const Main = () => {
  const navigate = useNavigate();
  const { data: me, isError} = useQuery({
    queryKey: ['me'],
    queryFn: fetchMe,
  })
  
  if (isError) {
    navigate('/login')
  }

  const logOut = () => {
    Cookies.remove('tid')
    delete fatBrainClient.defaults.headers['Authorization']
    navigate('/login')
  }

  return (
    <>
      <header>
        <StyledHeaderContainer>
        <LogoContainer>
          <LogoImage src={fatbrain} alt="사이트 로고" /> {/* 로고 이미지 추가 */}
        </LogoContainer>
          <StyledH1>
            <StyledLink to="/">
              {me?.nickname ?? me?.username}님의 지식 냠냠 목록🍚
            </StyledLink>
          </StyledH1>
          <button onClick={logOut}>로그아웃</button>
        </StyledHeaderContainer>
      </header>
      <Outlet />
    </>
  )
}

export default Main