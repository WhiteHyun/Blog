import { CONFIG } from "@/site.config"
import { ThemeType } from "@/src/types"
import { getTheme } from "@hooks/useThemeEffect"
import React, { useEffect, useState } from "react"

type Props = {}

const ThemeToggle: React.FC<Props> = () => {
  const [theme, setTheme] = useState<ThemeType>()

  useEffect(() => {
    if (typeof window === "object") {
      setTheme(getTheme())
    }
  }, [])

  const handleClick = () => {
    const changedTheme = getTheme() !== "dark" ? "dark" : "light"
    localStorage.setItem("theme", changedTheme)
    setTheme(changedTheme)
    changedTheme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark")
  }

  if (CONFIG.blog.theme !== "auto") return null
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input 
        type="checkbox"
        className="sr-only peer"
        checked={theme === "dark"}
        onChange={handleClick}
      />
      <div className="w-11 h-6 bg-gray-200 peer-checked:bg-night rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
    </label>
  )
}

export default ThemeToggle

{/* <label htmlFor="theme-switch" className={`bg-gray-200 dark:bg-gray-950
absolute cursor-pointer inset-0 transition-all duration-300 rounded-3xl
before:bg-white before:absolute  before:content-[attr(before)] before:h-5 before:w-5 before:left-1 before:bottom-1 before:transition-all before:duration-300 before:rounded-full ${theme === "dark" ? "before:translate-x-0" : "before:translate-x-6"}
`}></label> */}