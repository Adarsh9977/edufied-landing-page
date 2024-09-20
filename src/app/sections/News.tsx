import Image from "next/image"
import skillsFuture from "@/assets/skillFuture.png"
import seedStar from "@/assets//seedStar-2.png";
import openCerts from "@/assets/openCerts.jpeg"

export const News = () => {
    return (
        <section className="mb-5">
            <div className="container">
                <div className="flex items-center justify-center py-5">
                    <h1 className="text-white text-center text-5xl font-bold tracking-tighter">News</h1>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <Image
                            src={skillsFuture}
                            alt="skills-future"
                            className="w-[300px] h-[80px] rounded-md"
                        />
                        <div className="flex flex-col items-center justify-center mt-5">
                            <p className="text-white text-center text-2xl font-semibold mt-1">1st Runner Up</p>
                            <p className="text-white text-center text-2xl font-semibold mt-1">Skillsfuture SG Hackathon</p>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={seedStar}
                            alt="skills-future"
                            className="w-[300px] h-[80px] rounded-md"
                        />
                        <div className="flex flex-col items-center justify-center mt-5">
                            <p className="text-white text-center text-2xl font-semibold mt-1">Top  8  Startups</p>
                            <p className="text-white text-center text-2xl font-semibold mt-1">(Singapore)</p>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={openCerts}
                            alt="skills-future"
                            className="w-[300px] h-[80px] rounded-md"
                        />
                        <div className="flex flex-col items-center justify-center mt-5">
                            <p className="text-white text-center text-2xl font-semibold mt-1">A GovTech Initiative</p>
                            <p className="text-white text-center text-2xl font-semibold mt-1">(Collaboration Partner)</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center py-2 mt-5">
                    <button className="bg-blue-700 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
                        <p className="text-white font-semibold tracking-tight">MORE NEWS</p>
                    </button>
                </div>
            </div>
        </section>
    );
}