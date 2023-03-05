import React from 'react'
import reactImg from '../assets/react.png';
import Image from 'next/image';

function Main() {
    return (
        <>
            <div className=" p-4 mt-3 m-0" style={{ backgroundColor: "rgb(227 224 225)", borderTopRightRadius: '3rem', borderTopLeftRadius: '3rem', color: 'black',minHeight:'80dvh' }}>
                {/* <div className="xl:w-1/4 md:w-1/3 p-2 flex ">
                    <div className="border border-slate-900 px-5 py-2 rounded-full flex justify-center align-middle gap-2">
                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500" style={{ borderRadius: '1.75rem' }}>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                            </svg>
                        </div>
                        <span className="text-lg text-gray-900 font-small title-font mb-2 flex justify-center align-bottom" style={{ alignItems: 'self-end' }}>Slide to regenrate</span>
                    </div>
                </div> */}
                <div className="xl:w-1/4 md:w-1/3 py-2 px-2 flex ">
                    <button className="cssbuttons-io flex justify-center align-middle py-2 px-1" style={{alignItems:'center'}} >
                        <span>
                            <Image src={reactImg} height={40} width={40} alt={"ReactJs Logo"} className=' font-light' /></span>
                            <span className='text-xs px-2'>{'>> Slide To Regenerate'}</span>
                    </button>
                </div>
                <div className='dummyText mt-2'>
                    <h2 className='font-bold'>Lorem ipsum dolor sit amet consectetur adipis elit. Ab, dicta.</h2>
                    <p className='font-semibold mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis commodi nihil illo perferendis optio hic doloremque cupiditate magnam, deleniti enim.</p>
                    <span className='font-semibold mt-3'>Lorem ipsum dolor sit amet.</span>

                    <p className='font-medium mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima repellendus tempore pariatur earum animi voluptas, quam eligendi consectetur velit praesentium aperiam quas alias dolorem? Quam ullam saepe pariatur nostrum placeat repellat officiis tenetur illum cupiditate facere quos consectetur illo quae itaque rem culpa perspiciatis obcaecati, nesciunt mollitia deserunt quibusdam molestias.</p>


                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. t, magni architecto.</p>
                </div>
            </div>

        </>

    )
}

export default Main