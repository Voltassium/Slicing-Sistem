<template>
    <div class="blog-container">
      <HeaderContent/>
      <main>
        <section class="p-20 bg-gray-100">
          <div class="flex gap-5 ">
            <article class="flex flex-col w-[55%]">
              <div class="flex flex-col items-start my-auto font-medium">
                <span class="  text-gray-800 tracking-[3px]">Featured Post</span>
                <h1 class="mt-5 text-4xl font-bold tracking-wide text-gray-800  ">
                  Step-by-step guide to choosing great font pairs
                </h1>
                <p class="mt-4 text-sm">
                  By <span class="text-amber-300">John Doe</span> l May 23, 2022
                </p>
                <p class="mt-4 text-zinc-500">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
                <button class="gap-3 px-12 py-4 mt-8 text-lg font-bold  text-white bg-blue-600  hover:bg-blue-700">
                  Read More &gt;
                </button>
              </div>
            </article>
            <aside class="flex flex-col ml-5 w-[45%]  ">
              <img loading="lazy" src="../../image/orangBlog.jpg" alt="Featured post illustration" class=" grow w-full aspect-[1.43]" />
            </aside>
          </div>
        </section>
  
        <section class="flex flex-col px-20 mt-16">
          <h2 class=" text-5xl font-bold tracking-tighter  text-gray-800 max-md:text-4xl">All posts</h2>
          <hr class="mt-8 h-px border border-solid bg-zinc-500 border-zinc-500 opacity-[0.32]  " />
          <div class="mt-16 max-w-[1147px]">
            <div class="flex gap-5 ">
              <div class="flex flex-col w-[44%]  ">
                <div class="flex flex-col grow max-md:mt-8">
                  <img loading="lazy" src="../../image/orangBlog2.jpg" alt="Blog post image 1" class=" w-full aspect-[1.54]" />
                  <img loading="lazy" src="../../image/orangBlog3.jpg" alt="Blog post image 2" class=" mt-16 w-full aspect-[1.54]" />
                  <img loading="lazy" src="../../image/orangBlog4.jpg" alt="Blog post image 3" class=" mt-16 w-full aspect-[1.54]" />
                  <img loading="lazy" src="../../image/orangBlog5.jpg" alt="Blog post image 4" class=" mt-16 w-full aspect-[1.54]" />
                  <img loading="lazy" src="../../image/orangBlog2.jpg" alt="Blog post image 5" class=" mt-16 w-full aspect-[1.54]" />
                </div>
              </div>
              <div class="flex flex-col ml-5 w-[56%]  ">
                <div class="flex flex-col  my-auto  font-semibold  text-amber-300   ">
                  <span class=" tracking-[3px]">Startup</span>
                  <h3 class="mt-5 mr-6 text-4xl font-bold tracking-tighter  text-gray-800   ">
                    Design tips for designers that cover everything you need
                  </h3>
                  <p class="mt-4 leading-7 text-zinc-500">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                  </p>
                  <span class=" mt-44 tracking-[3px] ">BUSINESS</span>
                  <h3 class="mt-5 mr-6 text-4xl font-bold tracking-tighter  text-gray-800   ">
                    How to build rapport with your web design clients
                  </h3>
                  <p class="mt-4 leading-7 text-zinc-500">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                  </p>
                  <span class=" mt-48 tracking-[3px]">Startup</span>
                  <h3 class="mt-5 mr-6 text-4xl font-bold tracking-tighter  text-gray-800   ">
                    Logo design trends to avoid in 2022
                  </h3>
                  <p class="mt-4 leading-7 text-zinc-500  ">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                  </p>
                  <span class=" mt-48  tracking-[3px] ">TECHNOLOGY</span>
                  <h3 class=" mt-5 text-4xl font-bold tracking-tighter  text-gray-800  ">
                    8 Figma design systems you can download for free today
                  </h3>
                  <p class="mt-4 leading-7 text-zinc-500  ">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                  </p>
                  <span class=" mt-44  tracking-[3px] ">ECONOMY</span>
                  <h3 class="mt-5 mr-5 text-4xl font-bold tracking-tighter  text-gray-800   ">
                    Font sizes in UI design: The complete guide to follow
                  </h3>
                  <p class="mt-4 leading-7 text-zinc-500  ">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <nav class="flex gap-4 self-center mt-16 ml-3.5 max-w-full font-bold text-center w-[174px] ">
            &lt;<a href="#" class="grow my-auto text-2xl  text-zinc-500"> Prev</a>
            <a href="#" class="text-3xl tracking-tighter  text-gray-800">Next </a>&gt;
          </nav>
        </section>
  
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
      </main>
      
      <JoinContent />
      <FooterContent />
    </div>
  </template>
  
  <script>
  import HeaderContent from '@/components/HeaderContent.vue';
  import FooterContent from '@/components/FooterContent.vue';
  import JoinContent from '@/components/JoinContent.vue';
  export default {
    name: 'BlogComponent',
    components: {
    HeaderContent,
    FooterContent,
    JoinContent
    }
  }
  </script>
  
  <style scoped>
  .blog-container {
    max-width: none !important;
  }
  </style>
  