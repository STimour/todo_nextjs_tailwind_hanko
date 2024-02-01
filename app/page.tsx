"use client"
import dynamic from 'next/dynamic';
import HankoAuth from './Components/HankoAuth';

export default function Home(){
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-center mb-4">Have you some Street Magic ToDo ?</p>
      <div className="flex justify-center items-center">
        <HankoAuth />
      </div>
    </div>
  )
}