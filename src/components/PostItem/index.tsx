import { useNavigate } from "react-router-dom";
import { StyledPostItem, StyledContainer, StyleP, StyledTitle } from "./style";

type PostItemProps = {
  id: number;
  title: string;
  createdAt: Date;
};

const PostItem = ({ id, title, createdAt }: PostItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${id}`);
  };

  const date = new Date(createdAt);
  const formattedDate = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  return (
    <StyledContainer>
      <StyledPostItem onClick={handleClick}>
          <StyledTitle>{title}</StyledTitle>
        <StyleP>{formattedDate}</StyleP>
      </StyledPostItem>
    </StyledContainer>
  );
};

export default PostItem;
