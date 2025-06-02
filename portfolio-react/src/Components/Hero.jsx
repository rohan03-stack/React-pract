
import Navbar from "./Navbar"
import imghero from '../assets/image-portfolio-master/imghero.png'
import github from '../assets/image-portfolio-master/github.png'
import linkedin from '../assets/image-portfolio-master/linkedin.png'
import facebook from '../assets/image-portfolio-master/facebook.png'
import instagram from '../assets/image-portfolio-master/instagram.png'
import adam from '../assets/image-portfolio-master/Adam.pdf'

export const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center'>

      <div className='md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute from-[rgba(33,1,35,0.99)] via-[#579dbbd0] to-[#f30694] transform rotate-45 z-0 right-2 top-28 rounded-3xl' ></div>
      <Navbar />
      <main id="home" className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10">

        <section className="flex-1 mr-28 md:text-left mt-10 md:mt-0 relative" datas-aos="fade-up" date-aos-delay="500">
          <div className="absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50  -top-5 -left-12"></div>
          <header>
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Rohan Gaikwad </h1>
            <h2 className="text-xl sm:text-4xl md:text-2xl font-bold text-[#3e0f4a] md:text-[#c744ec] mb-2">
              Full Stack Developer
            </h2>
          </header>

          <p className="text-base sm:text-lg md:text-lg text-gray-200 mb-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, reprehenderit!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, numquam!
          </p>
          <div className="flex items-center space-x-4  mb-6">

            <a href="#">
              <img src={github} alt="" className="w-11 h-11" />
            </a>

            <a href="#">
              <img src={linkedin} alt="" className="w-11 h-11" />
            </a>

            <a href="#">
              <img src={facebook} alt="" className="w-11 h-11" />
            </a>

            <a href="#">
              <img src={instagram} alt="" className="w-11 h-11" />
            </a>




          </div>
          <a href={adam} download>
            <button className="inline-flex  text-white border-2 py-2  px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg"> Download </button>
          </a>
        </section>
        <figure data-aos='fade-up' data-aos-delays='500' className="flex-1 flex justify-center md:justify-end mt-0">
          <img src={imghero} alt="" className="h-[300px] sm:h-[400px] md:h-[485px] w-[250px] sm:w-[480px] object-cover rounded-lg" />
        </figure>
      </main>
    </div>

  )
}
