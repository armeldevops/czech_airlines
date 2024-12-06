import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectVideo() {
  return (
    <Select>
      <SelectTrigger className="w-[300px] border-yellow-500 rounded-full py-6 bg-yellow-500">
        <SelectValue placeholder="Syllabus" />
      </SelectTrigger>
      <SelectContent className="border-yellow-500 rounded-xl bg-yellow-500">
        <SelectGroup>
          <SelectItem value="radio">Radio Navigation</SelectItem>
          <SelectItem value="air">Air law</SelectItem>
          <SelectItem value="meterlogy">Meterology</SelectItem>
          <SelectItem value="operation">Operation</SelectItem>
          <SelectItem value="communication">Communication</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
