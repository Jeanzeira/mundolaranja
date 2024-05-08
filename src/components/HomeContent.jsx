import { Link } from 'react-router-dom';

/* Jogadores */
import JogImg1 from '../assets/jogadores/cover.png'
import JogImg2 from '../assets/jogadores/lebron.png'
import JogImg3 from '../assets/jogadores/curry.png'
import JogImg4 from '../assets/jogadores/durant.png'
import JogImg5 from '../assets/jogadores/ant.png'

/* Times */
import TimImg1 from '../assets/times/cover.png'
import TimImg2 from '../assets/times/lakers.png'
import TimImg3 from '../assets/times/boston.png'
import TimImg4 from '../assets/times/heat.png'
import TimImg5 from '../assets/times/bulls.png'

/* Liga */
import LigImg1 from '../assets/liga/liga.png'
import LigImg2 from '../assets/liga/draft.png'
import LigImg3 from '../assets/liga/regras.png'
import LigImg4 from '../assets/liga/fans.png'
import LigImg5 from '../assets/liga/premios.png'

/* História */
import HisImg1 from '../assets/história/historia.png'
import HisImg2 from '../assets/história/basquete.png'
import HisImg3 from '../assets/história/era jordan.png'
import HisImg4 from '../assets/história/rivalidade.png'
import HisImg5 from '../assets/história/impacto ai.png'

export default function HomeContent() {
    return (
        <div className="flex justify-center grid-cols-1 flex-wrap gap-0 md:gap-0 md:mx-0">
            {/* div jogadores */}
            <div className="w-full">
                <div className="bg-gray-500 m-5 md:m-10 max-w-full rounded-xl">
                    {/* card principal */}
                    <div className="p-5">
                        <Link to="/jogadores">
                            <div className="w-full bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
                                <div className="bg-black h-[200px]" style={{ backgroundImage: `url(${JogImg1})`, backgroundSize: 'cover', 
                                backgroundPosition: 'top', backgroundRepeat: 'no-repeat' }}>
                                    <div className="md:flex">
                                        <div className="p-8">
                                            <div className="text-white text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide font-semibold">Jogadores</div>
                                            <p className="mt-2 text-gray-300 text-base">Conheça os jogadores da melhor liga de basquete do mundo.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/* card principal */}
                    <div className="p-5">
                        <Link to="/times"> {/* Adicionando Link para /times */}
                            <div className="w-full bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
                                <div className="bg-black h-[200px]" style={{ backgroundImage: `url(${TimImg1})`, backgroundSize: 'cover', 
                                backgroundPosition: 'top', backgroundRepeat: 'no-repeat' }}>
                                        <div className="md:flex">
                                            <div className="p-8">                                                <div className="text-white text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide font-semibold">Times</div>
                                            <p className="mt-2 text-gray-300 text-base">Conheça os times da melhor liga de basquete do mundo.</p>
                                        </div>
                                     </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/* card principal */}
                    <div className="p-5">
                        <Link to="/jogadores">
                            <div className="w-full bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
                                <div className="bg-black h-[200px]" style={{ backgroundImage: `url(${LigImg1})`, backgroundSize: 'cover', 
                                backgroundPosition: 'top', backgroundRepeat: 'no-repeat' }}>
                                    <div className="md:flex">
                                        <div className="p-8">
                                            <div className="text-white text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide font-semibold">A Liga</div>
                                            <p className="mt-2 text-gray-300 text-base">Conheça tudo sobre a maior liga de basquete do mundo.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/* card principal */}
                    <div className="p-5">
                        <Link to="/historia">
                            <div className="w-full bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
                                <div className="bg-black h-[200px]" style={{ backgroundImage: `url(${HisImg1})`, backgroundSize: 'cover', 
                                backgroundPosition: 'top', backgroundRepeat: 'no-repeat' }}>
                                    <div className="md:flex">
                                        <div className="p-8">
                                            <div className="text-white text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide font-semibold">História</div>
                                            <p className="mt-2 text-gray-300 text-base">Conheça a origem e várias histórias sobre o mundo da bola laranja.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>



                    
                </div>
            </div>
        </div>
    );
}
