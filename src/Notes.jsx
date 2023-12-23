import React,{useState,useContext} from 'react'
import Button  from 'react-bootstrap/Button';
import noteimg from './images/description1.svg'
import { useNavigate } from 'react-router-dom';
import { NotesDataContext } from './Context/NotesContext';
import { Formik } from 'formik'
import * as Yup from 'yup'

function Notes() {
  let {data,setData} = useContext(NotesDataContext);
  const navigate = useNavigate()

  const noteSchema = Yup.object().shape({
    title:Yup.string().required(" * Required"),
    content:Yup.string().required(" * Required")
  })
  
  let handleDelete = (index)=>{
    let newArray=[...data]
    newArray.splice(index,1)
    console.log(data)
    setData(newArray)
  }
  

  return<>
       <Formik initialValues={{
        title:"",
        content:""
       }}
       validationSchema={noteSchema}
       onSubmit={(values)=>{
        let newArray=[...data]
        newArray.push(values)
        setData(newArray)

       }}
       >
        {({errors,touched,handleBlur,handleSubmit,handleChange})=>(
          <form onSubmit={handleSubmit}>
          <div className='img1'>
          <div className='box'>
         <div className="mb-3">
          <h3 className='add'>Add Note</h3>
    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" name="title" onBlur={handleBlur} onChange={handleChange}/>
    {errors.title && touched.title ? <div style={{color:"red"}}>{errors.title}</div>:null}
  </div>
  <div className="form-floating">
    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" name='content' onBlur={handleBlur} onChange={handleChange} style={{height: "100px"}}></textarea>
    <label htmlFor="floatingTextarea2">Take a note...</label>
    {errors.content && touched.content ? <div style={{color:"red"}}>{errors.content}</div>:null}
  </div>
  </div>
  <Button className='button' type="submit">Submit</Button>
  <div className='dash1'><img className="" src={noteimg}/>&nbsp;&nbsp; My Notes</div>
  <p>Recently Viewed</p>
  
    </div>
    </form>
        )}
        

        
        </Formik> 
  <div className="row row-cols-1 row-cols-md-3 g-4 div2">
    {
    data.map((e,i)=>{
      return <div key={i}>
      <div className="col">
      <div className="card h-100">
      <div className="card-body">
        
        <h5 className="card-title">{e.title}<span className='logo'><i className="fa-solid fa-pencil" style={{color:"#203562"}} onClick={()=>{
          navigate(`/edit/${i}`)
        }}>
          </i>&nbsp;&nbsp;<i className="fa-regular fa-trash-can" style={{color: "#203562"}} onClick={()=>handleDelete(i)}></i></span></h5>
        
        <p className="card-text">{e.content}</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondaryclassName">Last updated 3 mins ago</small>
      </div>
    </div>
    </div>
    </div>
  })
}
 </div>
    </>
    
}
export default Notes