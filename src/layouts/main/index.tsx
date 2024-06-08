import { useQuery } from "react-query";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { fetchMe } from "../../api/fatBrainApi";
import fatbrain from '../../assets/fatbrainImage.png';
import { LogoContainer, LogoImage, StyledH1, StyledHeaderContainer, StyledLink } from "./style";

const Main = () => {
  const navigate = useNavigate();
  const { data: me, isError} = useQuery({
    queryKey: ['me'],
    queryFn: fetchMe,
  })

  if (isError) {
    navigate('/login')
  }

  return (
    <>
      <header>
        <StyledHeaderContainer>
        <LogoContainer>
          <Link to='/login'>
            <LogoImage src={fatbrain} alt="사이트 로고" /> {/* 로고 이미지 추가 */}
          </Link>
        </LogoContainer>
          <StyledH1>
            <StyledLink to="/">
              {me?.nickname ?? me?.username}님의 지식 냠냠 목록🍚
            </StyledLink>
          </StyledH1>
        </StyledHeaderContainer>
      </header>
      <Outlet />
    </>
  )
}

export default Main