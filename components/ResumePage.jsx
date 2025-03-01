"use client"

import { FaPython, FaJava, FaPhp, FaHtml5, FaCss3, FaReact, FaBootstrap } from "react-icons/fa";
import { SiC, SiCplusplus, SiJavascript, SiLatex, SiNextdotjs } from "react-icons/si";
import { TbApi } from "react-icons/tb"; 
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'
const about = {
    title: "About me",
    description: "My fascination with computer science began unexpectedly when I pursued my bachelor's in CSE, initially just following the crowd. Little did I know it would ignite a passion within me. I soon realized the immense satisfaction of building something from scratch, solving problems, and pushing my limits. Programming became more than just a skill—it was a challenge that kept me engaged, even in moments of frustration. Every obstacle I overcame fueled my determination, turning a mere curiosity into a deep commitment to learning and innovation.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Farhee Aalina Ahmad",
        },
        {
            fieldName: "Experience",
            fieldValue: "1.2 years",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Bangladeshi",
        },
        {
            fieldName: "email",
            fieldValue: "ahmadaalina3@gmail.com",
        },
        {
            fieldName: "freelance",
            fieldValue: "available",
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Bangla",
        },
    ]
}

const experience = {
    icon: '',
    title: 'My Experience',
    description: " ",
    items: [
        {
            company: "Amirus",
            position: "Freelance web developer",
            duration: "2025 Jan- present"
        },
        {
            company: "Mentors' Learning",
            position: "Junior Engineer",
            duration: "2024 Jan- 2024 Dec"
        },
        {
            company: "United International University",
            position: "Undergraduate Teaching Assistant",
            duration: "2022 Feb- 2023 Apr"
        },

        {
            company: "IQAC, United International University",
            position: "Research Associate",
            duration: "2022 Sep- 2022 Oct"
        },
    ]
}

const education = {
    icon: '',
    title: 'My Education',
    description: " ",
    items: [
        {
            institution: "United International University, Dhaka, Bangladesh",
            degree: "Undergraduate",
            duration: "2019-2023"
        },
        {
            institution: "Birsreshtho Munshi Abdur Rouf, Dhaka, Bangladesh",
            degree: "College",
            duration: "2016-2018"
        },
        {
            institution: "Mohammadpur Preparatory School & College, Dhaka, Bangladesh",
            degree: "School",
            duration: "2006-2016"
        },
    ]
}
const skills = {
    icon: '',
    title: 'My Skills',
    description: "Some description here...",
    skillList: [
        { name: "Python", icon: <FaPython /> },
        { name: "C", icon: <SiC /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Java", icon: <FaJava /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "LaTeX", icon: <SiLatex /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3 /> },
        { name: "REST API", icon: <TbApi /> }, 
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
    ]
}
const ResumePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6" >
                        <TabsTrigger value="experience" style={{ borderRadius: "10px" }} >Experience</TabsTrigger>
                        <TabsTrigger value="education" style={{ borderRadius: "10px" }} >Education</TabsTrigger>
                        <TabsTrigger value="skills" style={{ borderRadius: "10px" }} >Skills</TabsTrigger>
                        <TabsTrigger value="about" style={{ borderRadius: "10px" }} >About me</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[90vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold '>
                                    {experience.title}
                                </h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 '>
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className='bg-[#232329] h-[184px] rounded-xl py-6 px-10
                                                flex flex-col items-left justify-center lg:item-start gap-1'>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className='flex flex-col gap-[100px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {education.title}
                                </h3>
                                {/* <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 '>
                                    {education.description}
                                </p> */}
                                <ScrollArea className="h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className='bg-[#232329] h-[234px] rounded-xl py-6 px-10
                                                flex flex-col items-left justify-center lg:item-start gap-1 '>
                                                    <span className='text-accent'>{item.degree}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.institution}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        <span className='w-[6px] h-[8px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.duration}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className='flex flex-col gap-[30px] '>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                  
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <TooltipProvider key={index} delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-[110px] bg-[#232329] rounded-xl flex items-center justify-center group'>
                                                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className='caplitalize'>{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>

                                        );
                                    })
                                    }
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 '>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2  gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item, index) => {
                                        return (<li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                            <span className='text-white/60'>{item.fieldName}</span>
                                            <span className='text-xl'>{item.fieldValue}</span>
                                        </li>

                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default ResumePage;

