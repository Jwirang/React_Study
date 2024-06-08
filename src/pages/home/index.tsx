import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { postListState } from "../../stores";
import { StyledContainer, StyledPostListContainer, StyledButton, Card, CardTitle, CardBody, HoverContent, HoverImage, HoverText } from "./style";
import PostItem from "../../components/PostItem";
import icon from '../../assets/icon.png';
import { useQuery } from "react-query";
import { fetchFeeds, fetchMe } from "../../api/fatBrainApi";


const Home = () => {
  const navigate = useNavigate();
  const postList = useRecoilValue(postListState);

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
  const size = 50

  const { data: feedList } = useQuery({
    queryKey: ['feedList', {page, size}],
    queryFn: () => fetchFeeds(page, size),
  })

  return (
    <main>
      <StyledContainer>
        <Card>
          <CardTitle>여기는</CardTitle>
          <CardBody> {me?.nickname ?? me?.username}님이 공부한 내용을 기록하는 곳이예요.🫡</CardBody>
          <HoverContent className="hover-content">
            <HoverImage src={icon} alt="예시 이미지" />
            <HoverText>개의 글을 작성하셨네요!</HoverText>
          </HoverContent>
        </Card>
        <StyledPostListContainer>
          {feedList?.content.map(({ id, title }) => (
            <PostItem key={id} id={id} title={title} />
          ))}
        </StyledPostListContainer>
        <StyledButton onClick={handleClick}>+</StyledButton>
      </StyledContainer>
    </main>
  );
};

export default Home;