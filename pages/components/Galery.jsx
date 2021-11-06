import Image from 'next/image'

/* PICTURES */
import img_1 from '../assets/img/500_300_1.png'
import img_2 from '../assets/img/501_301_1.png'
import img_3 from '../assets/img/600_360_1.png'
import img_4 from '../assets/img/601_361_1.png'
import img_5 from '../assets/img/503_303_1.png'
import img_6 from '../assets/img/502_302_1.png'

import img_7 from '../assets/img/500_300_2.png'
import img_8 from '../assets/img/501_301_2.png'
import img_9 from '../assets/img/600_360_2.png'
import img_10 from '../assets/img/601_301_2.png'
import img_11 from '../assets/img/503_303_2.png'
import img_12 from '../assets/img/502_302_2.png'




const Galery = () => {
    return (
        <section className="text-gray-600 body-font" id="galery">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex w-full mb-20 flex-wrap">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-blue lg:w-1/3 lg:mb-0 mb-4">
                        Nuestro trabajo
                    </h1>
                    {/* <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                        Venta e instalación de pisos condutivo piso antibacterial
                    </p> */}
                </div>
                <div className="flex flex-wrap md:-m-2 -m-1">
                    {/* FIRST SECTION */}
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                alt="gallery"
                                className="object-cover h-full object-center block"
                                src={img_1}
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                alt="gallery"
                                className="w-full object-cover h-full object-center block"
                                src={img_2}
                            />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <Image
                                alt="gallery"
                                className="w-full h-full object-cover object-center block"
                                src={img_3}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <Image
                                alt="gallery"
                                className="w-full h-full object-cover object-center block"
                                src={img_4}
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                alt="gallery"
                                className="w-full object-cover h-full object-center block"
                                src={img_5}
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                alt="gallery"
                                className="w-full object-cover h-full object-center block"
                                src={img_6}
                            />
                        </div>
                    </div>
                    {/* SECOND SECTION */}
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                alt="gallery"
                                className="object-cover h-full object-center block"
                                src={img_7}
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                alt="gallery"
                                className="w-full object-cover h-full object-center block"
                                src={img_8}
                            />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <Image
                                alt="gallery"
                                className="w-full h-full object-cover object-center block"
                                src={img_9}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <Image
                                alt="gallery"
                                className="w-full h-full object-cover object-center block"
                                src={img_10}
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                alt="gallery"
                                className="w-full object-cover h-full object-center block"
                                src={img_11}
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                alt="gallery"
                                className="w-full object-cover h-full object-center block"
                                src={img_12}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Galery;