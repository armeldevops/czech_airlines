import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectedLastExams() {
  return (
    <Select>
      <SelectTrigger className="w-[170px] border-[##FFFFFF] rounded-3xl py-4 bg-[#FFFFFF] p-5">
        <SelectValue placeholder="Last exams" />
      </SelectTrigger>
      <SelectContent className="border-[#FFFFFF] rounded-3xl bg-[#FFFFFF]">
        <SelectGroup className="mt-2 mb-2 ml-2 mr-2">
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="100">100</SelectItem>
          <SelectItem value="200">200</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}