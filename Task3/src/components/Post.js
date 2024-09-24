import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';  
import { loadPostById } from '../actions';
import _ from 'lodash';

const Post = ({postDataInit, index}) => {
    const dispatch = useDispatch();

    const [postId, setPostId] = useState(postDataInit?.id);

    useEffect(() => {
        dispatch(loadPostById(postId, index));
    }, [postId]);

    const postDataInStore = useSelector((state) => state.posts[index]);
    
    const [postData, setPostData] = useState(postDataInit);
  
    useEffect(() => {
        setPostData(postDataInStore);
    }, [postDataInStore]);

    const handleRandomize = () => {
        setPostId(_.random(1, 100)); 
    };

    if (!postData) return <p>Loading...</p>;
    
    return (
    <div className="post" style={(postData.userId) && {backgroundColor : "rgb(214, 214, 255)"} }>
            <div className="post-body">
                <h1 style={{fontSize: "24px"}}>Bài viết số {postData.id}</h1>
                <span style={{fontStyle : "italic", float : "right", marginBottom : "10px"}}>Tác giả : {postData.userId ?? 'tôi' }</span> 
                <hr style={{ width: "95%" , border : "1px solid black"}}></hr>
                <h2 style={{fontSize: "18px", marginTop: "10px"}}>{postData.title}</h2>
                <p style={{fontSize: "14px"}}>{postData.body}</p>
            </div>
            <button onClick={handleRandomize} style={{marginBottom : "5px"}}>Đổi bài viết mới ngẫu nhiên</button>
    </div>
    );
};

export default Post;
