import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs';
import Icon from '../assets/icon.png'

const Hero = () => {
  return (
    <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
        <div className='lg:w-1/3 ssm:w-fit flex flex-col items-center'>
            <img src={Icon} alt="" width={250} height={250} />
            <h1 className='text-5xl text-center'>Acompanhe o melhor basquete do mundo.</h1>
        </div>
    </section>
  )
}

export default Hero
