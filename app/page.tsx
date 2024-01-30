"use client"
import { register } from "@teamhanko/hanko-elements"
import { useEffect } from "react"


const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL
export default function Login(){
  useEffect(() => {
    register(hankoApi!).catch((error) => {
      console.log(error)
    })
  }, [])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-center mb-4">Have you some Street Magic ToDo ?</p>
      <div className="flex justify-center items-center">
        <hanko-auth />
      </div>
    </div>
  )
}