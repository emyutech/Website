import {NavLink} from 'react-router-dom';


const Footnote = () => {
    return (
        <body className='flex flex-col'>
            <footer class="mt-auto">
                <div className='border-t-2 border-t-rose-700 bg-rose-900'>
                    <div className='ml-0.5'>
                        <NavLink to='/' className=' text-white font-thin text-xl '>
                            EMYU
                        </NavLink>  




                            <div className='md:ml-auto mr-px '> 
                                <div className="flex space-x-2">
                                <NavLink to='https://github.com/emyutech' className='text-white font-thin text-sm '>
                                    GitHub
                                </NavLink> 
                                <NavLink to='/PageinProcess' className='text-white font-thin text-sm '>
                                    LinkedIn
                                </NavLink> 
                                </div>
                            </div> 




                    </div>
                
                </div>
            </footer>
        </body>
    )
}
export default Footnote