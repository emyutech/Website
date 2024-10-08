import Ledoggo from './../assets/DoggoPic.jpg'
import './cssnecessary/necessary.css'

const HomePage = () => {
    return (
        <>
        <body className='h-screen w-screen flex items-center justify-center'>
            
            <div className='px-8 py-8 max-w-screen-2xl mx-auto sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 '>
              
                <img className=' size-60 rounded-full' src={Ledoggo}/> 
       
                <div className='space-y-1'> 
                    <div className='text-white font-thin text-center text-2xl'>
                        Welcome to the main homepage!
                    </div>
                    <p className='font-thin text-white text-left text-sm'>
                        This is just a small programmer's attempt to make it big
                    </p>
                    
                
                </div>
            </div>

        </body>
        </>
    )
}
export default HomePage