

const Category = () => {
    const categories = [
        {
          id: 1,
          name: 'Fast Food',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/FastFood_BrowseHome@3x.png',
        },
        {
          id: 2,
          name: 'Pizza',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png',
        },
        {
          id: 3,
          name: 'Wings',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Wings_BrowseHome@3x.png',
        },
        {
          id: 4,
          name: 'Indian',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Indian_BrowseHome@3x.png',
        },
        {
          id: 5,
          name: 'Latest Deals',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Deals_BrowseHome@3x.png',
        },
        {
          id: 6,
          name: 'Restaurant Rewards',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/RestoRewards_BrowseHome@3x.png',
        },
        {
          id: 7,
          name: 'Best Overall',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/TopEats_Browse%20Home@3x.png',
        },
        {
          id: 8,
          name: 'Shipped Free',
          image:
            'https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Placeholder_Plates@3x.png',
        },
      ]
    return (  
        <div className="max-w-[1640px] m-auto px-4 py-12">
            <p className="font-bold text-orange-600 text-center md:text-4xl sm:text-[14px]">Top Rated Menu Items</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
               { categories.map((item) => (
                 <div className="items-center flex bg-gray-100 rounded-lg p-4 justify-between">
                    <h2 className="font-bold sm:text-xl">{item.name}</h2>
                    <img className="w-20" src={item.image} alt={item.name}/>
                 </div>
               ))}
            </div>
        </div>
    );
}
 
export default Category;