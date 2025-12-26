import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <>
      <footer className="bg-[#101828] pt-[3rem] mt-[0rem]">
        <div class="sm:flex sm:justify-evenly  sm:gap-[2rem] sm:flex-wrap  gap-[3rem] pl-[1rem]  ">
          <div class="w-[20rem] mt-[2rem] ">
            <h1 class="text-2xl text-white  font-bold mb-3 ">E-Commerce</h1>
            <p class="text-sm text-gray-400  w-[20rem] ">
              Your one-stop shop for the latest trends in fashion, electronics,
              and lifestyle. Shop smart. Shop easy.
            </p>
          </div>
          <div class="w-[20rem] mt-[2rem]">
            <h1 class="text-2xl text-white  font-semibold mb-3">Quick Links</h1>

            <ul class="text-white flex flex-col gap-[0.5rem]">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Dashboard</li>
            </ul>
          </div>

          <div class="text-white w-[20rem] mt-[2rem]">
            <h1 class="text-2xl text-white  font-bold mb-3">
              Customer Service
            </h1>
            <ul class="flex flex-col gap-[0.5rem]">
              <li>Privacy Policy</li>

              <li>Terms & Conditions</li>
              <li>Help & Support</li>
            </ul>
          </div>

          <div class="w-[20rem] mt-[2rem]">
            <h3 class="text-2xl text-white  font-semibold mb-4">Contact Us</h3>
            <ul class="text-white flex flex-col gap-[0.7rem]">
              <li class="flex gap-[0.4rem] items-center">
                <i class="fa-solid fa-location-dot text-[#155dfc]"></i>
                Lahore,Pakistan
              </li>
              <li class="flex items-center gap-[0.4rem]">
                <i class="fa-solid fa-envelope text-[#155dfc]"></i>
                support@gmail.com
              </li>
              <li class="flex items-center gap-[0.4rem]">
                {" "}
                <i class="fa-solid fa-phone text-[#155dfc]"></i>+92 124989101
              </li>

              <div class=" flex gap-[0.5rem] mt-[0.5rem] ">
                <li>
                  <i class="fa-brands fa-facebook text-white text-[1.4rem]"></i>
                </li>
                <li>
                  <i class="fa-brands fa-instagram text-white text-[1.4rem]"></i>
                </li>
                <li>
                  <i class="fa-brands fa-twitter text-white text-[1.4rem] "></i>
                </li>
                <li>
                  <i class="fa-brands fa-github text-white text-[1.4rem]"></i>
                </li>
              </div>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400 pb-[3rem] ">
          <p>© 2025 E-Commerce. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
