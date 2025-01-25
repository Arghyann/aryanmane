import { useTheme as useNextTheme } from "next-themes"

export function useTheme() {
  const { theme, setTheme, systemTheme } = useNextTheme()

  const toggleTheme = () => {
    if (theme === "dark" || (theme === "system" && systemTheme === "dark")) {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return {
    theme,
    setTheme,
    systemTheme,
    toggleTheme,
    isDarkMode: theme === "dark" || (theme === "system" && systemTheme === "dark"),
  }
}

