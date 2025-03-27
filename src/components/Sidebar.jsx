import { Plus } from "lucide-react"
import { useState } from "react"

const Sidebar = ({addNote}) => {
    const [isVisible, setIsVisible] = useState(false)
  return (
    <nav className="sticky top-0 bg-primarycolor w-full lg:w-32 border-r-1 border-[#dadce0] px-8 lg:px-2 py-4 flex items-center flex-row justify-between lg:justify-start lg:flex-col gap-y-10">
        <Logo />
        <ButtonAdd change={isVisible} handleChange={setIsVisible} addNote={addNote} />
    </nav>
  )
}

const ButtonAdd = ({addNote}) => {
    return(
        <button  
            className="bg-black size-10 rounded-full text-white cursor-pointer flex items-center justify-center"
            onClick={addNote}
        >
            <Plus size={20} />
        </button> 
    )
}


const Logo = () => {
    return(
        <h1 className="text-tertiarycolor text-xl font-semibold">Docknet</h1>
    )
}

export default Sidebar