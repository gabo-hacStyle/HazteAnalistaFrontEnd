"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarLessonsProps {
  numParam: number;
  modulo: number | undefined;
}

const NavbarLessons = ({ numParam, modulo }: NavbarLessonsProps) => {


  return (
    <nav
      className={`fixed bottom-0 left-0
        md:sticky md:bottom-0 md:left-0  
      md:top-0  h-12 bg-primary   flex items-center justify-between w-full
     md:px-4 px-2 py-2 
    `}
    >
      {numParam === 1 ? null : (
        <Link href={`/lessons/${numParam - 1}`} className="flex md:gap-3 gap-1 items-center">
           <Image
          src={'/icons/lessons/Anterior.png'}
          alt="Anterior lección"
          width={20}
          height={20}
        />

          Anterior
       
        
        </Link>
      )}

      <h1 className="text-lg md:text-xl">
        Modulo: {modulo} | Leccion: {numParam}
      </h1>
      <Link href={`/lessons/${numParam + 1}`} className="flex md:gap-3 gap-1 items-center">Siguiente
        <Image
            src={'/icons/lessons/Siguiente.png'}
            alt="Siguiente lección"
            width={20}
            height={20}
          />


      </Link>
    </nav>
  );
};

export default NavbarLessons;
