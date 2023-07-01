import React from 'react';
// import hp_cpy_image from '../images/hp_cpy_image.jpg';
import { useNavigate } from 'react-router-dom';
import waltonbd_logo from '../images/waltonbd_logo.jpg'
import tuborg_company from '../images/tuborg_company.jpg';
import asset43 from '../images/assets4/asset 0.jpeg'
import lenskart_logo from '../images/lenskart_logo.png';
import jio from '../images/asml/jio.png'
import company from '../images/asml/company.jpg'
import company2 from '../images/asml/company2.jpg'
import company3 from '../images/asml/company3.jpg'
import company4 from '../images/asml/company4.jpg'

import ceat_company1 from '../images/asml/ceat_company1.jpg';
import ceat_company2 from '../images/asml/ceat_company2.jpg';
import ceat_company3 from '../images/asml/ceat_company3.jpg';

const Company = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-white w-full '>
            {/* [#2e9afe] */}
            <div className="options text-center text-white bg-red-800 py-2 px-1  items-center text-lg flex ">
                <svg xmlns="http://www.w3.org/2000/svg"
                    onClick={() => navigate('/home')} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="w-4 h-4   storke-white  cursor-pointer stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <div className="flex-grow">Company Profile</div>
            </div>



            <div className='flex flex-col w-[88%] mx-auto justify-between items-center p-2'>
                <div className="flex items-center justify-between px-2 shadow-sm shadow-gray-400 py-3 mt-4 rounded-md w-full mx-auto">
                    <div className='text-sm'>Company Profile</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                            className="w-4 h-4 stroke-gray-400 rotate-180  cursor-pointer ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                </div>

                <div className="hp_company mt-4">
                    <div className='font-semibold'>(about us)</div>
                    <img src={ceat_company1} alt="hp" className='sm:w-3/6 md:w-2/6 mx-auto' width={320} />
                </div>

                <div className="flex flex-col gap-2 px-2  py-2 mt-1 rounded-md w-full mx-auto">
                    {/* <div className='font-semibold'>CEAT</div> */}
                    <div className='text-[16px] font-semibold'>
                        Mumbai head-quartered CEAT, the flagship company of the RPG Enterprises, 
                        was established in 1958. Today, CEAT is one of Indiaâ€™s leading tyre manufacturers
                        and has strong presence in global markets. CEAT produces over 15 million tyres a year
                        and offers the widest range of tyres to all segments and manufactures world-class
                        radials for: heavy-duty trucks and buses, light commercial vehicles, earthmovers, 
                        forklifts, tractors, trailers, cars, motorcycles and scooters as well as auto-rickshaws.
                        <br />
                        <br />
                        RPG Enterprises is one of India's largest industrial conglomerates. With over 15 companies 
                        in its fold, the group has a strong presence across core business sectors such as Infrastructure,
                        Tyre, IT and Specialty.
                        <div className="hp_company mt-4">
                            <div className="font-semibold">(about us)</div>
                            <img src={ceat_company2} alt="hp" className='sm:w-3/6 md:w-2/6 mx-auto' width={320} />
                        </div>
                        <br />
                        CEAT AKKHAN LTD&nbsp;is a joint venture company of CEAT Ltd (India) and A.K. KHAN Co. Ltd. (Bangladesh). 
                        We are setting up a state of the art tyre manufacturing facility in Bangladesh. It is the largest investment, 
                        in manufacturing sector, by any Indian company in Bangladesh with an investment value of BDT 424 Cr. Presently 
                        we have a strong presence in Bangladesh market with four regional offices in Dhaka, Chattogram, Bogura and 
                        Jashore.
                        <div className="hp_company mt-4">
                            <div className="font-semibold">(values)</div>
                            <img src={ceat_company3} alt="hp" className='sm:w-3/6 md:w-2/6 mx-auto' width={320} />
                        </div>
                        Since its inception, CEAT has been governed by its core values. They shape the culture and define the 
                        character of our company. They guide how we behave and make decisions.
                    </div>
                    {/* <img src={lenskart_logo} alt="spacex" /> */}
                </div>

                {/* <div className="flex flex-col gap-2 px-2  py-2 mt-4 rounded-md w-full mx-auto">
                    <div className='font-semibold'>Our Manufacturing Ethos</div>
                    <div className='text-xs'>
                        Our quality towers tall because of the solid foundation our manufacturing operations offer.
                        With ISO 9001:2015 certified plants – two in Maharashtra, in Ratnagiri and Urse; and a third in
                        Masar, Gujarat. Every plant has been instrumental in helping us deliver quality and reliable products
                        across the country. With every employee on the floor aligned to the bigger picture, holding themselves
                        personally accountable for the output, and the reputation we enjoy out in the world.

                        Our flagship facility in Ratnagiri, spread over 650 acres, consists of an open sea cryogenic jetty
                        and storage facility to receive raw materials, a PVC resin manufacturing facility in technical
                        collaboration with Uhde GmbH, Germany, with Hoechst technology, and a PVC pipe manufacturing facility.
                        In house resin manufacture ensures that all our pipe manufacturing facilities in all locations
                        receive a dedicated supply of consistent and superior quality resin. But the thing that really
                        drives our machines across all plants, is the ethos we share. Our common passion for quality.
                    </div>
                    
                </div> */}

                {/* <div className="flex flex-col gap-2 px-2  py-2 mt-4 rounded-md w-full mx-auto">
                    <div className='font-semibold'>A Network of Trust</div>
                    <div className='text-xs'>
                        We have over 900 dealers and 21,000 retail touchpoints across the country. Many of the people in this
                        network have been with us for over 30 years, as members of our parivaar, our family. Over the decades,
                        we have earned their trust, and they, ours, as families do. Their faith in us has, in turn, inspired their
                        customers, many of whom swear by our products. Creating a beautifully interwoven tapestry of partnerships.
                        An interconnected network of collaboration and trust, that is as enduring as the pipes and fittings.
                    </div>
                    
                </div> */}
            </div>


        </div>
    )
}

export default Company