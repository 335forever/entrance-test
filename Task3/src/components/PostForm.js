import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newPost } from '../actions';

const PostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) dispatch(newPost(title, body));
  };

  return (
   <div className="post-form">
        <h2>Thêm bài viết mới</h2>
        <hr style={{ width: "95%" , border : "1px solid black"}}></hr>
        <form>
            <label>Tiêu đề<input type="text" onChange={(e)=>{setTitle(e.target.value)}}></input></label>
            <label>Nội dung<textarea rows="5" onChange={(e)=>{setBody(e.target.value)}}></textarea></label>
            <button type="submit" onClick={handleSubmit}>Xác nhận</button>
        </form>
   </div>
  );
};

export default PostForm;
