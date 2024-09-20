"use client";
import Image from "next/image";
import { CardItem, CardBody, CardContainer } from "@/components/ui/3d-card";
import school from "@/assets/school.png"
import organization from "@/assets/org-2.svg"
import Individuals from "@/assets/job-main.png"
import Link from "next/link";

export const StakeHolders = () => {
    return (
        <section className="overflow-hidden bg-gray-800 py-4">
            <div className="container">
                <div className="text-white text-center tracking-tight py-4">
                    <h1 className="text-6xl font-semibold">
                        Stakeholders
                    </h1>
                </div>
                <div className="grid md:grid-cols-3">
                    <CardContainer className="w-3/5 inter-var ">
                        <CardBody className="bg-white/90 relative group/card  dark:hover:shadow-2xl  border-black/[0.1] sm:w-[30rem] h-auto rounded-xl py-6 border">
                            <CardItem
                            translateZ="50"
                            className="w-full text-center"
                            >
                                <h1 className="text-xl font-bold text-black/80">Certificate Issuers</h1>
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-10 flex justify-center items-center">
                            <Image
                                src={school}
                                height={125}
                                className="object-cover rounded-xl bg-white group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                            </CardItem>
                            <div className="flex justify-center items-center mt-10">
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 text-center max-w-44 rounded-xl text-white bg-black hover:bg-black/85 text-sm font-bold"
                            >
                            CONTACT US NOW !
                            </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                    <CardContainer className="inter-var w-3/5">
                        <CardBody className="bg-white/90 relative group/card  dark:hover:shadow-2xl  border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-black/80 w-full text-center"
                            >
                            Individuals
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-10 flex items-center justify-center">
                            <Image
                                src={Individuals}
                                height={125}
                                className="object-cover rounded-xl group-hover/card:shadow-3xl"
                                alt="thumbnail"
                            />
                            </CardItem>
                            <div className="flex justify-center items-center mt-10">
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl max-w-44 text-center uppercase  text-white bg-black hover:bg-black/85 text-sm font-bold"
                            >
                                Watch video !
                            </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                    <CardContainer className="inter-var w-3/5">
                        <CardBody className="bg-white/90 relative group/card  dark:hover:shadow-2xl  border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                            translateZ="50"
                            className="text-xl w-full text-center font-bold text-black/85"
                            >
                            Organization
                            </CardItem>
                            <CardItem translateZ="100" className="mt-10 w-full flex items-center justify-center">
                                <Image
                                    src={organization}
                                    height={125}
                                    className="object-cover bg-white rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-center items-center mt-10">
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 max-w-44 text-center rounded-xl uppercase  text-white bg-black hover:bg-black/85 text-sm font-bold"
                            >
                                watch video !
                            </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
            </div>
        </section>
    );
}