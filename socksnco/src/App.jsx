import bgImage from './assets/IMG_3417.PNG'

function App() {
  return (
    <>
      <div className="min-h-svh bg-contain bg-center bg-no-repeat bg-[#FBC322]" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className='flex gap-4 bg-white w-40 py-3 px-3 justify-center mx-auto rounded-b-full'>
          <a href="#">
            <i class="fa-solid fa-cart-shopping text-2xl md:text-3xl"></i>
          </a>
          <a href="#">
            <i class="fa-solid fa-heart text-2xl md:text-3xl"></i>
          </a>
          <a href="#">
            <i class="fa-solid fa-envelope text-2xl md:text-3xl"></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default App