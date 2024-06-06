import { useState } from "react";
import {StyledContainer, StyledTextArea, StyledTextField, StyledButton} from "./style"
import { useSetRecoilState } from "recoil";
import { postListState } from "../../stores";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setbody] = useState('');
    const setPostList = useSetRecoilState(postListState);
    const navigate = useNavigate();
    
    const OnClick = () => {
        if (!title || !body) {
            alert("제목과 내용을 모두 입력해주세요.");
            return;
        } else {
            const id = uuidv4();
            setPostList((oldPostList) => [...oldPostList,
                {
                    id: id,
                    title: title,
                    body: body
                },
            ]);
            navigate('/')
        }
    }

    return (
        <StyledContainer>
        <div>
            <h3>뇌에게 밥 주기</h3>
            <StyledTextField type="text" placeholder="제목" value={title} onChange={(event) => {
                setTitle(event.target.value);
            }}/>

            <StyledTextArea placeholder="내용" value={body} onChange={(event) => {
                setbody(event.target.value);
            }}/>
        </div>
        <StyledButton onClick={OnClick}>추가하기</StyledButton>
        </StyledContainer>
    );
}
export default Create