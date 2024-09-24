import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import Post from './Post'
import { loadPostById } from '../actions';

const PostList = ({numberOfPost}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        for (let index = 0 ; index < numberOfPost; index ++) {
            dispatch(loadPostById(index + 1, index));
        }
    }, [])
    
    const [listData, setListData] = useState();
    const list = useSelector((state) => state.posts);

    useEffect(()=>{
        setListData(list);
    }, [list])

    if (!listData) return <p>Loading...</p>
    
    return (
        <div className="post-list">
            {
                listData.map((postData, index) => {
                    return (<Post postDataInit={postData} index={index} key={index}></Post>)
                })
            }
        </div>
    );
};

export default PostList;
