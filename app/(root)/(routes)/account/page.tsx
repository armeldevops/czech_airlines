'use client'

import { Button } from '@/components/ui/button';
import { ArrowBigUpDash, Edit, LogOut, Trash } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { useForm } from "react-hook-form";
import Link from 'next/link';

const Page = () => {
  const form = useForm({
    defaultValues: {
      fullName: "Manombosoa Armel",
      nickName: "ArmelDev",
      email: "armelmanombosoa@gmail.com",
      phoneNumber: "123-456-7890",
      country: "Madagascar",
      language: "French",
    },
  });

  const onSubmit = (data: unknown) => {
    console.log("Form data submitted:", data);
  };

  return (
    <div className="min-h-screen max-w-6xl mx-auto p-7">
      <div className="space-y-8 p-6">
        {/* User Info Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/Account/profils.png"
              alt="Profils"
              height={80}
              width={80}
              className="w-24 h-24 rounded-full overflow-hidden border-1 border-gray-300"
            />
            <div>
              <span className="block font-medium text-lg">RAZAFIMAHEFA Manombosoa Armel</span>
              <span className="block text-gray-500 text-sm">armelmanombosoa@gmail.com</span>
            </div>
          </div>
          <Button className='rounded-full bg-[#EECE84] hover:bg-[#EECE84] text-black'>
            <LogOut size={20} />
            <span>Sign out</span>
          </Button>
        </div>

        {/* Upgrade Section */}
        <div className="bg-[#EECE84] rounded-3xl h-28 w-full relative overflow-hidden">
          <Image 
            alt="Moon"
            src="/Manuals/Nuage.png"
            width={150}
            height={150}
            className="absolute top-14 left-96 ml-40 opacity-80"
          />
          <Image 
            alt="Cloud"
            src="/Manuals/Moon.png"
            width={350}
            height={350}
            className="absolute -top-10 left-96 ml-20 opacity-80"
          />
          <Image 
            alt="Moon"
            src="/Manuals/Nuage.png"
            width={150}
            height={150}
            className="absolute -top-10 -left-16 opacity-80"
          />
          <div className='flex flex-col p-6 ml-16'>
            <span className=''>Subcription</span>
            <span className='text-2xl'>Free limited</span>
          </div>
          <Link href='/account/subscribe'>
            <Button className="absolute bottom-10 right-10 rounded-full flex items-center bg-white text-black hover:bg-white/80">
              <ArrowBigUpDash />
              <span>Upgrade now</span>
            </Button>
          </Link>
        </div>

        {/* Fields Section */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 w-full">
            {/* Group 1: Full Name and Nick Name */}
            <div className="flex flex-row gap-8">
              <FormField
                name="fullName"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className='text-xl'>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Full Name" {...field} className="rounded-full h-16 bg-white/90" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="nickName"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className='text-xl'>Nick Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Nick Name" {...field} className="rounded-full h-16 bg-white/90" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Group 2: Email and Phone Number */}
            <div className="flex flex-row gap-8">
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className='text-xl'>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} className="rounded-full h-16 bg-white/90" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="phoneNumber"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className='text-xl'>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Phone Number" {...field} className="rounded-full h-16 bg-white/90" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Group 3: Country and Language */}
            <div className="flex flex-row gap-8">
              <FormField
                name="country"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className='text-xl'>Country</FormLabel>
                    <FormControl>
                      <Input placeholder="Country" {...field} className="rounded-full h-16 bg-white/90" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="language"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className='text-xl'>Language</FormLabel>
                    <FormControl>
                      <Input placeholder="Language" {...field} className="rounded-full h-16 bg-white/90" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </div>
      {/* Delete Account Button */}
      <div className="flex justify-end gap-2 p-6">
        <Button type="submit" className="rounded-full bg-[#EECE84] hover:[#EECE84] text-black">
          <Edit />
          Save Changes
        </Button>
        <Button className="rounded-full bg-white text-red-600 hover:bg-white/80 hover:text-red-600">
          <Trash size={20} />
          <span>Delete Account</span>
        </Button>
      </div>
    </div>
  );
};

export default Page;