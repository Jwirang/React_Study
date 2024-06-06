import { useRecoilValue } from "recoil"
import Card from "../../components/Card"
import PostItem from "../../components/PostItem"
import { StyledContainer, StyledPostListContainer, StyledButton} from "./style"
import { useNavigate } from "react-router-dom"
import { postListState } from "../../stores"

const Home = () => {
  const navigate = useNavigate();
  const postList = useRecoilValue(postListState)

  const handleClick = () => {
    navigate(`/create/`)
  }

  return (
    <main>
      <StyledContainer>
        <Card>
          <h2>
            이 사이트는
          </h2>
          <div>
            제가 공부한 내용을 기록하는 곳이예요.🫡
          </div>
        </Card>
        <StyledPostListContainer>
          {postList.map(({id, title, body}) => (
            <PostItem key={id} id={id} title={title}/>
          ))}
        </StyledPostListContainer>
        <StyledButton onClick={handleClick}>
          +
        </StyledButton>
      </StyledContainer>
    </main>
  )
}

export default Home