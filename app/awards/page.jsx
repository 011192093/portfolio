"use client"
import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

const awards = [
  {
    num: "01",
    title: "International Blockchain Olympiad 2023",
    shortDescription: "Winning the Award of Distinction at the International Blockchain Olympiad 2023 was an incredible and surreal experience...",
    fullDescription: "Winning the Award of Distinction at the International Blockchain Olympiad 2023 was an incredible and surreal experience. Competing on a global stage alongside some of the brightest minds in blockchain and innovation was both challenging and exhilarating. The journey—from research and development to presenting our solution—was filled with intense learning, collaboration, and perseverance.",
    href: "https://2023.ibcol.org/",
    price: "Award of Distinction"
  },
  {
    num: "02",
    title: "National Blockchain Olympiad Bangladesh 2023",
    shortDescription: "From ideation to execution, every step required deep research, problem-solving, and technical expertise...",
    fullDescription: "From ideation to execution, every step required deep research, problem-solving, and technical expertise. It was a thrilling experience to present our project in front of industry experts, academics, and blockchain enthusiasts. Making it to the Top 10 among so many brilliant teams reaffirmed my confidence in my ability to tackle real-world problems with blockchain-based solutions.",
    href: "https://bcolbd.org/",
    price: "Final 10"
  },
  {
    num: "03",
    title: "Inter University Project Showcase",
    shortDescription: "Participating in the Inter-University Project Showcase with our project AgroTech was a remarkable experience...",
    fullDescription: "Participating in the Inter-University Project Showcase with our project AgroTech was a remarkable experience. AgroTech aimed to revolutionize the agricultural supply chain by creating a transparent, decentralized bidding platform where farmers could directly sell their produce to the highest bidder—eliminating middlemen and ensuring fair pricing. The project was driven by the idea of empowering farmers with a 'farm-to-mouth' model, maximizing their profits while providing consumers with fresh, quality produce at competitive prices. Through rigorous research and development, we designed a secure and efficient bidding system, leveraging technology to bridge the gap between farmers and buyers.",
    href: "",
    price: "Runners Up"
  },
]

const Awards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>

      <div className='container mx-auto'>
        <h3 className='text-4xl font-bold flex  my-12 text-accent '>
          My Awards & Recognitions
        </h3>
        <motion.div initial={{ opacity: 0 }} animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center'
        >
          {awards.map((award, index) => {
            return (
              <div key={index} className='flex-1 flex flex-col gap-6 group'>
                <div className='w-full flex justify-between items-center '>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{award.num}</div>
                  {award.href && (
                    <Link href={award.href} target="_blank" rel="noopener noreferrer"
                      className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                      <BsArrowDownRight className='text-primary text-3xl' />
                    </Link>
                  )}
                </div>
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{award.title}</h2>
                <p className="text-accent text-lg">{award.price}</p>
                <span>
                  <p className='text-white/60'>
                    {expandedIndex === index ? award.fullDescription : award.shortDescription}
                  </p>
                  <button
                    onClick={() => toggleReadMore(index)}
                    className="text-accent underline cursor-pointer transition-all duration-300 hover:text-white"
                  >

                    {expandedIndex === index ? "Read Less" : "Read More"}
                  </button>
                </span>
                <div className='border-b border-white/20 w-full'></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Awards;
