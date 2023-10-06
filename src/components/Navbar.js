import {AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsCart, BsFillCartFill} from 'react-icons/bs'


const Navbar = () => {
    return ( 
        <div className="max-w-[1640px] mx-auto flex justify-between p-4">
            <div className="flex items-center">
                <div className="cursor-pointer">
                    <AiOutlineMenu size={30} />
                </div>
                <h2 className="text-2xl lg:text-4xl sm:text-3xl px-2">Best <span className="font-bold">Eats</span></h2>
            </div>
            <div className="hidden">
                <p>Delivery</p>
                <p>Pickup</p>
            </div>

            <div className='bg-gray-200 flex items-center rounded-full w-[200px] lg:w-[500px] sm:w-[400px]'>
                <AiOutlineSearch size={25} className='ml-[15px]'/>
                <input type="text" className='bg-transparent p-2 w-full hover:outline-none'  placeholder='Search Foods'/>
            </div>

            { /*  Cart Button */}
            <div className='flex items-center justify-between'>
                <button className='bg-black text-white rounded-full hidden w-[100px] items-center md:flex py-2 px-6'>
                    <BsFillCartFill size={20} className='mr-2'/>Cart
                </button>
            </div>
        </div>
     );
}
 
export default Navbar;