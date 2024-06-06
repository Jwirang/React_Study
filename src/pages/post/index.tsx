import { useParams } from "react-router-dom"

const Post = () => {
  const { id } = useParams();
  return (
    <div>
      여기는 {id}번 게시글 페이지입니다.
    </div>
  )
}

export default Post