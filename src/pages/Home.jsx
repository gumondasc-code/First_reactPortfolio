import Jetet from '../assets/Jetet.png'
import Carousel from './components/carousel'
const slides = [
  'Jetet.png',
  'Jetet.png',
  'Jetet.png',
]


function Home() {
  return (

    <div className="flex flex-col items-center justify-center p-8 gap-6">
      <div className="bg-blue-200">
        <h2 className="text-3xl font-bold pb-10">Welcome to My Portfolio</h2>
      </div>
      <div className="flex gap-50 flex-col md:flex-row items-center">
        <div className="bg-gray-200 p-4 rounded-lg">
          ------ carousel start ------
        </div>
        <div className="text-center max-w-xl mt-6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti sint illo numquam. Porro voluptatibus pariatur eius quibusdam ipsum dolor ipsam natus,
            dicta fugiat assumenda molestiae, modi suscipit, quod atque soluta?</p>
        </div>
      </div>
    </div>
  )
}

export default Home;
