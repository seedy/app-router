import { CalendarIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons"
import NavLink from "@/components/NavLink"

const Navbar = () => (
    <nav className='flex items-center w-full h-16 shrink-0 bg-background'>
        <div className='flex py-0 px-5 justify-between items-center flex-1 self-stretch bg-navbar'>
            <h1 className="text-text text-center font-bold text-4xl">Floé Gaubert</h1>
            <div className="flex items-start">
                <NavLink href="/weather">Weather</NavLink>
                <NavLink href="/presentation">Présentation</NavLink>
                <NavLink href="/portfolio">Portfolio</NavLink>
            </div>
            <div className="flex items-center gap-5">
                <button type="button" aria-label="Planifier un RDV" className="flex p-4 items-start rounded-full text-secondary-background">
                    <CalendarIcon />
                </button>
                <button type="button" aria-label="Prendre contact" className="flex p-4 items-start rounded-full text-secondary-background">
                    <EnvelopeClosedIcon />
                </button>

            </div>
        </div>
    </nav>
)

export default Navbar