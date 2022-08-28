import React from 'react';

const Course = () => {
    return (
        <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                <div class="p-6">
                    <span className='bg-primary text-2xl font-bold text-white -mt-14 absolute p-2 rounded-lg'>$49</span>
                    <h2 class="tracking-widest text-xs title-font font-medium text-primary mb-1 mt-2">Bangla</h2>
                    <h1 class="title-font text-2xl font-bold text-accent mb-3">The Catalyzer</h1>
                    <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <div class="card-actions justify-end">
                        <button class="px-4 py-2 bg-primary text-white rounded-lg font-bold">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;