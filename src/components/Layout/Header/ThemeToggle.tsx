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
     <div className="switch">
      <input
        type="checkbox"
        id="theme-switch"
        className="switch-checkbox"
        checked={theme === "dark"}
        onChange={handleClick}
      />
      <label htmlFor="theme-switch" className="switch-label"></label>
    </div>
  )
}

export default ThemeToggle
