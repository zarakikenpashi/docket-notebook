import { Pencil, Trash2 } from "lucide-react"

const MainContent = ({notes,deleteNote}) => {
  return (
    <section>
        <h1 className="text-7xl font-bold text-black py-4">Notes</h1>
        <Cards notes={notes} deleteNote={deleteNote} />
    </section>
  )
}


const Cards = ({notes, deleteNote}) => {
    return(
        <div className="flex gap-4 flex-wrap">
            {notes.map((note)=>(
                <Card note={note} deleteNote={deleteNote} key={note.id} />
            ))}
        </div> 
    )
}


const Card = ({note, deleteNote}) => {
    return(
        <div className={`size-64 rounded-lg p-4 flex flex-col justify-between border-1 border-[#dadce0] shadow`}>
            <div className="">
                {note.description}
            </div>
            <footer className="flex justify-between items-center">
                <div className="text-sm">{note.createAt}</div>
                <div className="flex gap-x-2">
                    <button className="size-8 bg-black text-neutral-300  rounded-full flex items-center justify-center cursor-pointer">
                        <Pencil size={16} />
                    </button>
                    <button className="size-8 bg-white text-neutral-500 rounded-full flex items-center justify-center cursor-pointer">
                        <Trash2 size={16} onClick={()=>deleteNote(note.id)} />
                    </button>
                </div>
            </footer>
        </div>
    )
}

export default MainContent