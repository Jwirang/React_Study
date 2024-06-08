import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { postListState } from "../../stores";
import { StyledContainer, StyledButton, PostCard, PostTitle, PostBody, ButtonGroup } from "./style";
import Button from "../../components/Button";

const Post = () => {
  const { id } = useParams();
  const postList = useRecoilValue(postListState);
  const post = postList.find((post) => post.id === id);
  const navigate = useNavigate();
  const [mypostList, setMyPostList] = useRecoilState(postListState);
  const index = mypostList.findIndex((listItem) => listItem === post);

  if (!post) {
    return <StyledContainer>존재하지 않는 게시물 번호입니다.</StyledContainer>;
  }

  const DeletePost = () => {
    const confirmed = window.confirm(`${post.title} 글을 정말 삭제하시겠습니까?`);
    if (confirmed) {
      const newList = removeItemAtIndex(mypostList, index);
      setMyPostList(newList);
      alert("삭제되었습니다.");
      navigate('/');
    }
  };

  return (
    <StyledContainer>
      <PostCard>
        <PostTitle>{post?.title}</PostTitle>
        <PostBody>{post?.body}</PostBody>
        <ButtonGroup>
          <Button onClick={() => navigate(`/update/${post.id}`)}>
            수정하기
          </Button>
          <Button onClick={DeletePost}>
            삭제하기
          </Button>
        </ButtonGroup>
      </PostCard>
    </StyledContainer>
  );
};

function removeItemAtIndex<T>(arr: T[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default Post;
