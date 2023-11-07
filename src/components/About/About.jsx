import React from "react";

import { Featured } from "./Featured";
import { AboutBanner } from "./AboutBanner";

import { Stat } from "./Stat";

const About = () => {

    return (
      <div>
            <AboutBanner></AboutBanner>
            <section className="mt-10 mb-10 text-white">
                <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                    <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-green-400 text-white">
                        <div className="flex space-x-2 sm:space-x-4 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2 text-white">
                                <p className="text-lg font-medium leadi">Lorem ipsum dolor sit amet</p>
                                <p className="leadi">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2 text-white">
                                <p className="text-lg font-medium leadi">Lorem ipsum dolor sit amet</p>
                                <p className="leadi">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2 text-white">
                                <p className="text-lg font-medium leadi">Lorem ipsum dolor sit amet</p>
                                <p className="leadi">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                            <img src="https://cdn0.weddingwire.in/vendor/2983/3_2/960/jpg/royal-broz-event-and-wedding-planner-1_15_232983-157303596628983.jpeg" alt="" className="rounded-lg shadow-lg  aspect-video sm:min-h-[400px]" />
                        </div>
                    </div>
                </div>
            </section>
<Featured></Featured>
<Stat></Stat>
      </div>
    );
};

export default About;
