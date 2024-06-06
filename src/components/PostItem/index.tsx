import { useNavigate } from "react-router-dom"
import { StyledPostItem } from "./style"

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
    <StyledPostItem onClick={handleClick}>
      {title}
    </StyledPostItem>
  )
}

export default PostItem