<template>
  <footer class="flex flex-col justify-center px-20 py-14 mt-32 w-full bg-gray-800 max-md:px-5 max-md:mt-10">
    <div class="flex flex-wrap justify-between items-start w-full text-base leading-7 text-white">
      <img loading="lazy" src="../../image/Finsweet.jpg" alt="Company Logo" class="object-contain w-[140px] aspect-[5]" />
      <nav class="flex gap-6">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/about">About us</a>
        <a href="/contact">Contact us</a>
        <a href="/privacy">Privacy Policy</a>
      </nav>
    </div>
    <div class="px-16 py-20 mt-14 w-full bg-white bg-opacity-10">
      <div class="flex gap-5 max-md:flex-col">
        <div class="w-6/12">
          <h2 class="text-4xl font-bold tracking-tighter leading-10 text-white max-md:mt-10">
            Subscribe to our newsletter to get the latest updates and news
          </h2>
        </div>
        <div class="flex flex-col ml-5 w-6/12 max-md:ml-0">
          <form class="flex flex-wrap gap-6 mt-1 w-full">
            <label for="emailInput" class="sr-only">Enter Your Email</label>
            <input id="emailInput" type="email" placeholder="Enter Your Email" class="grow px-6 py-6 text-base leading-loose text-white bg-gray-800 border border-solid border-neutral-600" />
            <button type="submit" class="px-12 py-4 text-lg font-bold leading-none text-white bg-blue-600 hover:bg-blue-800">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center mt-12 text-base leading-7 text-white">
      <address class="opacity-70 not-italic">Finstreet 118 2561 Fintown</address>
      <div class="flex justify-center space-x-6 mt-4">
        <a href="#" class="inline-block w-6 h-6">
          <img src="../../image/icon-facebook.png" alt="facebook"
            class="block w-full h-full bg-no-repeat bg-center bg-contain">
        </a>
    
        <a href="#" class="inline-block w-6 h-6">
          <img src="../../image/icon-twitter.png" alt="twitter"
            class="block w-full h-full bg-no-repeat bg-center bg-contain">
        </a>
    
        <a href="#" class="inline-block w-6 h-6">
          <img src="../../image/icon-instagram.png" alt="Instagram"
            class="block w-full h-full bg-no-repeat bg-center bg-contain">
        </a>
    
        <a href="#" class="inline-block w-6 h-6">
          <img src="../../image/icon-linkedin.png" alt="linkedin"
            class="block w-full h-full bg-no-repeat bg-center bg-contain">
        </a>
      </div>
    </div>
    <p class="text-base leading-7 text-white opacity-70">
      Hello@finsweet.com 020 7993 2905
    </p>
  </footer>
</template>