import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SubAccount = () => {
  return (
    <div className='min-h-screen max-w-7xl mx-auto p-7'>
      <Button variant='ghost' className='hover:bg-transparent'>
        <Link href='/account' className='flex flex-row items-center gap-1'>
          <ChevronLeft className='w-6 h-6' />
          <span className='text-2xl'>BBack to Profile</span>
        </Link>
      </Button>

      <div className='flex flex-col p-5 space-y-3 mt-5'>
        <span className='text-2xl'>Standard Offer:</span>
        <span className='text-primary/80'>Unlimited access to our question bank from a single device—your go-to tool for exam preparation.</span>
      </div>

      <div className='flex flex-row gap-4 p-5'>
        <div className="bg-white shadow-lg rounded-3xl border-4 border-[#EECE84] overflow-hidden w-[320px]">
          <div className="p-6">
            <div className='justify-between flex'>
              <div className='flex flex-col'>
                <span className='text-sm'>Subscription</span>
                <span className='text-xl'>€10/month</span>
              </div>
              <div>
              <Badge className='rounded-full text-xs bg-[#EECE84] hover:bg-[#EECE84] text-black dark:text-white'>Saving €180</Badge>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-lg font-bold text-gray-500">Billed for 12 months</span>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-3xl overflow-hidden w-[320px]">
          <div className="p-6">
            <div className='justify-between flex'>
              <div className='flex flex-col'>
                <span className='text-sm'>Subscription</span>
                <span className='text-xl'>€15/month</span>
              </div>
              <div>
              <Badge className='rounded-full text-xs bg-[#EECE84] hover:bg-[#EECE84] text-black dark:text-white'>Saving €60</Badge>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-lg font-bold text-gray-500">Billed for 12 months</span>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-3xl overflow-hidden w-[320px]">
          <div className="p-6">
            <div className='justify-between flex'>
              <div className='flex flex-col'>
                <span className='text-sm'>Subscription</span>
                <span className='text-xl'>€20/month</span>
              </div>
              <div>
              <Badge className='rounded-full text-xs bg-[#EECE84] hover:bg-[#EECE84] text-black dark:text-white'>Saving €15</Badge>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-lg font-bold text-gray-500">Billed for 12 months</span>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-3xl overflow-hidden w-[320px]">
          <div className="p-6">
            <div className='justify-between flex'>
              <div className='flex flex-col'>
                <span className='text-sm'>Subscription</span>
                <span className='text-xl'>€25/month</span>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-lg font-bold text-gray-500">Billed for 12 months</span>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col p-5 space-y-3'>
        <span className='text-2xl'>Premium Offer:</span>
        <span className='text-primary/80'>Full access to our question bank, detailed courses, AI support, and an integrated aviation dictionary for a comprehensive learning experience.</span>
      </div>

      <div className='flex flex-row gap-4 p-5'>
        <div className="bg-white shadow-lg rounded-3xl overflow-hidden w-[320px]">
          <div className="p-6">
            <div className='justify-between flex'>
              <div className='flex flex-col'>
                <span className='text-sm'>Subscription</span>
                <span className='text-xl'>€30/month</span>
              </div>
              <div>
              <Badge className='rounded-full text-xs bg-[#EECE84] hover:bg-[#EECE84] text-black dark:text-white'>Saving €180</Badge>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-lg font-bold text-gray-500">Billed for 12 months</span>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-3xl overflow-hidden w-[320px]">
          <div className="p-6">
            <div className='justify-between flex'>
              <div className='flex flex-col'>
                <span className='text-sm'>Subscription</span>
                <span className='text-xl'>€35/month</span>
              </div>
              <div>
              <Badge className='rounded-full text-xs bg-[#EECE84] hover:bg-[#EECE84] text-black dark:text-white'>Saving €60</Badge>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-lg font-bold text-gray-500">Billed for 12 months</span>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-3xl overflow-hidden w-[320px]">
          <div className="p-6">
            <div className='justify-between flex'>
              <div className='flex flex-col'>
                <span className='text-sm'>Subscription</span>
                <span className='text-xl'>€40/month</span>
              </div>
              <div>
              <Badge className='rounded-full text-xs bg-[#EECE84] hover:bg-[#EECE84] text-black dark:text-white'>Saving €15</Badge>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-lg font-bold text-gray-500">Billed for 12 months</span>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-3xl overflow-hidden w-[320px]">
          <div className="p-6">
            <div className='justify-between flex'>
              <div className='flex flex-col'>
                <span className='text-sm'>Subscription</span>
                <span className='text-xl'>€45/month</span>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-lg font-bold text-gray-500">Billed for 12 months</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubAccount
