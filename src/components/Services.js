import React from 'react';
import img from '../images/PipelineConstruction.jpeg'; 
import img2 from '../images/FacilityMaintenance.jpeg';
import img3 from '../images/FacilityConstruction.jpg';
import img4 from '../images/pipemaint.jpeg';
//icons
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { MdLandscape } from "react-icons/md";
import { FaRecycle } from "react-icons/fa6";
import { FaWater } from "react-icons/fa6";

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We have experience working as prime contractors with major utility companies, industrial plants, power generation facilities, refineries, and water/wastewater treatment facilities.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Pipeline Construction</h2>
                                    <p className="text-md font-medium">
                                        We fabricate pipeline sections and valves, ensuring structural integrity through inspections and repairs, and preparing the surface for coating or lining.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Facility Maintenance</h2>
                                    <p className="text-md font-medium">
                                        We provide wide range of services, including ASME code-compliant welding procedures and repairs, ASME certifications for pressure vessels, boiler repair, civil and general construction and weld procedure development.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Facility Construction</h2>
                                    <p className="text-md font-medium">
                                        We build the industrial facilities for various purposes. Common projects include compressor stations, gas lift installations, tank batteries, pump stations, saltwater disposal facilities (SWD), and tank terminals and storage facilities.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Pipeline Maintenance & Integrity</h2>
                                    <p className="text-md font-medium">
                                        Our team focus's on preserving the condition and safety of existing pipelines. These services typically include anomaly verifications and repairs, assistance with caliper pig runs.
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>

            <section>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                <MdLandscape size={72}/>
                            </div>
                            <h3 className="text-3xl  text-blue-900 
                            font-bold uppercase">Safe Land <span className='font-black'>Preservation</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                    We protect the preservation of our land and safely monitor erosion control. We minimize the use of single use paper and plastic materials on job sites, as well as in our office. 
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                <MdOutlineEnergySavingsLeaf size={72}/>
                            </div>
                            <h3 className="text-3xl  text-blue-900 font-bold uppercase">Energy <span className='font-black'>Efficiency</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>We minimize energy use on all projects and align with companies working towards energy efficiency. </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                <FaWater size={72}/>
                            </div>
                            <h3 className="text-3xl  text-blue-900 font-bold uppercase">Clean <span className='font-black'>Water</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>We protect our rivers and oceans by examining water use and contamination levels to ensure clean water.  </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                <FaRecycle size={72}/>
                            </div>
                            <h3 className="text-3xl  text-blue-900 font-bold uppercase">Recycling & <span className='font-black'>Waste Management</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>We incorporate mindful waste management and recycling practices, and ensure our facilities recycle construction debris and other materials.  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;