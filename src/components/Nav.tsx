import { useEffect, useState } from "react"
import "./Nav.scss"

const Nav = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleShow = () => {
      setShow(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleShow)

    return () => window.removeEventListener("scroll", handleShow)
  }, [])

  return (
    <div className={`Nav ${show && "Nav-black"}`}>
      <img
        className="Nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
      />
      <img
        className="Nav-avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
    </div>
  )
}

export default Nav
