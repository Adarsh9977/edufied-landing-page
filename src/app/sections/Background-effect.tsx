import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Cover } from "@/components/ui/cover";
 
export function BackgroundBeamsWithCollisionDemo() {
  return (
    <div className="container bg-transparent z-1 overflow-hidden">
    <BackgroundBeamsWithCollision>
        <div className="text-2xl z-10 relative md:text-4xl lg:text-7xl font-bold text-center text-white bg-transparent font-sans">
            <h2 className="text-8xl">
              <Cover className="text-white/90">EDUFIED</Cover>
            </h2>
            <div className=" mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="max-w-[848px] text-4xl bg-clip-text text-transparent bg-gradient-to-r py-4 from-purple-600 via-violet-400 to-pink-400 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                  <span className="">Tamper-proof Document Issuance & Verification System for Issuing Authorities to issue Verifiable Documents to Recipients, allowing them to store & share them securely from their Digital Wallet.</span>
              </div>
            </div>
        </div>
    </BackgroundBeamsWithCollision>
    </div>
  );
}