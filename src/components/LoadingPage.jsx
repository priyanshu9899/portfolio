

function LoadingPage() {
  return (
    <div className='h-screen bg-zinc-900 flex items-center justify-center'>
        <img className='h-[18vw] w-[18vw] animate-spin  ' src="/abstract.png" alt="" />
        <h2 className='text-[3vw] max-xl:text-[5vw] animate-pulse'>Loading...</h2>
    </div>
  )
}

export default LoadingPage