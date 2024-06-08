import { useState, useEffect } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { StyledContainer, FormContainer, StyledTextArea, FormTitle, PlaceholderImage, Instructions } from "./style";
import { postListState } from "../../stores";
import Button from "../../components/Button";
import InputField from "../../components/InputField";

const CreateOrUpdate = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const setPostList = useSetRecoilState(postListState);
    const postList = useRecoilValue(postListState);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const postToUpdate = postList.find(post => post.id === id);
            if (postToUpdate) {
                setTitle(postToUpdate.title);
                setBody(postToUpdate.body);
            }
        }
    }, [id, postList]);

    const onClick = () => {
        if (!title || !body) {
            alert("제목과 내용을 모두 입력해주세요.");
            return;
        }
        
        if (id) {
            setPostList((oldPostList) =>
                oldPostList.map(post =>
                    post.id === id ? { ...post, title, body } : post
                )
            );
        } else {
            const newId = uuidv4();
            setPostList((oldPostList) => [...oldPostList,
                {
                    id: newId,
                    title: title,
                    body: body
                },
            ]);
        }

        navigate('/');
    };

    return (
        <StyledContainer>
            <FormContainer>
                <PlaceholderImage src="https://via.placeholder.com/100" alt="Placeholder" />
                <FormTitle>{id ? "게시물 수정하기" : "새 게시물 작성하기"}</FormTitle>
                <Instructions>
                    {id ? "수정하려는 게시물의 제목과 내용을 입력하세요." : "새 게시물의 제목과 내용을 입력하세요."}
                </Instructions>
                <InputField
                    width={300}
                    type="text" 
                    placeholder="제목" 
                    value={title} 
                    onChange={(event) => setTitle(event.target.value)}
                />
                <StyledTextArea 
                    placeholder="내용" 
                    value={body} 
                    onChange={(event) => setBody(event.target.value)}
                />
                <Button onClick={onClick}>
                    {id ? "수정하기" : "추가하기"}
                </Button>
            </FormContainer>
        </StyledContainer>
    );
}

export default CreateOrUpdate;
