import React from 'react';

const Portfolio = () => {
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Safety Process</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900'></div>
                </div>
                <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">At Eagle Industrial, the safety of our clients and employees is our top priority and at the core of our business. </h2>

                <div className="px-4 mt-8" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Onboarding & Initial Training</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    The training session covers essential safety protocols for new hires. Topics include emergency incident procedures (EIP), lock-out tag-out (LOTO), hot work safety, hydrogen sulfide (H2S) awareness, first aid, incident reporting, and stop work authority. Additionally, the session will verify that employee information matches records from third-party compliance companies (EWN, ISNetworld, Veriforce, and PEC).
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Existing Employee Training</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Safety training will be conducted in a bi-annual refresher format, before each job commences, and through daily reminders. To ensure a well-trained workforce, employee cross-training will be implemented. Additionally, employees will be required to wear certification ID badges.
                                </p>
                                
                                {/* <ul className="border-t border-gray-300 py-8 space-y-6">
                                    <li className="flex items-center space-x-2 px-8">
                                        <span className="bg-blue-600 rounded-full p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                        <span className="text-gray-600 capitalize">Free Setup Guidance</span>
                                    </li>
                                </ul> */}
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Meetings</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-48">
                                    Safety practices will be reinforced through a comprehensive safety program. This program includes daily tail-gate meetings where teams discuss safety concerns and best practices, weekly audits to ensure compliance with safety regulations, and monthly safety meetings to address broader safety issues and provide updates on company-wide initiatives.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-3 h-12">Observation Card Program</h4>
                                <p className="text-md font-medium leading-5 h-auto md:h-50">
                                    To maintain a safe work environment, a robust safety management system will be implemented. This system includes weekly job safety audits to identify potential hazards and ensure compliance, regular reviews of job safety analyses (JSAs) to improve their effectiveness, trend analysis to identify recurring safety issues, root cause incident analysis to prevent similar incidents from happening again, and a focus on incentives rather than punishment to foster a positive safety culture.
                                </p>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;