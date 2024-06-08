import { Link, Outlet } from "react-router-dom"
import { StyledH1, StyledLink, StyledHeaderContainer, LogoContainer, LogoImage } from "./style"
import { useRecoilValue } from "recoil"
import { meState } from "../../stores"
import fatbrain from '../../assets/fatbrainImage.png';

const Main = () => {
  const me = useRecoilValue(meState)
  const nickname = me?.nickname

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
              {nickname}님의 지식 냠냠 목록🍚
            </StyledLink>
          </StyledH1>
        </StyledHeaderContainer>
      </header>
      <Outlet />
    </>
  )
}

export default Main