import React from "react";
import {connect} from 'react-redux';
import Post from "./Post";

const Posts = (props) => {
    if (!props.syncPosts.length) {
        return <p className="text-center">No posts yet</p>
    }

    return props.syncPosts.map((post) => {
        return <Post post={post} key={post.id}/>
    });
}

const mapStateToProps = (state) => ({
    syncPosts: state.posts.posts
});


export default connect(mapStateToProps, null)(Posts);

