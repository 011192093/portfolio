
"use client"
import { motion } from "framer-motion"
import React, { useState ,useEffect} from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderButtons from "@/components/WorkSliderButtons"
const projects = [
  {
    num: '01',
    title: 'Mentors Learning',
    description: "Mentors Learning is a dynamic platform designed to bridge the gap between aspiring learners and experienced mentors. Whether you are looking to gain industry insights, enhance your technical skills, or receive guidance on academic research, this initiative fosters a collaborative learning environment. It is a ELMS with a test platform",
    stack: [{ name: 'react' }, { name: 'next.js' }, { name: 'laravel' }],
    image: "/images/mentors_learning.png",
    live: "https://www.mentorslearning.com/",
    github: "",

  },
  {
    num: '02',
    title: 'Mentors Information Website',
    description: "It's an information website for the students who are eager to learn from online and offline instructors, or want to study abroad or participate in International tests",
    stack: [{ name: 'next.js' }, { name: 'php' }],
    image: "/images/mentors_info.png",
    live: "https://mentors.com.bd/",
    github: "",

  },
  {
    num: '03',
    title: 'Decentralized Vehicle Information System based on Block chain',
    description: 'The proposed platform leverages blockchain technology to establish a decentralized vehicle record.storage system. This system facilitates the secure storage and retrieval of comprehensive vehicle.data, including mileage, service records, accident histories, and more. Notably, the platform benefits various stakeholders, offering car broker houses and sellers access to a substantial volume of data at an affordable cost, eliminating dependence on third-party sources. Servicing and insurance companies actively contribute updated information to the blockchain, gaining publicity and profit in return. The platform aims to streamline and enhance the vehicle dealing process, ensuring trustworthiness, ease of use, and increased profitability. Ongoing efforts include the implementation of additional features to further enrich the system.',
    stack: [{ name: 'react' }, { name: 'solidity' }, { name: 'javascript' }, { name: 'postgre sql' },, { name: 'rest api' },],
    image: "/images/carstory1.png",
    live: "",
    github: "",

  }
  ,
  
  {
    num: '04',
    title: 'AgroTech e-Market',
    description: 'This is an e-commerce website built for the ease of our farmers and help them make maximum profit by eliminating the middleman.Here farmer can start a bid on the product and user places their intended amount, and after a certain time the winner takes the produce.The bid can happen when produces are still uncut.User can place pre-order as well.Thus farmer knows the demand and customers gets their organic product in lowest rate and without the fear of consuming harmful pesticides',
    stack: [{ name: 'PHP' }, { name: 'MySQL' }, { name: 'JavaScript' } , { name:'HTML'}, , { name:'CSS'}, , { name:'Bootstrap.'}],
    image: "/images/agri.jpg",
    live: "",
    github: "https://github.com/011192093/AgroTech-e-Market",

  },
  {
    num: '05',
    title: 'GoTravel',
    description: 'This is a travel agency website that allows users to book hotels, restaurants, and transportation all under the same site, which make travelling much easier',
    stack: [{ name: 'PHP' }, { name: 'MySQL' }, { name: 'JavaScript' } , { name:'HTML'}, , { name:'CSS'}, , { name:'Bootstrap.'}],
    image: "/images/travel.jpg",
    live: "",
    github: "https://github.com/011192093/Go_Travel",

  },
  {
    num: '06',
    title: 'Train Reservation System',
    description: 'This is a website where a user can book train tickets and the admin can add the train’s name,departure time, price, etc.The purchasing process of ticket to maintaining log of trains of both side can be done with this site',
    stack: [{ name: 'Django' }, { name: 'Python' }, { name: 'JavaScript' } , { name:'HTML'}, , { name:'CSS'},],
    live: "",
    github: "https://github.com/011192093/Train_Reservation_System",
    image: "/images/train.jpg",
  },
  {
    num: '07',
    title: 'Smart Farm',
    description: 'It is a project built for improving the farms of our country. Features implemented here which will provide the farm owners hassle-free experience and reduce their labor exponentially.',
    stack: [{ name: 'Arduino' }, ],
    live: "",
    github: "https://github.com/011192093/smart-farm",
    image: "/images/farm.png",

  },
  {
    num: '08',
    title: 'Brick Breaker',
    description: 'This is a classic break braking game where a ball bounces off a paddle and breaks the brick it touches, if the ball falls in floor, the game is over.',
    stack: [{ name: 'Java' }, { name: 'JavaFx' }, { name: 'GUI' }],
    live: "",
    github: "https://github.com/011192093/brickbreaker",
    image: "/images/brick.png",

  }
]

const Projects = () => {
  const [project, setProject] = useState(projects[0])
  const [isClient, setIsClient] = useState(false);

useEffect(() => {
  setIsClient(true); // Set to true once mounted on the client
}, []);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]); // Correct way to update state
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
    }}
      className="flex flex-col items-center py-12 xl:px-0 min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
              {project.live && (
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>Live Project</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>Github Repository</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return (<SwiperSlide key={index} className="w-full">
                  <div className="h-[468px] relative group flex justify-center items-center bg-transparent">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-transparent z-10"></div>
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover" alt={project.title}></Image>
                    </div>
                  </div>
                </SwiperSlide>

                );

              })}
              <WorkSliderButtons containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
