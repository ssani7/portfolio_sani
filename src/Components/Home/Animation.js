import React from 'react';
import git from '../../Images/icons/git.png'
import mongo from '../../Images/icons/mongo.png'
import firebase from '../../Images/icons/firebase.png'
import node from '../../Images/icons/node.png'
import react from '../../Images/icons/React-icon.svg.png'
import bootstrap from '../../Images/icons/bootstrap-logo.png'
import html from '../../Images/icons/html.png'
import css from '../../Images/icons/css.png'
import js from '../../Images/icons/javascript.png'
import tail from '../../Images/icons/Tailwind_CSS_Logo.svg.png'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'

const Animation = () => {
    const { ref, inView } = useInView({
        triggerOnce: true
    });

    return (
        <>
            <motion.div ref={ref} initial='hidden' animate={`${inView && "animate"}`} variants={{
                hidden: { opacity: 0, scale: .5 },
                animate: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                        delay: 0.4,
                        delayChildren: 0.3,
                        staggerChildren: 0.2,
                        duration: .6
                    }
                }
            }} className="pb-20">
                <h1 className='my-20 text-center font-bold text-3xl'>Skills</h1>
                <div className='w-full py-10'>
                    <div className='mx-auto h-full max-w-xs lg:h-96 lg:max-w-lg overflow-hidden shadow-lg rounded-xl'>
                        <div className='transform -rotate-45'>
                            <div className='flex h-24 relative mt-12'>
                                <div className='flex justify-evenly orbit w-full absolute'>
                                    <div data-tip='HTML-5' className='tooltip rotate-45'>
                                        <img className='w-16 lg:w-24 rotate-0 filter grayscale hover:grayscale-0 cursor-pointer' src={html} alt="" />
                                    </div>
                                    <div data-tip='Firebase' className='tooltip rotate-45'>
                                        <img className='w-16 lg:w-24 rotate-0 filter grayscale hover:grayscale-0 cursor-pointer ' src={firebase} alt="" />
                                    </div>
                                    <div data-tip='Git' className='tooltip rotate-45'>
                                        <img className='w-16 lg:w-24 rotate-0 filter grayscale hover:grayscale-0 cursor-pointer' src={git} alt="" />
                                    </div>
                                </div>
                                <div className='flex justify-evenly orbit2 w-full absolute -translate-x-full'>
                                    <div data-tip='HTML-5' className='tooltip rotate-45'>
                                        <img className='w-16 lg:w-24 rotate-0 filter grayscale hover:grayscale-0 cursor-pointer' src={html} alt="" />
                                    </div>
                                    <div data-tip='Firebase' className='tooltip rotate-45'>
                                        <img className='w-16 lg:w-24 rotate-0 filter grayscale hover:grayscale-0 cursor-pointer ' src={firebase} alt="" />
                                    </div>
                                    <div data-tip='Git' className='tooltip rotate-45'>
                                        <img className='w-16 lg:w-24 rotate-0 filter grayscale hover:grayscale-0 cursor-pointer' src={git} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className='flex h-24 relative mt-12'>
                                <div className='flex justify-evenly orbit w-full absolute'>
                                    <div data-tip='JavaScript' className='tooltip rotate-45'>
                                        <img className='w-16 lg:w-24 rotate-0 filter grayscale hover:grayscale-0 cursor-pointer' src={js} alt="" />
                                    </div>
                                    <div data-tip='Reactjs' className='tooltip rotate-45'>
                                        <img className='w-16 lg:w-24 rotate-0 filter grayscale hover:grayscale-0 cursor-pointer' src={react} alt="" />
                                    </div>
                                    <div data-tip='Node.js' className='tooltip rotate-45'>
                                        <img className='w-16 h-16 lg:h-24 lg:w-24 rotate-0 filter grayscale hover:grayscale-0 cursor-pointer ' src={node} alt="" />
                                    </div>
                                </div>
                                <div className='flex justify-evenly orbit2 w-full absolute'>
                                    <div data-tip='JavaScript' className='tooltip rotate-45'>
                                        <img className='w-16 lg:w-24 rotate-0 filter grayscale hover:grayscale-0 cursor-pointer' src={tail} alt="" />
                                    </div>
                                    <div data-tip='Reactjs' className='tooltip rotate-45'>
                                        <img className='w-16 lg:w-24 rotate-0 filter grayscale hover:grayscale-0 cursor-pointer' src={mongo} alt="" />
                                    </div>
                                    <div data-tip='Node.js' className='tooltip rotate-45'>
                                        <img className='w-16 h-16 lg:h-24 lg:w-24 rotate-0 filter grayscale hover:grayscale-0 cursor-pointer ' src={node} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className='flex h-24 relative mt-12'>
                                <div className='flex justify-evenly orbit w-full absolute'>
                                    <div data-tip='CSS-3' className='tooltip rotate-45'>
                                        <img className='w-16 lg:w-24 rotate-0 filter grayscale hover:grayscale-0 cursor-pointer' src={css} alt="" />
                                    </div>
                                    <div data-tip='Bootstrap CSS' className='tooltip rotate-45'>
                                        <img className='w-16 lg:w-24 rotate-0 filter grayscale hover:grayscale-0 cursor-pointer' src={bootstrap} alt="" />
                                    </div>
                                    <div data-tip='Tailwind CSS' className='tooltip rotate-45'>
                                        <img className='w-16 lg:w-24 rotate-0 filter grayscale hover:grayscale-0 cursor-pointer ' src={tail} alt="" />
                                    </div>
                                </div>
                                <div className='flex justify-evenly orbit2 w-full absolute'>
                                    <div data-tip='CSS-3' className='tooltip rotate-45'>
                                        <img className='w-16 lg:w-24 rotate-0 filter grayscale hover:grayscale-0 cursor-pointer' src={css} alt="" />
                                    </div>
                                    <div data-tip='Bootstrap CSS' className='tooltip rotate-45'>
                                        <img className='w-16 lg:w-24 rotate-0 filter grayscale hover:grayscale-0 cursor-pointer' src={bootstrap} alt="" />
                                    </div>
                                    <div data-tip='Tailwind CSS' className='tooltip rotate-45'>
                                        <img className='w-16 lg:w-24 rotate-0 filter grayscale hover:grayscale-0 cursor-pointer ' src={tail} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Animation;