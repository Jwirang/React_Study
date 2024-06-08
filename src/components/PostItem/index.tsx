import { useNavigate } from "react-router-dom"
import { StyledPostItem, StyledContainer} from "./style"

type PostItemProps = {
  id: number
  title: string
}

const PostItem = ({ id, title }: PostItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${id}`)
  }

  return (
    <StyledContainer>
    <StyledPostItem onClick={handleClick}>
      {title}
    </StyledPostItem>

    </StyledContainer>
  )
}

export default PostItem