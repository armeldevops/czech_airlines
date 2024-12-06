'use client'

import CardDashboard from "@/components/CardDashboard"
import Image from "next/image"

export default function Dashboard() {
  return (
    <div className="min-h-screen p-7">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-semibold">Welcome back, John! 👋</h1>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="col-span-2 rounded-lg">
            <div className="grid gap-4 md:grid-cols-2 space-x-6">
              <div className="relative h-full md:h-full">
                <Image
                  src="/Home-czech.png"
                  alt="Czech Airlines plane"
                  className="absolute w-full h-full object-cover rounded-md"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Avenue Genius: Why Sech Shut Down in Aviation
                </h2>
                <p>
                  Sech entered the aviation industry with high ambitions to innovate and redefine standards, but several challenges led to its closure. Financial struggles were a major issue, as the company faced high development and certification costs that far outweighed its revenue. Regulatory compliance also posed significant delays, undermining trust with clients and investors. Despite its technological advancements, Sech struggled to gain adoption, with products seen as either overly complex or misaligned with immediate user needs. Competing against well-established industry giants further compounded these challenges. Strategic missteps, such as premature diversification and inefficient allocation of resources, ultimately spread the company too thin to sustain operations. While Sech’s aviation journey ended, its innovations may influence future players in the field.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <CardDashboard />
      </div>
    </div>
  )
}