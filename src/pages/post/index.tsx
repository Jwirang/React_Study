import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchFindFeed } from "../../api/fatBrainApi";
import Button from "../../components/Button";
import { ButtonGroup, PostBody, PostCard, PostTitle, StyledContainer } from "./style";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const { data: findFeed, isError, isLoading} = useQuery({
    queryKey: ['findFeed', {id}],
    queryFn: () => fetchFindFeed(Number(id)),
  })

  if (isLoading) {
    return <StyledContainer>로딩.</StyledContainer>;
  }

  if (isError) {
    return <StyledContainer>존재하지 않는 게시물 번호입니다.</StyledContainer>;
  }

  const DeletePost = () => {
    const confirmed = window.confirm(`${findFeed?.title} 글을 정말 삭제하시겠습니까?`);
    if (confirmed) {
      // 삭제 로직 추가
      alert("삭제되었습니다.");
      navigate('/');
    }
  };

  return (
    <StyledContainer>
      <PostCard>
        <PostTitle>{findFeed?.title}</PostTitle>
        <PostBody>{findFeed?.content}</PostBody>
        <ButtonGroup>
          <Button onClick={() => navigate(`/update/${id}`)}>
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

export default Post;
