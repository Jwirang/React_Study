import { useNavigate, useParams } from "react-router-dom"
import { useRecoilState, useRecoilValue } from "recoil";
import { postListState } from "../../stores";
import { StyledContainer, StyledButton } from "./style";

const Post = () => {
  const { id } = useParams();
  const postList = useRecoilValue(postListState)
  const post = postList.find((post) => post.id === id)
  const navigate = useNavigate();
  const [mypostList, setMyPostList] = useRecoilState(postListState);
  const index = mypostList.findIndex((listItem) => listItem === post);

  if (!post) {
    return <div>존재하지 않는 게시물 번호입니다.</div>
  }

  const DeletePost = () => {
    const confirmed = window.confirm(`${post.title}글을 정말 삭제하시겠습니까?`);
    if (confirmed) {
      const newList = removeItemAtIndex(mypostList, index);
      setMyPostList(newList);
      alert("삭제되었습니다.");
      navigate('/');
    }
  } 

  return (
    <StyledContainer>
      <h2>
        {post?.title}
      </h2>
      <div>
        {post?.body}
      </div>
      <StyledButton onClick={() => {
        navigate(`/Update/${post.id}`);
      }}>수정하기</StyledButton>
      <StyledButton onClick={() => {
        DeletePost();
      }}>삭제하기</StyledButton>
    </StyledContainer>
  )
}

function removeItemAtIndex<T>(arr: T[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default Post