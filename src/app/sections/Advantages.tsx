"use client";
import Image from "next/image";
import { CardItem, CardBody, CardContainer } from "@/components/ui/3d-card";
import viewing from "@/assets/view.png"
import issuing from "@/assets/issue.png"
import recieving from "@/assets/6.gif"
import Link from "next/link";

export const Advantages = () => {
    return (
        <section className="bg-gradient-to-b from-gray-700 to-gray-950 overflow-x-clip py-4">
            <div className="container">
                <div className="text-white text-center tracking-tight">
                    <h1 className="text-6xl font-semibold">
                        Advantages
                    </h1>
                </div>
                <div className="grid md:grid-cols-3">
                    <CardContainer className="inter-var w-3/5">
                        <CardBody className="bg-white/90 relative group/card  dark:hover:shadow-2xl  border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem translateZ="100" className="mt-10 w-full flex items-center justify-center">
                            <Image
                                src={viewing}
                                height={125}
                                className="object-cover rounded-xl bg-white group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                            </CardItem>
                            <div className="flex justify-between items-center mt-10">
                                <CardItem
                                translateZ="50"
                                className="w-full text-center"
                                >
                                    <h1 className="text-xl font-bold text-black/80">Viewing and Verifying</h1>
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                    <CardContainer className="inter-var w-3/5">
                        <CardBody className="bg-white/90 relative group/card  dark:hover:shadow-2xl  border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem translateZ="100" className="mt-10 w-full flex items-center justify-center">
                            <Image
                                src={issuing}
                                height={125}
                                className="object-cover rounded-xl group-hover/card:shadow-3xl"
                                alt="thumbnail"
                            />
                            </CardItem>
                            <div className="flex justify-between items-center mt-10">
                                <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-black/85 w-full text-center"
                                >
                                Issuing
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                    <CardContainer className="inter-var w-3/5">
                        <CardBody className="bg-white/90 relative group/card  dark:hover:shadow-2xl  border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem translateZ="100" className="mt-10 w-full flex items-center justify-center">
                                <Image
                                    src={recieving}
                                    height={125}
                                    className="object-cover bg-white rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-10">
                                <CardItem
                                translateZ="50"
                                className="text-xl w-full text-center font-bold text-black/85"
                                >
                                Receiving and Sharing
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
            </div>
        </section>
    );
}