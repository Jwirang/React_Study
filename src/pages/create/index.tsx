import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCreateFeed, fetchFeedUpdate, fetchFindFeed } from "../../api/fatBrainApi";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { FormContainer, FormTitle, Instructions, PlaceholderImage, StyledContainer, StyledTextArea } from "./style";
import Alert from "../../components/Alert";
import createIcon from '../../assets/create.png';
import updateIcon from '../../assets/update.png';

const CreateOrUpdate = () => {
    const { id, isError } = useParams();
    const [title, setTitle] = useState('');
    const [content, setcontent] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState('');
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
            setMessage('모든 항목을 작성해주세요.')
            setShowAlert(true)
            return;
        }

        if(id) {
            const respons = await fetchFeedUpdate(Number(id), {title, content});
            setMessage('게시물이 수정되었습니다.')
            setShowAlert(true)
        } else {
            const respons = await fetchCreateFeed({ title, content });
            setMessage('게시물이 추가되었습니다.')
            setShowAlert(true)
        }
    };
    if (isError) {
        return <StyledContainer>존재하지 않는 게시물 번호입니다.</StyledContainer>;
      }

    return (
        <StyledContainer>
            <FormContainer>
                <PlaceholderImage src={id ? updateIcon: createIcon} alt="Placeholder" />
                <FormTitle>{id ? "게시물 수정하기" : "새 게시물 작성하기"}</FormTitle>
                <Instructions>
                    {id ? "작성한 게시물을 수정해보세요.": "오늘 공부한 내용을 기록해보세요."}
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
                    message={message}
                    onClose={() => {
                        if(message !== '모든 항목을 작성해주세요.') {
                            navigate('/');
                        }
                        setShowAlert(false)
                    }} title={""}/>
                )}
            </FormContainer>
        </StyledContainer>
    );
}

export default CreateOrUpdate;
