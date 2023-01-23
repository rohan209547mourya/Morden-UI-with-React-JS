import React from 'react'

const Stats = () => {

    const stats = [
        {
            count: 3800,
            title: "ACTIVE USERS"
        },
        {
            count: 320,
            title: "TRUSTED BY COMPANIES"
        },
        {
            count: 220,
            title: "DAILY TRANSACTIONS"
        }

    ]

    return (
        <div>

            <ul className='flex justify-around sm:px-16 px-6 mt-[5%]'>

                {
                    stats.map((el, index) => (
                        <li key={index} className="flex justify-center items-center mr-10">
                            {
                                index == stats.length - 1 ?
                                    <h2 className='font-poppins font-semibold text-white text-[32px] mr-6'>${el.count}+</h2> :
                                    <h2 className='font-poppins font-semibold text-white text-[32px] mr-6'>{el.count}+</h2>
                            }

                            <span className='text-gradient font-semibold'>{el.title}</span>

                            {
                                index == stats.length - 1 ?

                                    "" : <span className='text-white ml-[62px]'>|</span>
                            }
                        </li>
                    ))
                }
            </ul>

        </div >
    )
}

export default Stats