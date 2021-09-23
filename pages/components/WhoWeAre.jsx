import Image from 'next/image'
import pisoConductivoImg from '../assets/piso_conductivo.jpg'
const WhoWeAre = () => {
    return (
        <section className="text-gray-600 body-font" id='who_we_are'>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                {/* QUIENES SOMOS */}
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center slide-in-left">
                    <div class="min-h-screen bg-white py-6 flex flex-col justify-center sm:py-12">
                        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                            <div class="absolute inset-0 bg-gradient-to-r from-blue to-green shadow-2xl transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                            <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                                <div class="max-w-md mx-auto">
                                    <div class="divide-y divide-gray-200">
                                        <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                            <p>
                                                Ofrecemos la vaneta e instalación de:
                                            </p>
                                            <ul class="list-disc space-y-2">
                                                {/* ITEMS */}
                                                <li class="flex items-start">
                                                    <span class="h-6 flex items-center sm:h-7">
                                                        <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    <p class="ml-2">
                                                        Pisos antibacterial.
                                                    </p>
                                                </li>
                                                <li class="flex items-start">
                                                    <span class="h-6 flex items-center sm:h-7">
                                                        <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    <p class="ml-2">
                                                        Piso conductivo.
                                                    </p>
                                                </li>
                                                <li class="flex items-start">
                                                    <span class="h-6 flex items-center sm:h-7">
                                                        <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    <p class="ml-2">
                                                        Recubierto antibacterial en muros.
                                                    </p>
                                                </li>
                                                <li class="flex items-start">
                                                    <span class="h-6 flex items-center sm:h-7">
                                                        <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    <p class="ml-2">
                                                        Autonibelante.
                                                    </p>
                                                </li>
                                                <li class="flex items-start">
                                                    <span class="h-6 flex items-center sm:h-7">
                                                        <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    <p class="ml-2">
                                                        Barreras de humedad.
                                                    </p>
                                                </li>
                                                <li class="flex items-start">
                                                    <span class="h-6 flex items-center sm:h-7">
                                                        <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    <p class="ml-2">
                                                        Cortinas antibacteriales.
                                                    </p>
                                                </li>
                                                <li class="flex items-start">
                                                    <span class="h-6 flex items-center sm:h-7">
                                                        <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    <p class="ml-2">
                                                        Protecciones de contra impacto
                                                    </p>
                                                </li>


                                            </ul>
                                            {/* <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p> */}
                                        </div>
                                        <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                                            {/* <p>
                                                Want to dig deeper into Tailwind?</p>
                                            <p>
                                                <a href="https://tailwindcss.com/docs" class="text-cyan-600 hover:text-cyan-700"> Read the docs &rarr; </a>
                                            </p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* IMG */}
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 slide-in-right">
                    <Image className="object-cover object-center rounded" alt="hero" src={pisoConductivoImg} />
                    <span className='justify-end'>
                        piso conductivo
                    </span>
                </div>
            </div>
        </section>

    );
}

export default WhoWeAre;