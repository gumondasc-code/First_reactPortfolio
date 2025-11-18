import Jetet from '../assets/Jetet.jpg'
import RevealFooter from '../components/RevealLinkFooter.jsx'
function Home() {
  return (
<>
    <div className="flex flex-col items-center justify-center p-8 gap-6">
      <div className="text-center ">
        <h2 className="text-3xl font-bold pb-10">Welcome to My Portfolio</h2>
      </div>
      <div className="flex gap-50 flex-col md:flex-row items-center">
        <div className="bg-gray-200 p-4 rounded-lg">
          <img src={Jetet} alt="Profile" className="w-100 h-100 rounded-full object-cover" />
        </div>
        <div className="text-center max-w-xl mt-6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti sint illo numquam. Porro voluptatibus pariatur eius quibusdam ipsum dolor ipsam natus,
            dicta fugiat assumenda molestiae, modi suscipit, quod atque soluta?</p>
        </div>
      </div>
    </div>



</>
  )
}

export default Home;
