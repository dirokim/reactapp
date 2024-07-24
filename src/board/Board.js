import { Link, json } from 'react-router-dom';
import React, { useState } from 'react';
import someone from '../test/someone'
function Board(){
    
  
    const [BoardList, setBoardList] = useState([]);
    const [page,setPage] = useState(0);

    function next (){
        setPage(page-1);
     
    }
    function before(){
        setPage(page+1);
      
    }

    // fetch(`http://192.168.7.161/notice/list/${page}`,{
    // }).then(r=>r.json())
    // .then(r=>{

    //     console.log(r.list);
    //     setBoardList(r.list);
    // })
    
        return (
            <>
            {BoardList && (
            <table>
            <thead>
                <tr>
                    <th>Num</th>
                    <th>Title</th>
                    <th>Writer</th>
                    <th>Date</th>
                    <th>Num</th>
                </tr>
                </thead>
                <tbody>


                {/* {
                    BoardList.map((ele,idx)=>(
                        <tr key={idx}>
                            <td>{ele.noticeNum}</td>
                            <td>{ele.noticeWriter}</td>
                            <td>{ele.noticeHead}</td>
                            <td>{ele.noticeDate}</td>
                            <td>{ele.noticeViews}</td>
                        </tr>
                    ))
                } */}

                </tbody>
            </table>
       
            )}
            <button onClick={before}>이전</button>
            <button onClick={next}>다음</button>
            </>
        )
}



export default Board;
