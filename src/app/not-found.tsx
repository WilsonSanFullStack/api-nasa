'use client'
import Image from "next/image";
export default function NotFound() {
  return (
    <div className=" flex flex-col justify-center items-center m-auto h-screen">
     <h1 className="uppercase font-bold text-4xl m-4 text-red-500">not found</h1>
     <div className="rounded-full bg-red-400 m-4 p-20">
     <img src="/imagen.png" alt="notFound.png" width={500} height={500} />
     </div>
    </div>
  );
}