import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption = [
        { id: 1, name: 'Free', price: 0 },
        { id: 1, name: 'Regular', price: 9.99 },
        { id: 1, name: 'Premium', price: 19.99 }
    ]

    return (
        <div className=' bg-indigo-300 p-4 mt-8 '>
            <h1 className='text-6xl font-mono text-white'>Best Deals of the Town</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quis reiciendis aut nulla nemo reprehenderit quasi facilis delectus aliquam! Dolore? </p>

            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOption.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }

            </div>
        </div>
    );
};

export default Pricing;