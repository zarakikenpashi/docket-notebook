import { Plus } from "lucide-react"
import { useState } from "react"

const Sidebar = ({addNote}) => {
    const [isVisible, setIsVisible] = useState(false)
  return (
    <nav className="w-32 border-r-1 border-[#dadce0] px-2 py-4 flex items-center flex-col gap-y-10">
        <Logo />
        <ButtonAdd change={isVisible} handleChange={setIsVisible} addNote={addNote} />
        <Buttons open={isVisible} />
    </nav>
  )
}

const ButtonAdd = ({addNote}) => {
    return(
        <button  
            className="bg-black size-10 rounded rounded-full text-white cursor-pointer flex items-center justify-center"
            onClick={addNote}
        >
            <Plus size={20} />
        </button> 
    )
}

const Buttons = ({open}) => {
    const colors = ["blue","purple","amber","lime","orange"]

    return(
        <div className={`flex-col gap-y-4 ${open ? 'flex' : 'hidden'}`}>
            {
                colors.map((color) =>(
                    <Button color={color} key={color} />
                ))
            }
            
        </div>
    )
}

const Button = ({color}) => {
    return(
        <button className={`bg-${color}-500 h-5 w-5 rounded rounded-full text-white cursor-pointer flex items-center justify-center`}></button>
    )
}

const Logo = () => {
    return(
        <h1 className="text-tertiarycolor text-xl font-semibold">Docknet</h1>
    )
}

export default Sidebar