import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectExamProps {
  onChange: (value: string) => void;
}

export function SelectExam({ onChange }: SelectExamProps) {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[300px] border-[#EECE84] rounded-3xl py-6 bg-[#EECE84] p-6">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent className="border-[#EECE84] rounded-3xl bg-[#EECE84]">
        <SelectGroup className="mt-2 mb-2 ml-2 mr-2">
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