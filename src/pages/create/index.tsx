import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCreateFeed, fetchFeedUpdate, fetchFindFeed } from "../../api/fatBrainApi";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { FormContainer, FormTitle, Instructions, PlaceholderImage, StyledContainer, StyledTextArea } from "./style";
import Alert from "../../components/Alert";

const CreateOrUpdate = () => {
    const { id, isError } = useParams();
    const [title, setTitle] = useState('');
    const [content, setcontent] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                const result = await fetchFindFeed(Number(id));
                setTitle(result.title);
                setcontent(result.content);
            };
            fetchData();
        }
    }, [id]);

    const onClick = async() => {
        if (!title || !content) {
            setShowAlert(true)
            return;
        }

        if(id) {
            const respons = await fetchFeedUpdate(Number(id), {title, content});
        } else {
            const respons = await fetchCreateFeed({ title, content });
        }
        navigate('/');
    };
    if (isError) {
        return <StyledContainer>존재하지 않는 게시물 번호입니다.</StyledContainer>;
      }

    return (
        <StyledContainer>
            <FormContainer>
                <PlaceholderImage src="https://via.placeholder.com/100" alt="Placeholder" />
                <FormTitle>{id ? "게시물 수정하기" : "새 게시물 작성하기"}</FormTitle>
                <Instructions>
                    {id ? "수정할 게시물의 제목과 내용을 입력하세요.": "새 게시물의 제목과 내용을 입력하세요."}
                </Instructions>
                <InputField
                    width={300}
                    type="text" 
                    placeholder='제목'
                    value={title} 
                    onChange={(event) => setTitle(event.target.value)}
                />
                <StyledTextArea 
                    placeholder='내용'
                    value={content} 
                    onChange={(event) => setcontent(event.target.value)}
                />
                <Button onClick={onClick}>
                    {id ? "수정하기" : "추가하기"}
                </Button>
                {showAlert && (
                    <Alert
                    message="제목과 내용을 모두 입력해주세요."
                    onClose={() => setShowAlert(false)} title={""}/>
                )}
            </FormContainer>
        </StyledContainer>
    );
}

export default CreateOrUpdate;
