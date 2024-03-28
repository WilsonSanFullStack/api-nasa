import Link from "next/link";
import { VscGithub } from "react-icons/vsc";
import { BiLogoGmail } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { IoReader  } from "react-icons/io5";
import Image from "next/image";

export default function Pie() {
  return (
    <div className="px-10 bg-slate-500 fixed bottom-0 h-20 min-w-full font-bold flex justify-center items-center">
      <Image
        src="/logo circulo limpio.png"
        alt="logo"
        width={120}
        height={100}
        className="my-0.5"
      />
      <div>
        <div className="flex">
          <h1 className="mx-1">Creado Por:</h1>
          <h1>Wilson Sanchez</h1>
        </div>
        <div className="flex justify-center">
            <Link href="https://github.com/WilsonSanFullStack" target="_blank" rel="noopener noreferrer">
              <VscGithub className="text-3xl mx-2 cursor-pointer" />
            </Link>
            <Link
              href="mailto:harveysanch@gmail.com?subject=Interesado%20en%20sus%20sevicios"
              target="_blank" rel="noopener noreferrer"
            >
              <BiLogoGmail className="text-3xl mx-2 cursor-pointer" />
            </Link>

            <Link href="https://wa.me/+573156226982" target="_blank" rel="noopener noreferrer">
              <BsWhatsapp className="text-3xl mx-2 cursor-pointer" />
            </Link>

            <Link href="https://www.linkedin.com/in/wilsonsan/" target="_blank" rel="noopener noreferrer">
              <CiLinkedin className="text-3xl mx-2 cursor-pointer" />
            </Link>

            <Link
              href="https://wilsonsanchez.vercel.app/"
              target="_blank"
            >
              <IoReader  className="text-3xl mx-2 cursor-pointer" />
            </Link>
          </div>
      </div>
    </div>
  );
}
