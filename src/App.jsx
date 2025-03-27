import { useState } from "react"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"

const App = () => {
  const NOTES = [
    {
      id:1,
      createAt: "27/03/2025",
      description: "This is Docket note!",
      color: "amber",
    },
    {
      id:2,
      createAt: "27/03/2025",
      description: "This is DeathNote Book!",
      color: "blue",
    }
  ]

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
      <div className="min-h-screen bg-primarycolor flex flex-col lg:flex-row relative">
        <Sidebar addNote={addNote} />
        <main className="w-full px-12 pt-2 pb-4">
          <Header />
          <MainContent notes={notes} deleteNote={deleteNote} />
        </main>
      </div>
  )
}

export default App