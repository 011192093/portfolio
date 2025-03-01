"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
const publications = [
  {
    id: 1,
    title: "Car-Story: A Decentralized Vehicle Information Storage System",
    conference: "TENSYMP 2024",
    description:
      "Worldwide, the market for reconditioned cars suffers due to an inconclusive and forged record storage system. Most of the vehicle information systems fail to prevent information manipulation as the data authentication system is absent or flawed. Fabrication of information is being committed without trace in reconditioned automobiles. Our proposed decentralized, blockchain-based vehicle information system that we named Car-Story can solve this problem. Car-Story is a digitally distributed, decentralized, public ledger that exists across a network and uses cryptography to store data. Therefore, the vehicle handling process will become secure, trusted, and less timeconsuming, and inadvertent issues can be tracked swiftly and conveniently. In this paper, we use Ethereum blockchain platform for implementing decentralized and immutable vehicle information system that can store all necessary vehicle related information including manufacturing history, accident reports, servicing information, etc. Finally, we study performance of the system by measuring query latency and transaction latency while the number of peer nodes are varied from two to six. Average resource utilization of the system has also been studied.",
    fullDescription:
      "Worldwide, the market for reconditioned cars suffers due to an inconclusive and forged record storage system. Most of the vehicle information systems fail to prevent information manipulation as the data authentication system is absent or flawed. Fabrication of information is being committed without trace in reconditioned automobiles. Our proposed decentralized, blockchain-based vehicle information system that we named Car-Story can solve this problem. Car-Story is a digitally distributed, decentralized, public ledger that exists across a network and uses cryptography to store data. Therefore, the vehicle handling process will become secure, trusted, and less time-consuming, and inadvertent issues can be tracked swiftly and conveniently. In this paper, we use Ethereum blockchain platform for implementing decentralized and immutable vehicle information system that can store all necessary vehicle related information including manufacturing history, accident reports, servicing information, etc. Finally, we study performance of the system by measuring query latency and transaction latency while the number of peer nodes are varied from two to six. Average resource utilization of the system has also been studied.",
    image: "/images/car.jpg",
    stars: 5,
    href: "https://ieeexplore.ieee.org/document/10752115"
  },
  {
    id: 2,
    title: "e-Waste Recycling for Sustainability and Commerce",
    conference: "ICCIT 2022",
    fullDescription:
      "We live in a Tech-Savvy world. Last decade was dedicated to the flourishing of electronics industries throughout the world as the largest and fastest growing manufacturing industry. The prosperity became a drive to socio-economic and mechanical development to a more prominent degree and the tech-revolution introduced a surplus of electronic waste. Without proper and effective e-waste management system, the revolution of technology will doom the world to grave. This paper helps to understand the techniques which will influence the existing e-waste management system to obtain better results by a model which can grade and label e-waste. This paper also discusses about the factors to influence and navigate the system in such a way that it highlights the initial problems for generating e-waste and highlights the path of turning the economy into a circular economy, where e-waste will not purposefully be produced and offers modern takes on commerce and sustainability and their balance, in terms of e-waste management workflow and model.",

    description:
      "We live in a Tech-Savvy world. Last decade was dedicated to the flourishing of electronics industries throughout the world as the largest and fastest growing manufacturing industry. The prosperity became a drive to socio-economic and mechanical development to a more prominent degree and the tech-revolution introduced a surplus of electronic waste. Without proper and effective e-waste management system, the revolution of technology will doom the world to grave.This paper helps to understand the techniques which will influence the existing e-waste management system to obtain better results by a model which can grade and label e-waste. This paper also discusses about the factors to influence and navigate the system in such a way that it highlights the initial problems for generating e-waste and highlights the path of turning the economy into a circular economy, where e-waste will not purposefully be produced and offers modern takes on commerce and sustainability and their balance, in terms of e-waste management workflow and model.",
    image: "/images/e-waste.jpg",
    stars: 5,
    href: "https://ieeexplore.ieee.org/document/10054753"
  },
  {
    id: 3,
    title: "LinguoScore: Automated PTE Speaking Assessment",
    conference: "work on progress",
    fullDescription:
      "The Pearson Test of English (PTE) Speaking section evaluates a candidate’s fluency, pronunciation, and content delivery. However, manual assessment can be subjective and time-consuming. This research explores an automated evaluation system for the PTE Speaking test using Natural Language Processing (NLP) and Transformer-based models. By leveraging state-of-the-art speech-to-text models, we transcribe spoken responses into text while preserving linguistic nuances. Further, we employ pre-trained Transformer architectures (e.g., BERT, RoBERTa, or T5) to assess fluency, coherence, and grammatical accuracy. We also incorporate prosodic and phonetic analysis to evaluate pronunciation and stress patterns. The system is trained on annotated PTE speaking samples and fine-tuned for fairness, accuracy, and reliability. Experimental results demonstrate a high correlation between our model’s scoring and human evaluations, making it a scalable, efficient, and objective alternative for PTE Speaking assessment. This study contributes to the advancement of automated language proficiency testing and highlights the potential of NLP and Transformers in educational assessment.",

    description:
      "The Pearson Test of English (PTE) Speaking section evaluates a candidate’s fluency, pronunciation, and content delivery. However, manual assessment can be subjective and time-consuming. This research explores an automated evaluation system for the PTE Speaking test using Natural Language Processing (NLP) and Transformer-based models. By leveraging state-of-the-art speech-to-text models, we transcribe spoken responses into text while preserving linguistic nuances. Further, we employ pre-trained Transformer architectures (e.g., BERT, RoBERTa, or T5) to assess fluency, coherence, and grammatical accuracy. We also incorporate prosodic and phonetic analysis to evaluate pronunciation and stress patterns. The system is trained on annotated PTE speaking samples and fine-tun",
    image: "/images/pte.jpg",
    stars: 5,
    href: ""
  },
];

const Publications = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <section className="min-h-screen flex flex-col items-center py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Publications
        </h1>
        <div className="grid gap-8">
          {publications.map((pub) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn" }
              }}
              className="bg-white/10 p-6 rounded-2xl flex flex-col md:flex-row  gap-6 shadow-lg"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
                }}
                className="w-full md:w-1/3 relative h-40"
              >
                <Image
                  src={pub.image}
                  alt={pub.title}
                  layout="fill"
                  className="rounded-xl object-cover"
                />
              </motion.div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">
                      {pub.title}
                    </h2>
                    <p className="text-accent text-lg">{pub.conference}</p>
                  </div>
                  <div className='w-full flex justify-end items-center '>
                    {pub.href && (
                      <Link href={pub.href} target="_blank" rel="noopener noreferrer"
                        className='w-[40px] h-[40px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                        <span><BsArrowRight className='text-primary text-2xl' /></span>
                      </Link>
                    )}
                  </div>
                </div>
                <p className="text-white/70 mt-3">
                  {expanded[pub.id] ? pub.fullDescription : `${pub.description.substring(0, 150)}...`}
                </p>
                <button
                  onClick={() => toggleExpand(pub.id)}
                  className="text-accent font-semibold mt-2"
                >
                  {expanded[pub.id] ? "Read Less" : "Read More"}
                </button>
                <div className="flex mt-3">
                  {[...Array(pub.stars)].map((_, index) => (
                    <span key={index} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
