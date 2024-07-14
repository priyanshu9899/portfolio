import { FaReact } from "react-icons/fa";

function Footer() {
  return (
<div className='flex w-full h-[80px]  max-xl:justify-center bg-zinc-900 relative items-center justify-between px-[3vw] border-t-[1px] border-zinc-700 flex-wrap'>
    <div className='flex items-center space-x-2 text-sm text-zinc-300' >
        Built with <span className='text-red-500 text-lg mx-2'>❤️</span> using 
        <a href='https://react.dev/' className='flex items-center space-x-1'>
            <FaReact />
            <span className="underline">React.js</span>
        </a>
    </div>
    <div className='text-sm max-xl:text-[10px] text-zinc-400'>
        Copyright © Priyanshu Kumar Sinha 2024 All rights reserved
    </div>
</div>



  )
}

export default Footer