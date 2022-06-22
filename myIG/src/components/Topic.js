import React from "react";
import firebase from "../utils/firebase";

import 'firebase/firestore';
import {List} from 'semantic-ui-react';

function Topic(){
    const [topics,setTopics] = React.useState([]);
    React.useEffect(()=>{
        firebase
        .firestore()
        .collection("topics")
        .get()
        .then((collectionSnapShot)=>{
            const data = collectionSnapShot.docs.map((doc)=>{
                return doc.data();
            });
            setTopics(data);
        });
    },[]);
    return (
    <List animated selection>
        {topics.map((topic)=>{
            return (
                <List.Item key = {topic.name}>
                    {topic.name}
                </List.Item>
            )
        })}
    </List>
    );
}

export default Topic;
