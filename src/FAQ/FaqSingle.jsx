import React, { useState } from 'react';

const FaqSingle = ({ faq }) => {

    const [toggle, setToggle] = useState(true)
    const { id, title, desc } = faq;
    return (
        <div>
            <article>
                <section className=' bg-gray-200 opacity-70 min-h-20 max-w-[800px] mx-auto p-8'>
                    <div className=' bg-gray-900 p-4 shadow-xl max-w-[700px] mx-auto mt-4 rounded-xl px-8 '>

                        <div className='flex gap-8 text-white'>
                            <h4 className='text-3xl font-bold'>{title}</h4>
                            <button onClick={() => { setToggle(!toggle) }} className='bg-green-500 p-4 rounded-sm border-none  ' >{toggle ? "-" : "+"}</button>
                        </div>
                        <div>
                            {
                                toggle && <p className='text-white'>{desc}</p>
                            }

                        </div>

                    </div>





                </section>


            </article>
        </div>
    );
};

export default FaqSingle;