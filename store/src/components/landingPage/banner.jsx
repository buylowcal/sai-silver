// src/components/Banner.jsx
function Banner() {
    return (
      <section
        id="home"
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/banner.png')" }}
      >
    
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          {/* <h1 className="text- text-5xl md:text-7xl font-bold">
            Elegance Defined
          </h1> */}
        </div>
      </section>
    );
  }
  
  export default Banner;
  