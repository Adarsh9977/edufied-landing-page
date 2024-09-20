"use client";
import { Vortex } from "@/components/ui/vortex";

export const Contact = () =>{
    return (
        <section>
                <div className=" w-full rounded-md  h-[30rem] overflow-hidden">
                    <Vortex
                        backgroundColor="black"
                        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
                    >
                        <p className="text-white text-lg font-bold text-center">
                            At EDUFIED, we believe that there is a better way to verify certifications and credentials. A more secured, less invasive and most effective way for our users.
                        </p>
                        <p className="text-white text-lg mt-6 text-center">
                            It is our mission to help protect the dignity of our users and reduce business costs in a hassle free manner.
                        </p >
                        <p className="text-white text-lg mt-6 text-center">
                        We are excited that EDUFIED is started with this one true vision.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                        <button className="px-4 py-2 hover:bg-blue-500 font-bold bg-blue-700 transition duration-200 rounded-md text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                            CONTACT US!
                        </button>
                        </div>
                    </Vortex>
                </div>
        </section>
    );
}