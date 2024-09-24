// src/components/Navbar.jsx
import  React, { useState, useEffect,useContext, useRef  } from 'react';
import useAsync from "@hooks/useAsync";
import { SidebarContext } from "@context/SidebarContext";
import CategoryServices from "@services/CategoryServices";
import useUtilsFunction from "@hooks/useUtilsFunction";
import { useRouter } from "next/router";

function Navbar() {
    const [navBg, setNavBg] = useState('bg-transparent');
    const router = useRouter();
  
    const { showingTranslateValue } = useUtilsFunction();
    const { isLoading, setIsLoading } = useContext(SidebarContext);
    const { data, error } = useAsync(() => CategoryServices.getShowingCategory());
  
    const handleCategoryClick = (id, category) => {
      const category_name = showingTranslateValue(category)
        ?.toLowerCase()
        .replace(/[^A-Z0-9]+/gi, '-');
  
      router.push(`/search?category=${category_name}&_id=${id}`);
      setIsLoading(!isLoading);
    };
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setNavBg('bg-white shadow-md');
        } else {
          setNavBg('bg-transparent');
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <nav className={`fixed w-full z-50 transition-all duration-300 p-4 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          {/* Logo or Brand Name */}
          <img
            onClick={() => router.push('/')}
            src="/logo/logo-color.png"
            className="cursor-pointer w-20 h-20 object-contain"
            alt="Brand Logo"
          />
  
          {/* Categories in Navbar */}
          <div className="flex items-center space-x-2">
            {data[0]?.children?.slice(1, 5).map((category, index) => (
              <div key={index} className="cursor-pointer group">
                <h3
                  className="
                    relative 
                    text-xs 
                    mt-2 
                    whitespace-nowrap
                    tracking-widest 
                    font-serif 
                    leading-tight      
                    px-2               
                    mx-2                 
                    after:content-['']  
                    after:absolute 
                    after:left-0 
                    after:bottom-0 
                    after:h-0.5 
                    after:w-full      
                    after:bg-current 
                    after:transition-transform 
                    after:duration-500 
                    after:scale-x-0 
                    after:origin-center
                    hover:text-emerald-500 
                    hover:after:scale-x-100
                    w-full                
                    sm:w-auto             
                    sm:inline-block       
                    flex-shrink-0         
                    max-w-xs              
                    text-center     
                    cursor-pointer      
                  "
                  onClick={() => handleCategoryClick(category?._id, category.name)}
                >
                  {showingTranslateValue(category?.name).toUpperCase()}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </nav>
    );
  }
  
  export default React.memo(Navbar);
