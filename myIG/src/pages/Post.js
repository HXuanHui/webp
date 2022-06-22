import React from 'react';
import {Grid} from 'semantic-ui-react';
import Topic from '../components/Topic';

function Post(){
    return <Grid>
        <Grid.Row>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={12}>貼文</Grid.Column>
            <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
    </Grid>;
};

export default Post;