import { Outlet } from "react-router-dom"
import { StyledH1, StyledLink, StyledHeaderContainer } from "./style"

const Main = () => {
  const nickname = '쥐랑'

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