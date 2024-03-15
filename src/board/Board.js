import React from 'react';
import { Link } from 'react-router-dom';
import List from './list';
import React, { useState } from 'react';


function Board(){

    const [noticeNum, setNoticeNum] = useState("");
    const [noticeWriter, setNoticeWriter] = useState("");
    const [noticeHead, setNticeHead,] = useState("");
    

    
    fetch('http://192.168.7.182/notice/list',{
    }).then(r=>r.json())
    .then(r=>{
        console.log(r);
        
    })
    for(const [key, value] in Object.entries(Item)) {
        console.log(`${key}  ${value.noticeNum}`)
        console.log(`${key}  ${value.noticeWriter}`)
        console.log(`${key}  ${value.noticeHead}`)
    }
    Object.entries(Item).map(drink => {
        return (
            
            <div>
            <h1> React Board List </h1>
            <div>메뉴명: {drink[0].noticeNum}</div>
            <div>메뉴명: {drink[0].noticeWriter}</div>
            <div>메뉴명: {drink[0].noticeHead}</div>
        </div>)

}
);

    




}



export default Board;
