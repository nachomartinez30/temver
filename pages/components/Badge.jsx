import Image from 'next/image'
import badge from '../assets/badge.jpg'
const Badge = () => {
    return (
        <>
            <div className='max-w-full align-middle'>
                <div className='bg-black'>
                    <div className='opacity-40'>
                        <Image src={badge} />
                    </div>
                </div>
                <div className='absolute fade-in left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-center'>
                    <h1 className='break-words text-9xl mb-2'>
                        <span className='text-green'>
                            TEM
                        </span>
                        <span className='text-blue-light'>
                            VER
                        </span>
                    </h1>
                        <span className='text-4xl text-gray-50 mt-0'>
                            Servicio y construcciones
                        </span>
                </div>
            </div>
        </>
    );
}

export default Badge;