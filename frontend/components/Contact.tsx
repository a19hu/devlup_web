import React from 'react'
import {Textarea} from "@nextui-org/react";

export default function Contact() {
  return (
    <div className='flex justify-center text-4xl mb-20 font-black'>

    <Textarea
      isRequired
      label="Description"
      labelPlacement="outside"
      placeholder="Enter your description"
      className="max-w-xs"
    />
    </div>
  )
}
