const HeadlineCards = () => {
    return ( 
            <div className="max-w-[1640px] p-4 grid grid-cols-3 mx-auto gap-8">
                <div className="rounded-xl relative">
                    <div className="absolute rounded-xl w-full h-full bg-black/50 text-justify">
                        <p className="font-bold text-3xl text-white px-2 pt-4">Burger</p>
                        <p className="text-white text-xl px-2">Through 8/26</p>
                        <button className="rounded-full bg-white text-black ml-3 px-5 mt-2 absolute">Order Now</button>
                    </div>
                    <img  className="rounded-xl w-full max-h-[200px] object-cover" src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" />

                </div>
                <div className="rounded-xl relative">
                    <div className="absolute rounded-xl w-full h-full bg-black/50 text-justify">
                        <p className="font-bold text-3xl text-white px-2 pt-4">Burger</p>
                        <p className="text-white text-xl px-2">Through 8/26</p>
                        <button className="rounded-full bg-white text-black ml-3 px-5 mt-2 absolute">Order Now</button>
                    </div>
                    <img  className="rounded-xl w-full max-h-[200px] object-cover" src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" />

                </div>
                <div className="rounded-xl relative">
                    <div className="absolute rounded-xl w-full h-full bg-black/50 text-justify">
                        <p className="font-bold sm:text-[12px] md:text-2xl lg:text-4xl text-3xl text-white px-2 pt-4">Burger</p>
                        <p className="text-white sm:text-lg text-xl px-2">Through 8/26</p>
                        <button className="rounded-full bg-white text-black ml-3 px-5 mt-2 absolute">Order Now</button>
                    </div>
                    <img  className="rounded-xl w-full max-h-[200px] object-cover" src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-l-5.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" />

                </div>

            </div>

     );
}
 
export default HeadlineCards;