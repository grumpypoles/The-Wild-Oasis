import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2"
import ButtonIcon from "./ButtonIcon"
import { useDarkMode } from "../context/DarkModeContext"
import { is } from "date-fns/locale/is"

function DarkModeToggle() {
    const { isDarkMode, toggleDarkMode } = useDarkMode()
    return (
       <ButtonIcon onClick={toggleDarkMode}>
        {isDarkMode ? <HiOutlineSun/> : <HiOutlineMoon/>  }
       </ButtonIcon>
    )
}

export default DarkModeToggle
