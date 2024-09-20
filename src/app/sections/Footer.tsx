"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconExchange, IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react";
import Image from "next/image";

export const Footer = () => {
    
    const links = [
        {
            title: "Linkedin",
            icon: (
              <IconBrandLinkedin className="h-full w-full text-neutral-600" />
            ),
            href: "https://www.linkedin.com/company/edufied/",
        },
        {
            title: "Instagram",
            icon: (
              <IconBrandInstagram className="h-full w-full text-neutral-600" />
            ),
            href: "https://www.instagram.com/edufied/",
        },

        {
          title: "Facebook",
          icon: (
            <IconBrandFacebook className="h-full w-full text-neutral-600" />
          ),
          href: "https://www.facebook.com/edufied",
        },
     
        {
          title: "Twitter",
          icon: (
            <IconBrandX className="h-full w-full text-neutral-600" />
          ),
          href: "https://x.com/be_edufied",
        },
      ];

    return (
        <footer>
            <div className="container">
                <div className="flex items-center justify-between py-10">
                    <p className="text-sm text-white">@ 2022 Edufied</p>
                    <div className="">
                        <FloatingDock
                            items={links}
                            desktopClassName="bg-gray-800"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}