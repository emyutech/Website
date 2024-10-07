import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <body className='font-thin h-screen flex flex-col text-center justify-center items-center'>
                <h1 className='text-3xl text-white'>
                    Page Not Found
                </h1>
                <NavLink to='/' className='text-white bg-rose-900 hover:bg-pink-500 rounded-full px-3 py-2 mt-4'>
                Go Back
                </NavLink>
            </body>
        </div>
    );
}
export default NotFoundPage