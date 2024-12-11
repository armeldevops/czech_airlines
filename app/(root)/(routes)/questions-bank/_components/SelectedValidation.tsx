import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectedValidation() {
  return (
    <Select>
      <SelectTrigger className="w-[200px] border-[#EECE84] rounded-3xl py-5 bg-[#EECE84] p-5">
        <SelectValue placeholder="All" />
      </SelectTrigger>
      <SelectContent className="border-[#EECE84] rounded-3xl bg-[#EECE84]">
        <SelectGroup className="mt-2 mb-2 ml-2 mr-2">
          <SelectItem value="correct">Correct</SelectItem>
          <SelectItem value="wrong">Wrong</SelectItem>
          <SelectItem value="flagged">Flagged</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}