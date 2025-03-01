"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const Photo = () => {
    return (
        <div className="flex justify-center items-center w-full h-full overflow-hidden relative">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" }
                }}
                className="relative"
            >
                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2, duration: 0.4, ease: "easeIn" }
                    }}
                    className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten rounded-full overflow-hidden"
                >
                    <Image 
                        src="/profile1.png" 
                        priority 
                        quality={100} 
                        width={498} 
                        height={498}
                        alt="Profile Picture"
                        className="object-cover"
                    />
                </motion.div>

                {/* Animated Circular SVG */}
                <motion.svg
                    className="absolute inset-0 w-full h-full"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253" cy="253" r="250"
                        stroke="#05b6e3"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "15 120 25 25" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360]
                        }}
                        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo;
