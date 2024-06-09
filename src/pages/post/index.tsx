/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchFeedDelete, fetchFindFeed } from "../../api/fatBrainApi";
import Button from "../../components/Button";
import { ButtonGroup, PostBody, PostCard, PostTitle, StyledContainer } from "./style";
import { useState } from "react";
import Alert from "../../components/Alert";

const Post = () => {
  const { id, isError} = useParams();
  const navigate = useNavigate()
  const [showAlert, setShowAlert] = useState(false);
  const { data: findFeed} = useQuery({
    queryKey: ['findFeed', {id}],
    queryFn: () => fetchFindFeed(Number(id)),
  })

  // if (isLoading) {
  //   return <StyledContainer>로딩.</StyledContainer>;
  // }

  if (isError) {
    return <StyledContainer>존재하지 않는 게시물 번호입니다.</StyledContainer>;
  }

  const mutation = useMutation((id: Number) => fetchFeedDelete(Number(id)), {
    onSuccess: () => {
      setShowAlert(true)
      navigate('/');
    },
    onError: (error) => {
      //console.error("삭제 중 오류가 발생했습니다:", error);
      alert("삭제 중 오류가 발생했습니다.");
    }
  });

  const feedDelete = () => {
    mutation.mutate(Number(id))
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
          <Button>
            삭제하기
          </Button>
        </ButtonGroup>
        {showAlert && (
        <Alert
        message="삭제 되었습니다."
        onClose={() => setShowAlert(false)} title={""}/>
      )}
      </PostCard>
    </StyledContainer>
  );
};

export default Post;
