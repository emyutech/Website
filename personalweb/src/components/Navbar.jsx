import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return (
        <>
        <div className='border-b-2 border-b-rose-700 bg-rose-900'>
            <div className='ml-0.5 flex flex-1 pb-1 pt-1'>
                <NavLink to='/' className='text-white font-thin text-3xl '>
                    EMYU
                </NavLink>  
                <div className='md:ml-auto'> 
                    <div className="flex space-x-2 mr-0.5">
                    <NavLink to='/Journal' className='text-white font-thin text-xl '>
                        Journal
                    </NavLink> 
                    <NavLink to='/Projects' className='text-white font-thin text-xl '>
                        Projects
                    </NavLink> 
                    <NavLink to='/AboutMe'className='text-white font-thin text-xl '>
                        About Me
                    </NavLink> 
                    </div>
                </div>
          </div>  
        </div>
        </>
    )
}
export default Navbar