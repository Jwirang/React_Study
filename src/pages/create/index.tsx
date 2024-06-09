import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCreateFeed } from "../../api/fatBrainApi";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { FormContainer, FormTitle, Instructions, PlaceholderImage, StyledContainer, StyledTextArea } from "./style";

const CreateOrUpdate = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [content, setcontent] = useState('');
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (id) {
    //         const postToUpdate = postList.find(post => post.id === id);
    //         if (postToUpdate) {
    //             setTitle(postToUpdate.title);
    //             setBody(postToUpdate.body);
    //         }
    //     }
    // }, [id, postList]);

    const onClick = async() => {
        if (!title || !content) {
            alert("제목과 내용을 모두 입력해주세요.");
            return;
        }
        
        // if (id) {
        //     setPostList((oldPostList) =>
        //         oldPostList.map(post =>
        //             post.id === id ? { ...post, title, body } : post
        //         )
        //     );
        // } else {
        //     const newId = uuidv4();
        //     setPostList((oldPostList) => [...oldPostList,
        //         {
        //             id: newId,
        //             title: title,
        //             body: body
        //         },
        //     ]);
        // }

        
        const respons = await fetchCreateFeed({ title, content });
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
                    value={content} 
                    onChange={(event) => setcontent(event.target.value)}
                />
                <Button onClick={onClick}>
                    {id ? "수정하기" : "추가하기"}
                </Button>
            </FormContainer>
        </StyledContainer>
    );
}

export default CreateOrUpdate;
