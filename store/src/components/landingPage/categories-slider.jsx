// src/components/CategoriesSlider.jsx
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { DirectionAwareHover } from '@components/ui/direction-aware-hover';
import { cards } from './category';
import useAsync from '@hooks/useAsync';
import CategoryServices from "@services/CategoryServices";


function CategoriesSlider({attributes}) {
  const categories = [
    { name: 'Rings', image: '/images/rings.jpg' },
    { name: 'Necklaces', image: '/images/necklaces.jpg' },
    { name: 'Earrings', image: '/images/earrings.jpg' },
    // Add more categories as needed
  ];

  const { data, error, loading } = useAsync(
    CategoryServices.getShowingCategory
  );


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    responsive: [
        { breakpoint: 1090, settings: { slidesToShow: 4 }},
      { breakpoint: 1024, settings: { slidesToShow: 3 }},
      { breakpoint: 768, settings: { slidesToShow: 2 }},
      { breakpoint: 640, settings: { slidesToShow: 1 }},
    ],
  };

  console.log('attributes',attributes)
  console.log('categories',data[0]?.children)

  return (
    <section id="categories" className="py-12">
      <h2 className="text-3xl font- text-center tracking-widest font-serif mb-8">Shop by Category</h2>
      <div className="max-w-  mx-auto px-4">
        {/* <DirectionAwareHover imageUrl={''}/> */}
        <Slider {...settings}>
          {data[0]?.children.map((category, index) => (
             <DirectionAwareHover children={category.name?.en} imageUrl={category?.icon}/>
            // <div key={index} className="px-2">
            //   <div className="relative overflow-hidden rounded-lg">
            //     <img
            //       src={category.image}
            //       alt={category.heading}
            //       className="w-full h-64 object-cover"
            //     />
            //     <div className="absolute inset-0 bg-black opacity-25"></div>
            //     <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">
            //       {category.heading}
            //     </div>
            //   </div>
            // </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default CategoriesSlider;
