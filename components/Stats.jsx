"use client"
import CountUp from "react-countup"

const stats = [
    { num: 2, text: "Publications", decimals: 0 },
    { num: 7.5, text: "IELTS Score", decimals: 1 },
    { num: 3.89, text: "CGPA", decimals: 2 },
    { num: 1.2, text: "Years of Experience", decimals: 1 },
]

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto text-center">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none ">
                    {stats.map((item, index) => (
                        <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                            <CountUp 
                                end={item.num} 
                                decimals={item.decimals} // Ensures float values
                                duration={2.5} 
                                delay={0.5} 
                                decimal="."
                                className="text-4xl xl:text-6xl font-extrabold text-white"
                            />
                            <span className={`${item.text.length<15? "max-w-[100px]":"max-w-[100px]"} leading-snug text-white/80`}>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats;
