"use client";

import Image from "next/image";
import Recipient from "@/assets/recipient-data.png"
import cart from "@/assets/image-based-cart.png"
import template from "@/assets/template-based-cart.png"
import analytics from "@/assets/analytics.png"
import design from "@/assets/design-template.png"
import schedule from "@/assets/schedule-issuance.png"
import aadhar from "@/assets/aadhar.png"
import ocr from "@/assets/OCR-integration.png"
import payment from "@/assets/payment-gateway.png"
import { BackgroundGradient } from "@/components/ui/background-gradient";

export const Below = () => {
    return (
        <section className="w-full py-20 px-10">
            <div className="container">
                <div className="grid grid-cols-5 py-3 px-5 mb-10">
                    <div className="flex flex-col items-center justify-center w-4/5">
                        <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-zinc-900">
                            <Image
                            src={Recipient}
                            alt="recipient"
                            height={130}
                            width={130}
                            className="object-contain"
                            />
                            <p className="text-white text-sm text-center">Import Recipient Data</p>
                        </BackgroundGradient>
                    </div>

                    <div className="flex flex-col items-center justify-center w-4/5">
                        <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-zinc-900">
                            <Image
                            src={cart}
                            alt="recipient"
                            height={130}
                            width={130}
                            className="object-contain"
                            />
                            <p className="text-white text-sm text-center">Image based cart</p>
                        </BackgroundGradient>
                    </div>
                    <div className="flex flex-col items-center justify-center w-4/5">
                        <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-zinc-900">
                            <Image
                            src={template}
                            alt="recipient"
                            height={130}
                            width={130}
                            className="object-contain"
                            />
                            <p className="text-white text-sm text-center">Template-based cart</p>
                        </BackgroundGradient>
                    </div>
                    <div className="flex flex-col items-center justify-center w-4/5">
                        <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-zinc-900">
                            <Image
                            src={analytics}
                            alt="recipient"
                            height={130}
                            width={130}
                            className="object-contain"
                            />
                            <p className="text-white text-sm text-center">IAnalytics and Governance</p>
                        </BackgroundGradient>
                    </div>
                    <div className="flex flex-col items-center justify-center w-4/5">
                        <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-zinc-900">
                            <Image
                            src={Recipient}
                            alt="recipient"
                            height={130}
                            width={130}
                            className="object-contain"
                            />
                            <p className="text-white text-sm text-center">Import Recipient Data</p>
                        </BackgroundGradient>
                    </div>
                </div>
                <div className="grid grid-cols-5 py-3 px-5">
                    <div className="flex flex-col items-center justify-center w-4/5">
                        <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-zinc-900">
                            <Image
                            src={design}
                            alt="recipient"
                            height={130}
                            width={130}
                            className="object-contain"
                            />
                            <p className="text-white text-sm text-center">Design Template Layout</p>
                        </BackgroundGradient>
                    </div>

                    <div className="flex flex-col items-center justify-center w-4/5">
                        <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-zinc-900">
                            <Image
                            src={schedule}
                            alt="recipient"
                            height={130}
                            width={130}
                            className="object-contain"
                            />
                            <p className="text-white text-sm text-center">ISchedule Issuance</p>
                        </BackgroundGradient>
                    </div>
                    <div className="flex flex-col items-center justify-center w-4/5">
                        <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-zinc-900">
                            <Image
                            src={aadhar}
                            alt="recipient"
                            height={130}
                            width={130}
                            className="object-contain"
                            />
                            <p className="text-white text-sm text-center">Aadhaar Integration</p>
                        </BackgroundGradient>
                    </div>
                    <div className="flex flex-col items-center justify-center w-4/5">
                        <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-zinc-900">
                            <Image
                            src={ocr}
                            alt="recipient"
                            height={130}
                            width={130}
                            className="object-contain"
                            />
                            <p className="text-white text-sm text-center">OCR Integration</p>
                        </BackgroundGradient>
                    </div>
                    <div className="flex flex-col items-center justify-center w-4/5">
                        <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-zinc-900">
                            <Image
                            src={payment}
                            alt="recipient"
                            height={130}
                            width={130}
                            className="object-contain"
                            />
                            <p className="text-white text-sm text-center">Payment Gateway</p>
                        </BackgroundGradient>
                    </div>
                </div>
            </div>
        </section>
    );

}