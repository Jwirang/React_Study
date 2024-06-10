import Cookies from "js-cookie";
import { useQuery } from "react-query";
import { Outlet, useNavigate } from "react-router-dom";
import { fetchMe } from "../../api/fatBrainApi";
import fatBrainClient from "../../api/fatBrainApi/client";
import fatbrain from '../../assets/fatbrainImage.png';
import { ButtonContainer, LogoContainer, LogoImage, StyledH1, StyledHeaderContainer, StyledLink } from "./style";
import Button from "../../components/Button";

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
          <Button onClick={logOut} font={13} width={80}>로그아웃</Button>
        </StyledHeaderContainer>
      </header>
      <Outlet />
    </>
  )
}

export default Main