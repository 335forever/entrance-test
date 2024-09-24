import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';  

const List = () => {
    const list = useSelector((state) => state.posts);

    const [listData, setListData] = useState();

    useEffect(()=>{
        setListData(list);
    }, [list])

    if (!listData) return <p>Loading...</p>
    
    return (
        <div className="list">
            <h1 style={{fontSize: "24px", marginBottom: "10px"}}>Mục lục</h1>
            <hr style={{ width: "95%" , border : "1px solid black"}}></hr>
            <ol style={{marginTop: "10px"}}>
                {
                    listData.map((postData, index) => {
                        return (
                            <li key={index} style={{width: "100%"}}>Bài viết số {postData?.id}</li>
                        )
                    })
                }
            </ol>
        </div>
    );
};

export default List;
