import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAnchor } from '@fortawesome/free-solid-svg-icons'
import { faUser, faPaperPlane} from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'

export default function Dropdown({xmark, setXmark}) {

  const toggleClass = () => {
    setXmark(presetXmark => presetXmark === false ? true : false)
  }

  return (
    <div className="dropdown">
      <div className="navbar_links">
        <Link href="/" onClick={toggleClass}><FontAwesomeIcon className="icon" icon={faHouse}/>Home</Link>
        <Link href ="/about" onClick={toggleClass}><FontAwesomeIcon className="icon" icon={faUser}/>About Me</Link>
        <Link href ="/boat-detailing" onClick={toggleClass}><FontAwesomeIcon className="icon" icon={faAnchor}/>Boat Detailing</Link>
        <Link href ="/quote" onClick={toggleClass}><FontAwesomeIcon className="icon" icon={faPaperPlane}/>Get Quote</Link>
      </div>
    </div>
  )
}
