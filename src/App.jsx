import Sidebar from './Sidebar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Notes from './Notes';
import Edit from './Edit';
import NotesContext from "./Context/NotesContext"
import { Navigate } from 'react-router-dom';

function App() {
  

return (
    <>
    
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path='/notes' element={
        <NotesContext>
        <Notes/>
        </NotesContext>}/>
        <Route path='/edit/:id' element={
        <NotesContext>
        <Edit/>
        </NotesContext>}/>
        <Route path='*' element={< Navigate to='/notes'/>}/>
      </Routes>
      </BrowserRouter> 
          </>
  )
}

export default App
