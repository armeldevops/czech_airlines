
import Sidebar from '@/components/sidebar'
import React from 'react'

export default function Layout({ children } : { children: React.ReactNode }) {
  return (
    <div className='h-full'>
      {/* Possible Navbar Here */}
      <div className='md:container'>
        <div className='hidden md:flex h-full w-20 flex-col fixed inset-y-0'>
          <Sidebar />
        </div>
        <main className='md:pl-20 md:ml-4 h-full'>
          {children}
        </main>
      </div>
    </div>
  )
}
