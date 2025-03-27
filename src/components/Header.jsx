import { Search } from "lucide-react"

const Header = () => {
  return (
    <header className="h-12 flex items-center gap-x-2">
        <Search size={20} />
        <input type="text" placeholder="Search..." className="outline-none" />
    </header>
  )
}

export default Header