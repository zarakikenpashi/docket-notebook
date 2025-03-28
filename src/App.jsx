import { Children, createContext, useState } from "react"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"



export const NotesContext = createContext()

const NOTES = [
  {
    id:1,
    createAt: "27/03/2025",
    description: "This is Docket note!"
  },
  {
    id:2,
    createAt: "27/03/2025",
    description: "This is DeathNote Book!"
  }
]


const App = () => {
  const [notes, setNotes] = useState(NOTES)

  const addNote = () => {
    const note = {
        id:Math.random(),
        createAt: "27/03/2025",
        description: "New Note",
        color: "orange",
    }
  
    return setNotes([...notes,note])
  
  }
  
  const deleteNote = (id) => {
    return setNotes(notes.filter((note)=> note.id != id))
  }

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
      <Layout>
        <Sidebar />
        <Body>
          <Header />
          <MainContent />
        </Body>
      </Layout>
    </NotesContext.Provider>
  )
}

const Layout = ({children}) => {
  return(
    <div className="min-h-screen bg-primarycolor flex flex-col lg:flex-row relative">
      { children }
    </div>
  )
}
const Body = ({children}) => {
  return(
    <main className="w-full px-12 pt-2 pb-4">
      { children }
    </main>
  )
}

export default App