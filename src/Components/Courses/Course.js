import React from 'react';
import AddToCart from './AddToCart';

const Course = ({ course }) => {
    const { id, name, img, price, category } = course;
    return (
        <div class="p-4 md:w-1/3">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={img} alt="blog" />
                <div class="p-6">
                    <span className='bg-primary text-2xl font-bold text-white -mt-14 absolute p-2 rounded-lg'>$ {price}</span>
                    <h2 class="tracking-widest text-xs title-font font-bold text-primary mb-1 mt-2 text-left">{category}</h2>
                    <h1 class="title-font text-2xl font-bold text-accent mb-3">{name}</h1>
                    <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <div class="card-actions justify-end">
                        <AddToCart
                            id={id}
                            name={name}
                            price={price}
                            img={img}
                            itemQty={1}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;