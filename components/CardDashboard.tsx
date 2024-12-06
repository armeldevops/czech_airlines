'use client'

import React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"

const data = [
  { month: "JAN", questions: 2000 },
  { month: "FEB", questions: 2800 },
  { month: "MAR", questions: 3200 },
  { month: "APR", questions: 3800 },
  { month: "MAY", questions: 4200 },
  { month: "JUN", questions: 4800 },
  { month: "JUL", questions: 5400 },
  { month: "AUG", questions: 6200 },
  { month: "SEP", questions: 7000 },
  { month: "OCT", questions: 7800 },
  { month: "NOV", questions: 8500 },
  { month: "DEC", questions: 9107 },
]

const CardDashboard = () => {
  return (
    <div className='grid md:grid-cols-3 gap-6'>
      <div className='md:col-span-1'>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Air law
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 7l5 5 5-5" />
              </svg>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-[220px]">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="stroke-gray-200"
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    strokeWidth="10"
                  />
                  <circle
                    className="stroke-yellow-300"
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    strokeWidth="10"
                    strokeDasharray="283"
                    strokeDashoffset="28.3"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold">90%</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <div>
                  <div className="text-sm font-medium">90%</div>
                  <div className="text-xs text-gray-500">General mark</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <div>
                  <div className="text-sm font-medium">1,298</div>
                  <div className="text-xs text-gray-500">Questions completed</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Questions report
              <label htmlFor="report-type" className="sr-only">Select report type</label>
              <select id="report-type" className="text-sm border rounded-md px-2 py-1">
                <option>Yearly</option>
                <option>Monthly</option>
                <option>Weekly</option>
              </select>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="text-2xl font-bold">9,107</div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-yellow-500">2.3%</span>
                <span className="text-gray-500">Questions in 2024</span>
              </div>
            </div>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis
                    dataKey="month"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                  />
                  <Line
                    type="monotone"
                    dataKey="questions"
                    stroke="#E5D4FF"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default CardDashboard
