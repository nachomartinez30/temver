import Image from 'next/image'
import badge from '../assets/badge.jpg'
const Badge = () => {
    return (
        <>
            <div className='max-w-full fade-in align-middle'>
                <Image src={badge} />
            </div>
        </>
    );
}

export default Badge;