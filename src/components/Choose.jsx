import React from 'react'

const Choose = () => {
    const chooseUs = [
        {
            id: 1,
            title: 'Competitive Prices',
            image: '/public/img/dollar-circle.png',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
        },
        {
            id: 2,
            title: 'Secure Processing',
            image: '/public/img/security-user.png',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
        },
        {
            id: 3,
            title: 'Seamless Experience',
            image: '/public/img/refresh-right-square.png',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
        }
    ];

    return (
        <div className='container mx-auto max-w-[1350px] px-4 py-10'>
            <div className='my-10'>
                <h2 className='font-bold text-3xl md:text-[40px] uppercase text-center mb-10'>WHY CHOOSE US?</h2>
                <div className='flex flex-wrap md:flex-nowrap justify-center gap-6'>
                    {chooseUs.map((choose) => (
                        <div
                            key={choose.id}
                            className='w-full sm:w-1/2 lg:w-1/3 px-4 py-6 text-center bg-white '
                        >
                            <div className='flex justify-center mb-4'>
                                <img
                                    src={choose.image}
                                    className='bg-[#EBF9FF] p-5 rounded-[16px] w-20 h-20 object-contain'
                                    alt={choose.title}
                                />
                            </div>
                            <h3 className='font-bold text-xl mb-2'>{choose.title}</h3>
                            <p className='text-gray-600 text-[16px]'>{choose.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Choose;
