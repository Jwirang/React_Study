import { useState, useEffect } from "react";
import { StyledContainer, StyledTextArea, StyledTextField, StyledButton } from "./style";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { postListState } from "../../stores";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

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
            <div>
                <h3>{id ? "포스트 수정" : "뇌에게 밥 주기"}</h3>
                <StyledTextField 
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
            </div>
            <StyledButton onClick={onClick}>
                {id ? "수정하기" : "추가하기"}
            </StyledButton>
        </StyledContainer>
    );
}

export default CreateOrUpdate;
