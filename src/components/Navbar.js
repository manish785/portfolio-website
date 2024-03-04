import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className='h-[60px] w-full'>
            <div className='flex  justify-between mt-[20px]'>
                <div>
                 <button className='h-[40px] w-[40px]  ml-[40px] rounded-lg bg-blue-700 text-white'>M</button>
                </div>
                <div className=' mr-[120px]'>
                  <Link className='m-4 font-normal text-3xl text-blue-900' to='/'>Home</Link>
                  <Link className='m-4 font-normal text-3xl text-blue-900' to='/skill'>Skill</Link>
                  <Link className='m-4 font-normal text-3xl text-blue-900' to='/projects'>Projects</Link>
                  <Link className='m-4 font-normal text-3xl text-blue-900' to='/contact'>Contact</Link>
                </div>
            </div>
        </div>
    )
};


export default Navbar;