import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { fetchFeeds, fetchMe } from "../../api/fatBrainApi";
import icon from '../../assets/icon.png';
import Card from "../../components/Card";
import PostItem from "../../components/PostItem";
import { CardBody, CardTitle, HoverImage, HoverText, StyleP, StyledButton, StyledContainer, StyledPostListContainer } from "./style";


const Home = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    navigate(`/create/`);
  };

  const { data: me, isError} = useQuery({
    queryKey: ['me'],
    queryFn: fetchMe,
  })
  // if (isError) {
  //   navigate('/login')
  // }

  const page = 0
  const size = 5

  const { data: feedList } = useQuery({
    queryKey: ['feedList', {page, size}],
    queryFn: () => fetchFeeds(page, size),
  })

  return (
    <main>
      <StyledContainer>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Card>
            {!isHovered ? (
            <>
            <CardTitle>여기는</CardTitle>
            <CardBody> {me?.nickname ?? me?.username}님이 공부한 내용을 기록하는 곳이예요.🫡</CardBody>
            </> ) : (
             <>
            <HoverImage src={icon} alt="예시 이미지" />
            <HoverText>개의 글을 작성하셨네요!</HoverText>
            </> )}
          </Card>
        </div>
        <StyledPostListContainer>
        {
          feedList?.content.length ? (
          feedList.content.map(({ id, title, createdAt }) => (
          <PostItem key={id} id={id} title={title} createdAt= {createdAt} />
        ))) : ( <StyleP>작성된 글이 없습니다.</StyleP>)}
        </StyledPostListContainer>
        <StyledButton onClick={handleClick}>+</StyledButton>
      </StyledContainer>
    </main>
  );
};

export default Home;