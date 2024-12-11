import React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectStudy({ onSelectionChange }: { onSelectionChange: (value: string) => void }) {
  const options = [
    { value: "radio", label: "Radio Navigation" },
    { value: "air", label: "Air Law" },
    { value: "meterlogy", label: "Meteorology" },
    { value: "operation", label: "Operation" },
    { value: "communication", label: "Communication" },
  ]

  const handleSelection = (value: string) => {
    onSelectionChange(value)
  }

  return (
    <Select onValueChange={handleSelection}>
      <SelectTrigger className="w-[300px] border-[#FFFFFF] rounded-3xl py-6 bg-[#FFFFFF] p-6">
        <SelectValue placeholder="Syllabus" />
      </SelectTrigger>
      <SelectContent className="border-[#FFFFFF] rounded-3xl bg-[#FFFFFF]">
        <SelectGroup className="mt-2 mb-2 ml-2 mr-2">
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}