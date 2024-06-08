import { Outlet } from "react-router-dom"
import { StyledH1, StyledLink, StyledHeaderContainer } from "./style"
import { useRecoilValue } from "recoil"
import { meState } from "../../stores"

const Main = () => {
  const me = useRecoilValue(meState)
  const nickname = me?.nickname

  return (
    <>
      <header>
        <StyledHeaderContainer>
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