import NavBar from "./NavBar"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"

type Props = {
  fullWidth: boolean
}

const Header: React.FC<Props> = ({ fullWidth }) => {
  return (
    // <div className="shadow-sm transition sticky bg-white dark:bg-zinc-700 mb-2 md:mb-6 border-b-[1px] z-[40] border-gray-100 dark:border-gray-800 top-0">
      <div
        className={`mt-2 top-2 my-2 bg-white sticky shadow-sm rounded-2xl sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-6 py-8 bg-opacity-60 max-w-6xl px-4 ${
          fullWidth && "px-4 md:px-24"
        }`}
      >
        <Logo />
        <div className={`flex gap-3 items-center `}>
          <ThemeToggle />
          <NavBar />
        </div>
      </div>
    // </div>
  )
}

export default Header
