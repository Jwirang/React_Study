import Card from "../../components/Card"
import PostItem from "../../components/PostItem"
import { StyledContainer, StyledPostListContainer } from "./style"

const Home = () => {
  const posts = [
    { id: 1, title: 'Html' },
    { id: 2, title: 'Javascript' },
    { id: 3, title: 'React' },
  ]

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
          {posts.map(({id, title}) => (
            <PostItem id={id} title={title} />
          ))}
        </StyledPostListContainer>
      </StyledContainer>
      
    </main>
  )
}

export default Home