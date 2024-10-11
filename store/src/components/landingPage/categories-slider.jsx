// src/components/CategoriesSlider.jsx
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { DirectionAwareHover } from '@components/ui/direction-aware-hover';
import useAsync from '@hooks/useAsync';
import CategoryServices from "@services/CategoryServices";
import 'keen-slider/keen-slider.min.css';

function CategoriesSlider({ attributes }) {
  const { data, error, loading } = useAsync(
    CategoryServices.getShowingCategory
  );

  // Placeholder categories in case data is not yet loaded
  const placeholderCategories = [
    { name: 'Personalized Jewellery', image: 'https://assets.winni.in/product/primary/2021/10/55079.png?dpr=2&w=220' },
    { name: 'Necklaces', image: 'https://designbygras.com/pub/media/amasty/webp/catalog/product/cache/287b86e0437bbeae83db313edb2f4524/6/1/6176010-m1_jpg.webp' },
    { name: 'Earrings', image: 'https://www.shinez.in/cdn/shop/files/emanka-silver-earrings-for-women-shinez-by-baxi-jewellers-1.jpg?v=1713694745' },
    { name: 'Anklets', image: 'https://m.media-amazon.com/images/I/71PyYJF8qfL._AC_UY300_.jpg' },
    { name: 'Pendants', image: 'https://images.diamondstuds.com/productimages/medium/PCU075-1W-M4.jpg' },


  ];

  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    responsive: [
      { breakpoint: 1090, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  // Use fetched categories if available, otherwise fallback to placeholders
  const categories = placeholderCategories || data?.[0]?.children  ;

  return (
    <section id="categories" className="relative py-12 overflow-y-hidden overflow-x-hidden">
      <h2 className="text-3xl font-serif text-center tracking-widest mb-8">
        Shop by Category
      </h2>
      <div className="w-full mx-auto px-auto">
        <Slider {...settings}>
          {categories.map((category, index) => (
            <DirectionAwareHover key={index} children={category.name?.en || category.name} imageUrl={category.icon || category.image} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default CategoriesSlider;
