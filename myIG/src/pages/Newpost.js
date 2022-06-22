import {Container,Header, Form ,Image,Button} from 'semantic-ui-react';
import React from 'react';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import firebase from '../utils/firebase';
import {useEffect, useHistory} from 'react-router-dom';
function NewPost(){
    const history = useHistory();
    const [content,setContent] = React.useState('');
    const [file,setFile] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const previewURL = file?URL.createObjectURL(file):"https://react.semantic-ui.com/images/wireframe/image.png";
    function onSubmit(){
        setIsLoading(true);
        const fireRef = firebase.storage().ref('post-image'+documentRef.id);
        const metadata = {
            contentType:file.type
        };
        fireRef.put(file,metadata);
        
        const documentRef = firebase.firestore().collection("post").doc();  
        documentRef.set({
            content,
            createdAt:firebase.firestore.Timestamp.now(),
            author:{
                displayName:firebase.auth().currentUser.displayName||"",
                photoURL: firebase.auth().currentUser.photoURL||"",
                uid : firebase.auth().currentUser.uid,
                email:firebase.auth().currentUser.email,
            }
        }).then(()=>{
            setIsLoading(false);
            history.push('/');
        });
    }
    return (
        <Container>
            <Header>發佈新貼文</Header>
            <Form onSubmit={onSubmit}>
                <Image 
                    src = {previewURL}
                    size='small'
                    floated='left'/>
                <Button basic as="label" htmlFor="post-image">
                    上傳圖片
                </Button>
                <Form.Input 
                    type='file' 
                    id = "post-image"  
                    style= {{display:'none'}}
                    onChange = {(e)=>{setFile(e.target.files[0])}}
                    />
                <Form.TextArea
                    placeholder = "輸入文章內容" 
                    value = {content} 
                    onChange = {(e)=>setContent(e.target.value)}
                />
                <Form.Button loading = {isLoading}>送出</Form.Button>
            </Form>
        </Container>
    );
}

export default NewPost;