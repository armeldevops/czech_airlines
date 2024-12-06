"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"  // Importer le Switch de ShadCN UI
import { Label } from "./ui/label"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  // Fonction pour inverser le thème entre 'light' et 'dark'
  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light")
  }

  return (
    <div className="flex flex-col items-start space-y-2 mb-6">
      {
        theme == 'dark' ? (
          <Label htmlFor="airplane-mode">Dark Mode</Label>
        ) : (
          <Label htmlFor="airplane-mode">Light Mode</Label>
        )
      }
      <Switch 
        id="theme-switch" 
        checked={theme === "dark"}
        onCheckedChange={handleThemeChange} 
      />
    </div>
  )
}