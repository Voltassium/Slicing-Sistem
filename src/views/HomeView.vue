<template>
  <div class="flex overflow-hidden flex-col items-center bg-white">
    <HeaderContent/>

    <main>
      <section class="flex relative flex-col self-stretch w-full text-base font-bold text-white min-h-[720px] max-md:max-w-full">
        <img loading="lazy" src="../../image/Gambar-Hero.png" alt="Background image for hero section" class="object-cover absolute inset-0 size-full" />
        <div class="flex relative flex-col items-start px-20 py-40 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
          <p class="font-semibold leading-none uppercase tracking-[3px]">
            <span class="font-medium">Posted on </span>
            <span class="font-black">startup</span>
          </p>
          <h1 class="mt-6 text-6xl tracking-tighter leading-[64px] w-[803px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
            Step-by-step guide to choosing great font pairs
          </h1>
          <p class="mt-6 leading-7">
            By <span class="text-blue-600">James West</span> | May 23, 2022
          </p>
          <p class="mt-4 leading-7 w-[599px] max-md:max-w-full">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <a href="#read-more" class="gap-3 px-12 py-4 mt-12 mb-0 text-lg leading-none bg-blue-600 max-md:px-5 max-md:mt-10 max-md:mb-2.5">
            Read More &gt;
          </a>
        </div>
      </section>

      <section class="flex flex-col self-stretch px-20 mt-32 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 justify-between text-4xl font-bold leading-none text-gray-800 max-md:mr-0.5 max-md:max-w-full">
          <h2 class="tracking-tighter">Featured Post</h2>
          <h2 class="tracking-tighter">All Posts</h2>
          <a href="#view-all" class="my-auto text-base leading-7 text-amber-300">View All</a>
        </div>
        <div class="mt-8 max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col">
            <article class="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col items-start p-8 mx-auto w-full font-bold border border-solid border-zinc-500 max-md:px-5 max-md:mt-8 max-md:max-w-full">
                <img loading="lazy" src="../../image/Gambar-Post.jpg" alt="Featured post image" class="object-contain self-stretch w-full aspect-[1.9] max-md:max-w-full" />
                <p class="mt-8 text-sm font-medium leading-none">
                  By <span class="text-amber-300">John Doe</span> l May 23, 2022
                </p>
                <h3 class="self-stretch mt-4 text-3xl tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </h3>
                <p class="mt-4 text-base leading-7 text-zinc-500 max-md:max-w-full">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
                <a href="#read-more" class="gap-3 px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600 max-md:px-5">
                  Read More &gt;
                </a>
              </div>
            </article>
            <aside class="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow max-md:mt-8 max-md:max-w-full">
                <article class="flex flex-col items-start py-7 pr-20 pl-8 bg-white max-md:px-5 max-md:max-w-full">
                  <p class="text-sm font-medium leading-none ">
                    By <span class="text-amber-300">John Deo</span> l Aug 23, 2021
                  </p>
                  <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                    8 Figma design systems that you can download for free today.
                  </h3>
                </article>
                <article class="flex flex-col items-start py-7 pr-20 pl-8 bg-orange-50 max-md:px-5 max-md:max-w-full">
                  <p class="text-sm font-medium leading-none ">
                    By <span class="text-amber-300">John Doe</span> Aug 23, 2021
                  </p>
                  <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                    8 Figma design systems that you can download for free today.
                  </h3>
                </article>
                <article class="flex flex-col items-start py-7 pr-20 pl-8 bg-white max-md:px-5 max-md:max-w-full">
                  <p class="text-sm font-medium leading-none ">
                    By <span class="text-amber-300">John Doe</span> Aug 23, 2021
                  </p>
                  <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                    8 Figma design systems that you can download for free today.
                  </h3>
                </article>
                <article class="flex flex-col items-start py-7 pr-20 pl-8 bg-white max-md:px-5 max-md:max-w-full">
                  <p class="text-sm font-medium leading-none">
                    By <span class="text-amber-300">John Doe</span> Aug 23, 2021
                  </p>
                  <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                    8 Figma design systems that you can download for free today.
                  </h3>
                </article>
              </div>
            </aside>
          </div>
        </div>
        <img loading="lazy" src="../../image/pattern.jpg" alt="Decorative image" class="object-contain self-end mt-32 aspect-[45.45] max-w-[1061px] w-[1061px] max-md:mt-10 max-md:mr-0.5 max-md:max-w-full" />
      </section>

      <section class="px-20 py-24 bg-gray-100 max-md:px-5 max-md:mr-0.5 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow text-base font-bold text-gray-800 max-md:mt-10 max-md:max-w-full">
              <h2 class="self-start font-semibold leading-none uppercase tracking-[3px]">ABOUT US</h2>
              <p class="mt-6 text-4xl tracking-tighter leading-10 max-md:max-w-full">
                We are a community of content writers who share their learnings
              </p>
              <p class="mt-4 mr-6 leading-7 text-zinc-500 max-md:mr-2.5 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="/about" class="self-start mt-7 text-lg leading-8 text-amber-300">Read More &gt;</a>
            </div>
          </div>
          <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col items-start text-base text-gray-800 max-md:mt-10 max-md:max-w-full">
              <h2 class="font-semibold leading-none uppercase tracking-[3px]">Our mision</h2>
              <p class="mt-6 text-3xl font-bold tracking-tighter leading-10">
                Creating valuable content for creatives all around the world
              </p>
              <p class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <h2 class="mt-32 text-4xl font-bold tracking-tighter text-gray-800 max-md:mt-10 text-center w-full">
        Choose A Category
      </h2>

      <section class="flex flex-col px-20 mt-12 w-full max-md:px-5 max-md:mt-10">
        <div class="flex gap-5 max-md:flex-col">
          <article class="w-3/12 max-md:w-full group">
            <div class="flex flex-col p-8 border border-zinc-500 h-full transition-colors duration-300 group-hover:bg-blue-600 max-md:mt-8">
              <img loading="lazy" src="../../image/Icon-Business.png" alt="Business icon" class="w-12 aspect-square object-contain" />
              <h3 class="mt-4 text-3xl font-bold tracking-tighter text-gray-800 group-hover:text-white">Business</h3>
              <p class="mt-1 text-base leading-7 text-zinc-500 group-hover:text-white">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </article>

          <article class="w-3/12 max-md:w-full group">
            <div class="flex flex-col p-8 border border-zinc-500 h-full transition-colors duration-300 group-hover:bg-blue-600 max-md:mt-8">
              <img loading="lazy" src="../../image/Icon-Startup.png" alt="Startup icon" class="w-12 aspect-square object-contain" />
              <h3 class="mt-4 text-3xl font-bold tracking-tighter text-gray-800 group-hover:text-white">Startup</h3>
              <p class="mt-1 text-base leading-7 text-zinc-500 group-hover:text-white">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </article>

          <article class="w-3/12 max-md:w-full group">
            <div class="flex flex-col p-8 border border-zinc-500 h-full transition-colors duration-300 group-hover:bg-blue-600 max-md:mt-8">
              <img loading="lazy" src="../../image/Icon-Economy.png" alt="Economy icon" class="w-12 aspect-square object-contain" />
              <h3 class="mt-4 text-3xl font-bold tracking-tighter text-gray-800 group-hover:text-white">Economy</h3>
              <p class="mt-1 text-base leading-7 text-zinc-500 group-hover:text-white">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </article>

          <article class="w-3/12 max-md:w-full group">
            <div class="flex flex-col p-8 border border-zinc-500 h-full transition-colors duration-300 group-hover:bg-blue-600 max-md:mt-8">
              <img loading="lazy" src="../../image/Icon-Technology.png" alt="Technology icon" class="w-12 aspect-square object-contain" />
              <h3 class="mt-4 text-3xl font-bold tracking-tighter text-gray-800 group-hover:text-white">Technology</h3>
              <p class="mt-1 text-base leading-7 text-zinc-500 group-hover:text-white">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section class="mt-32 relative w-full h-[600px]">
        <!-- Background Image -->
        <div class="absolute w-1/2 left-0 h-full bg-[url('../../image/Gambar-SpecialPost.jpg')] bg-cover bg-center"/>
        
        <!-- Content Container -->
        <div class="max-w-screen-xl mx-auto h-full relative">
          <!-- White Content Box -->
          <div class="absolute right-[40%] top-1/2 -translate-y-1/2 bg-white p-16 max-w-[600px]">
            <h2 class="text-sm font-semibold text-gray-800 uppercase tracking-[3px]">
              Why we started
            </h2>
            
            <h3 class="text-4xl font-bold text-gray-800 leading-[56px] tracking-tight pt-2">
              It started out as a simple idea and evolved into our passion
            </h3>
            
            <p class="text-zinc-500 leading-7 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip.
            </p>
            
            <a href="#" class="inline-block bg-blue-600 hover:bg-yellow-500 text-white font-bold px-12 py-4 transition-colors mt-7">
              Discover our story >
            </a>
          </div>
        </div>
      </section>
      <section class="mt-32 text-4xl font-bold tracking-tighter text-gray-800 max-md:mt-10 text-center w-full">
        <h2 class="mt-32 text-4xl font-bold tracking-tighter leading-none text-gray-800 max-md:mt-10 text-center w-full">
          List of Authors
        </h2>
      </section>
      
      <section class="mt-12 max-w-screen-xl mx-auto px-20 max-md:px-5">
        <div class="flex gap-5 max-md:flex-col">
          <!-- Floyd Miles -->
          <article class="flex-1 max-md:w-full">
            <div class="flex flex-col items-center p-10 bg-zinc-100">
              <img 
                loading="lazy" 
                src="../../image/FloydMiles.jpg" 
                alt="Floyd Miles" 
                class="w-32 rounded-full aspect-square"
              />
              <h3 class="mt-5 text-2xl font-bold text-gray-800">Floyd Miles</h3>
              <p class="text-sm text-center text-zinc-500">Content Writer @Company</p>
              <div class="flex gap-6 mt-4">
                <a href="#" class="w-6 h-6">
                  <img 
                    src="../../image/icon-facebook.png" 
                    alt="facebook"
                    class="w-full h-full"
                  >
                </a>
                <a href="#" class="w-6 h-6">
                  <img 
                    src="../../image/icon-twitter.png" 
                    alt="twitter"
                    class="w-full h-full"
                  >
                </a>
                <a href="#" class="w-6 h-6">
                  <img 
                    src="../../image/icon-instagram.png" 
                    alt="Instagram"
                    class="w-full h-full"
                  >
                </a>
                <a href="#" class="w-6 h-6">
                  <img 
                    src="../../image/icon-linkedin.png" 
                    alt="linkedin"
                    class="w-full h-full"
                  >
                </a>
              </div>
            </div>
          </article>

          <!-- Dianne Russell -->
          <article class="flex-1 max-md:w-full">
            <div class="flex flex-col items-center p-10 bg-orange-50">
              <img 
                loading="lazy" 
                src="../../image/DianneRussell.jpg" 
                alt="Dianne Russell" 
                class="w-32 rounded-full aspect-square"
              />
              <h3 class="mt-5 text-2xl font-bold text-gray-800">Dianne Russell</h3>
              <p class="text-sm text-center text-zinc-500">Content Writer @Company</p>
              <div class="flex gap-6 mt-4">
                <a href="#" class="w-6 h-6">
                  <img 
                    src="../../image/icon-facebook.png" 
                    alt="facebook"
                    class="w-full h-full"
                  >
                </a>
                <a href="#" class="w-6 h-6">
                  <img 
                    src="../../image/icon-twitter.png" 
                    alt="twitter"
                    class="w-full h-full"
                  >
                </a>
                <a href="#" class="w-6 h-6">
                  <img 
                    src="../../image/icon-instagram.png" 
                    alt="Instagram"
                    class="w-full h-full"
                  >
                </a>
                <a href="#" class="w-6 h-6">
                  <img 
                    src="../../image/icon-linkedin.png" 
                    alt="linkedin"
                    class="w-full h-full"
                  >
                </a>
              </div>
            </div>
          </article>

          <article class="flex-1 max-md:w-full">
            <div class="flex flex-col items-center p-10 bg-zinc-100">
              <img 
                loading="lazy" 
                src="../../image/JennyWilson.jpg" 
                alt="Jenny Wilson" 
                class="w-32 rounded-full aspect-square"
              />
              <h3 class="mt-5 text-2xl font-bold text-gray-800">Jenny Wilson</h3>
              <p class="text-sm text-center text-zinc-500">Content Writer @Company</p>
              <div class="flex gap-6 mt-4">
                <a href="#" class="w-6 h-6">
                  <img 
                    src="../../image/icon-facebook.png" 
                    alt="facebook"
                    class="w-full h-full"
                  >
                </a>
                <a href="#" class="w-6 h-6">
                  <img 
                    src="../../image/icon-twitter.png" 
                    alt="twitter"
                    class="w-full h-full"
                  >
                </a>
                <a href="#" class="w-6 h-6">
                  <img 
                    src="../../image/icon-instagram.png" 
                    alt="Instagram"
                    class="w-full h-full"
                  >
                </a>
                <a href="#" class="w-6 h-6">
                  <img 
                    src="../../image/icon-linkedin.png" 
                    alt="linkedin"
                    class="w-full h-full"
                  >
                </a>
              </div>
            </div>
          </article>

          <!-- Leslie Alexander -->
          <article class="flex-1 max-md:w-full">
            <div class="flex flex-col items-center p-10 bg-zinc-100">
              <img 
                loading="lazy" 
                src="../../image/LeslieAlexander.jpg" 
                alt="Leslie Alexander" 
                class="w-32 rounded-full aspect-square"
              />
              <h3 class="mt-5 text-1xl font-bold text-gray-800">Leslie Alexander</h3>
              <p class="text-sm text-center text-zinc-500">Content Writer @Company</p>
              <div class="flex gap-6 mt-4">
                <a href="#" class="w-6 h-6">
                  <img 
                    src="../../image/icon-facebook.png" 
                    alt="facebook"
                    class="w-full h-full"
                  >
                </a>
                <a href="#" class="w-6 h-6">
                  <img 
                    src="../../image/icon-twitter.png" 
                    alt="twitter"
                    class="w-full h-full"
                  >
                </a>
                <a href="#" class="w-6 h-6">
                  <img 
                    src="../../image/icon-instagram.png" 
                    alt="Instagram"
                    class="w-full h-full"
                  >
                </a>
                <a href="#" class="w-6 h-6">
                  <img 
                    src="../../image/icon-linkedin.png" 
                    alt="linkedin"
                    class="w-full h-full"
                  >
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

        <section class="flex flex-wrap gap-10 mt-24 w-full max-w-screen-xl mx-auto px-20 text-zinc-500 max-md:mt-10 max-md:px-5 max-md:max-w-full">
              <div class="w-full flex flex-col mb-24">
              <div class="min-[1227px]:flex-nowrap gap-x-12 flex flex-wrap justify-center flex-grow gap-y-5 items-end">
                  <div class="tracking-[0px] text-zinc-500 self-stretch">
                      <div class="font-inter leading-5 text-sm w-20">We are</div>
                      <div class="font-sen font-bold leading-8 text-2xl">Featured in</div>
                  </div>
                  <div class="pl-[13px] flex justify-end pb-2">
                      <img src="../../image/Logo-Perusahaan1.png" class="flex-shrink-0 h-8 w-40" />
                  </div>
                  <div class="flex pl-0.5 pb-2 flex-col items-center">
                      <img src="../../image/Logo-Perusahaan2.png" class="w-[136px] flex-shrink-0 h-8" />
                  </div>
                  <div class="flex pb-2 flex-col items-center">
                      <img src="../../image/Logo-Perusahaan3.png" class="w-[135px] flex-shrink-0 h-8" />
                  </div>
                  <div class="flex pb-2 flex-col items-center">
                      <img src="../../image/Logo-Perusahaan4.png" class="flex-shrink-0 h-8 w-40" />
                  </div>
                  <div class="flex pb-2 flex-col items-center">
                      <img src="../../image/Logo-Perusahaan5.png" class="w-[136px] flex-shrink-0 h-8" />
                  </div>
              </div>
          </div>
        </section>

      <div class="w-full flex flex-col">
        <div class="pb-[74px] bg-[floralwhite] flex justify-center pt-20 flex-grow items-center px-28">
            <div
                class="min-[1270px]:flex-nowrap tracking-[0px] text-slate-800 flex flex-wrap justify-center h-80 flex-grow gap-x-20 gap-y-20 items-end">
                <div class="flex pb-24 flex-col items-center">
                    <div class="font-inter w-[349px] flex flex-col gap-y-3 items-start">
                        <div class="tracking-[3px] uppercase font-semibold leading-5">
                            TESTIMONIALs
                        </div>
                        <div
                            class="tracking-[-2px] leading-[48px] font-sen w-[345px] font-bold text-4xl items-start flex">
                            <p>What people say about our blog</p>
                        </div>
                        <div class="[max-width:349px] pt-1 self-stretch">
                            <div class="leading-7 items-center flex">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="[min-height:310px] flex-shrink-0 h-80 w-px border-l"></div>
                <div
                    class="min-[1270px]:flex-nowrap pl-[15px] flex flex-wrap justify-center gap-x-px gap-y-px items-end">
                    <div class="flex pb-px flex-col items-center">
                        <div
                            class="font-sen w-[469px] gap-y-[121px] font-bold leading-8 text-2xl flex flex-col items-start">
                            <div class="items-start flex self-stretch">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            <div class="min-[1270px]:flex-nowrap flex flex-wrap gap-x-36 gap-y-6 items-start">
                                <div class="flex justify-center gap-x-4 items-start">
                                    <div class="flex-shrink-0 flex h-12 w-12 flex-col items-center">
                                        <img src="../../image/JonathanVallem.jpg" class="flex-shrink-0 h-12 w-12" />
                                    </div>
                                    <div class="flex flex-col items-center text-base">
                                        <div>
                                            <div>Jonathan Vallem</div>
                                            <div class="text-zinc-500 text-sm leading-7">
                                                New york, USA
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex gap-x-6 pt-4">
                                    <button
                                        class="rounded-full border border-gray-300 bg-white hover:bg-gray-800 hover:text-zinc-500 flex items-center justify-center w-10 h-10  duration-150 ease-in-out">
                                        < </button>
                                            <button
                                                class="rounded-full border border-gray-300 bg-white hover:bg-gray-800 hover:text-zinc-500 flex items-center justify-center w-10 h-10  duration-150 ease-in-out">
                                                >
                                            </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

      <div class="flex flex-col items-center px-20 py-20 mt-12 w-full max-md:px-5 max-md:mt-10">
        <h2 class="mt-5 text-4xl font-bold tracking-tighter leading-10 text-center text-gray-800 w-[414px] max-md:mt-10">
        Join our team to be a part of our story
      </h2>
      <p class="mt-4 text-base leading-7 text-center text-zinc-500 w-[405px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>
      <a href="#join-now" class="gap-3 px-12 py-4 mt-8 text-lg font-bold leading-none text-white bg-blue-600 max-md:px-5">
        Join Now
      </a>
      </div>
      

    </main>

    <FooterContent />
  </div>
</template>

<script>
import HeaderContent from '@/components/HeaderContent.vue';
import FooterContent from '@/components/FooterContent.vue';

export default {
  name: 'HomePage',
  components: {
    HeaderContent,
    FooterContent
  }
}
</script>
