import { Link } from "react-router-dom";

function AboutFlex() {
  return (
    <section class="mt-[3rem] mb-[5rem]  ">
      <div>
        <h1 class="text-3xl font-bold text-center mb-6">
          About <span class="text-blue-600">E-commerce</span>
        </h1>
        <p class="text-center text-lg  mb-10  max-w-6xl mx-auto px-[2rem]">
          Welcome to E-Commerce, your number one destination for high-quality
          products. We’re dedicated to giving you the best shopping experience,
          focusing on reliability, customer service, and uniqueness.
        </p>
      </div>

      <div class=" flex-col  flex justify-center items-center sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-[1rem] mx-[1.5rem]">
        <div class="bg-[#1E2939] shadow-lg rounded-lg p-6  w-full md:w-[35rem]    ">
          <h1 class="text-blue-600 text-2xl font-semibold mb-3">Our Mission</h1>
          <p class="text-white ">
            Our mission is to provide top-quality products at competitive prices
            while ensuring the best customer experience. We strive to be your
            most trusted online shopping destination.
          </p>
        </div>

        <div class="bg-[#1E2939] shadow-lg rounded-lg p-6 w-full md:w-[35rem]  ">
          <h1 class="text-blue-600 text-2xl font-semibold mb-3">Our Vision</h1>
          <p class="text-white">
            We aim to revolutionize online shopping by making it effortless,
            affordable, and enjoyable. Our goal is to bring the best products
            from around the world right to your doorstep.
          </p>
        </div>
      </div>

      <div>
        <h1 class="text-3xl md:text-4xl mt-10 mb-10 font-bold text-center">
          Why <span class="text-blue-600">Choose Us</span>
        </h1>
      </div>

      <div class="flex flex-col sm:flex-col md:flex-row items-stretch justify-center gap-[1rem] mx-[1.5rem]">
        <div class="bg-[#1e2939] rounded-lg p-6 text-center w-full md:w-[23rem] flex flex-col">
          <h1 class="text-[#155dfc] text-2xl mb-2">High-Quality Products</h1>
          <p class="text-white flex-grow">
            We offer a carefully curated selection of premium products.
          </p>
        </div>

        <div class="bg-[#1e2939] rounded-lg p-6 text-center w-full md:w-[23rem] flex flex-col">
          <h1 class="text-[#155dfc] text-2xl mb-2">Fast & Secure Shipping</h1>
          <p class="text-white flex-grow">
            Get your orders delivered quickly and securely.
          </p>
        </div>

        <div class="bg-[#1e2939] rounded-lg p-6 text-center w-full md:w-[23rem] flex flex-col">
          <h1 class="text-[#155dfc] text-2xl mb-2">
            Excellent Customer Support
          </h1>
          <p class="text-white flex-grow">
            Our support team is available 24/7 to assist you.
          </p>
        </div>
      </div>

      <div class="text-center mt-12">
        <h3 class="text-2xl font-semibold mb-6">Start Shoping Now!</h3>
        <p class="text-black mb-10">
          {" "}
          Explore our wide range of products and enjoy an amazing shopping
          experience.
        </p>
       <Link to="/">
          {" "}
          <button class=" hover:bg-blue-700  hover:scale-105 transition-all duration-300 font-semibold py-3 px-6 rounded-lg text-white bg-[#155dfc]">
            Browse Products
          </button>

</Link>      </div>
    </section>
  );
}
export default AboutFlex;
