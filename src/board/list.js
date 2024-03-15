import React from 'react';
import { Link } from 'react-router-dom';




function List(){

    fetch('http://192.168.7.161/notice/list',{
        method:"GET"



    }).then(r=>r.json())
    .then(r=>{
        console.log(r);
    })
    return (
    
        
        <></>
        

    )


}



export default List;