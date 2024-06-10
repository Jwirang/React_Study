import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { fetchFeeds, fetchGetCount, fetchMe } from "../../api/fatBrainApi";
import icon from '../../assets/icon.png';
import Card from "../../components/Card";
import PostItem from "../../components/PostItem";
import { BrainText, CardBody, CardTitle, HoverImage, HoverText, StyleP, StyledButton, StyledContainer, StyledPostListContainer } from "./style";


const Home = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [message, setmessage] = useState('');

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

  const { data: count,} = useQuery({
    queryKey: ['count'],
    queryFn: fetchGetCount,
  })

  useEffect(() => {
    if (count) {
      if (count.count === 0) {
        setmessage('너무 배고파요');
      } else if (count.count >= 1 && count.count < 4) {
        setmessage('아직 배고파요');
      } else if (count.count >= 4 && count.count < 6) {
        setmessage('이제 배불러요');
      } else if (count.count >= 6){
        setmessage('과식했어요..');
      }
    }
  }, [count]);
  
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
            <BrainText>{message}</BrainText>
            <HoverText>{count.count}개의 지식을 냠냠했어요!</HoverText>
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