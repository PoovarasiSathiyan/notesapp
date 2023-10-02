import React, { useState,useEffect,useContext } from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { NotesDataContext } from './Context/NotesContext';

const Edit=()=> {
    const params = useParams()
    const {data,setData} = useContext(NotesDataContext)
    let [title,setTitle]=useState("")
    let [content,setContent]=useState("")
    let navigate = useNavigate()

    const getData=(index)=>{
        setTitle(data[index].title)
        setContent(data[index].content)
    }

    useEffect(()=>{
        if(Number(params.id)<data.length)
        {
          getData(Number(params.id))  
        }
        else{
            navigate('/notes')
        }
    },[])
    const handleSave=()=>{
        let newArray =[...data]
        newArray.splice(Number(params.id),1,{
            title,
            content
        })
        setData(newArray)
        navigate('/notes')

    }
    
  return <div className='img1'>
  <div className='box'>
 <div className="mb-3">
  <h3 className='add'>Add Note</h3>
<label htmlFor="exampleFormControlInput1" className="form-label"></label>
<input type="text" className="form-control" value={title} id="exampleFormControlInput1" placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
</div>
<div className="form-floating">
<textarea className="form-control" value={content} placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}} onChange={(e)=>setContent(e.target.value)}></textarea>
<label htmlFor="floatingTextarea2">Take a note...</label>
</div>
</div>
<Button className='button' onClick={()=>handleSave()}>Submit</Button>
</div>
}

export default Edit