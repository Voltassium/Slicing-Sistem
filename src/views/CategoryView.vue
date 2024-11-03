<template>
  <div class="flex flex-col bg-white">
    <HeaderContent/>

    <main>
      <!-- Hero Section -->
      <section class="flex flex-col items-center bg-gray-100 p-20 text-center max-md:px-5">
        <div class="max-w-[472px]">
          <h1 class="text-6xl font-bold text-gray-800 max-md:text-4xl">Business</h1>
          <p class="mt-4 text-zinc-500 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <p class="mt-8 font-medium uppercase tracking-[3px]">Blog > Business</p>
        </div>
      </section>

      <!-- Main Content -->
      <section class="px-20 mt-32 max-md:px-5 max-md:mt-10">
        <div class="flex gap-8 max-md:flex-col">
          <!-- Articles -->
          <div class="w-2/3 space-y-14 max-md:w-full">
            <div class="flex gap-8 max-md:flex-col">
              <img src="../../image/Gambar-Category.png" alt="Business visual 1" class="w-1/3 max-md:w-full" />
              <article class="w-2/3 max-md:w-full">
                <p class="text-amber-300 font-semibold uppercase tracking-[3px]">Business</p>
                <h2 class="mt-5 text-4xl font-bold text-gray-800">Top 6 free website mockup tools 2022</h2>
                <p class="mt-4 text-zinc-500 leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                </p>
              </article>
            </div>

            <div class="flex gap-8 max-md:flex-col">
              <img src="../../image/Gambar-Category.png" alt="Business visual 2" class="w-1/3 max-md:w-full" />
              <article class="w-2/3 max-md:w-full">
                <p class="text-amber-300 font-semibold uppercase tracking-[3px]">Business</p>
                <h2 class="mt-5 text-4xl font-bold text-gray-800">Step-by-step guide to choosing great font pairs</h2>
                <p class="mt-4 text-zinc-500 leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                </p>
              </article>
            </div>

            <div class="flex gap-8 max-md:flex-col">
              <img src="../../image/Gambar-Category.png" alt="Business visual 3" class="w-1/3 max-md:w-full" />
              <article class="w-2/3 max-md:w-full">
                <p class="text-amber-300 font-semibold uppercase tracking-[3px]">Business</p>
                <h2 class="mt-5 text-4xl font-bold text-gray-800">Ten free foogle fonts that you should use</h2>
                <p class="mt-4 text-zinc-500 leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                </p>
              </article>
            </div>

            <div class="flex gap-8 max-md:flex-col">
              <img src="../../image/Gambar-Category.png" alt="Business visual 4" class="w-1/3 max-md:w-full" />
              <article class="w-2/3 max-md:w-full">
                <p class="text-amber-300 font-semibold uppercase tracking-[3px]">Business</p>
                <h2 class="mt-5 text-4xl font-bold text-gray-800">What did I learn from doing 50+ design sprints</h2>
                <p class="mt-4 text-zinc-500 leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                </p>
              </article>
            </div>
          </div>

          <!-- Categories & Tags -->
          <aside class="w-1/3 max-md:w-full">
            <h3 class="text-4xl font-bold mb-10">Categories</h3>
            
            <div class="space-y-6">
              <div class="flex gap-4 p-6 border-2 border-stone-300 transition-colors hover:bg-blue-600 hover:text-white hover:border-blue-600 cursor-pointer group">
                <img src="../../image/Icon-Startup.png" alt="Startup icon" class="w-12" />
                <span class="text-3xl my-auto">Startup</span>
              </div>

              <div class="flex gap-4 p-6 border-2 border-stone-300 transition-colors hover:bg-blue-600 hover:text-white hover:border-blue-600 cursor-pointer group">
                <img src="../../image/Icon-Business.png" alt="Business icon" class="w-12" />
                <span class="text-3xl my-auto">Business</span>
              </div>

              <div class="flex gap-4 p-6 border-2 border-stone-300 transition-colors hover:bg-blue-600 hover:text-white hover:border-blue-600 cursor-pointer group">
                <img src="../../image/Icon-Economy.png" alt="Economy icon" class="w-12" />
                <span class="text-3xl my-auto">Economy</span>
              </div>

              <div class="flex gap-4 p-6 border-2 border-stone-300 transition-colors hover:bg-blue-600 hover:text-white hover:border-blue-600 cursor-pointer group">
                <img src="../../image/Icon-Technology.png" alt="Technology icon" class="w-12" />
                <span class="text-3xl my-auto">Technology</span>
              </div>
            </div>

            <div class="mt-12">
              <h3 class="text-4xl font-bold mb-6">All Tags</h3>
              <div class="flex flex-wrap gap-4">
                <button class="px-10 py-2 rounded-3xl border-2 border-zinc-500 transition-colors hover:bg-blue-600 hover:text-white hover:border-blue-600">
                  Business
                </button>
                <button class="px-10 py-2 rounded-3xl border-2 border-zinc-500 transition-colors hover:bg-blue-600 hover:text-white hover:border-blue-600">
                  Experience
                </button>
                <button class="px-10 py-2 rounded-3xl border-2 border-zinc-500 transition-colors hover:bg-blue-600 hover:text-white hover:border-blue-600">
                  Screen
                </button>
                <button class="px-10 py-2 rounded-3xl border-2 border-zinc-500 transition-colors hover:bg-blue-600 hover:text-white hover:border-blue-600">
                  Technology
                </button>
                <button class="px-10 py-2 rounded-3xl border-2 border-zinc-500 transition-colors hover:bg-blue-600 hover:text-white hover:border-blue-600">
                  Marketing
                </button>
                <button class="px-10 py-2 rounded-3xl border-2 border-zinc-500 transition-colors hover:bg-blue-600 hover:text-white hover:border-blue-600">
                  Life
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>

    <FooterContent />
  </div>
</template>

<script>
import FooterContent from '@/components/FooterContent.vue';
import HeaderContent from '@/components/HeaderContent.vue';

export default {
  name: 'BusinessBlog',
  components: {
    FooterContent,
    HeaderContent,
  },
}
</script>