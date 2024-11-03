<template>
  <div class="flex flex-col bg-white">
    <HeaderContent/>

    <main class="flex flex-col items-center px-20 mt-32 max-md:px-5 max-md:mt-10">
      <!-- Author Header -->
      <div class="flex self-stretch items-center px-64">
                <div class="flex relative justify-end pl-16 items-center">
                    <div
                        class="top-[calc(50%_+_-24px_+_-3px)] flex-shrink-0 flex absolute left-0 h-12 w-12 flex-col items-center">
                        <img src="../../image/JonathanVallem.jpg" class="flex-shrink-0 h-12 w-12" />
                    </div>
                    <div>
                        <a href="author" class="tracking-[-1px] text-[28px]  font-bold leading-10 text-yellow-300">
                            Andrew Jonson
                        </a>
                        <div class="flex-shrink-0 flex h-6 flex-col items-center">
                            <div class="-mb-1">Posted on 27th January 2022</div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="text-slate-800 tracking-[-2px] leading-[64px]  self-stretch pt-2 items-end flex font-bold text-[48px] px-64">
                <p>Step-by-step guide to choosing great font pairs</p>
            </div>
            <div class="pt-[18px] flex self-stretch items-end px-64">
                <div class="flex justify-center gap-x-2 items-center">
                    <div class="flex relative z-0 items-center gap-x-4">
                        <div class="absolute left-0 z-0 w-12 inset-y-0 bg-no-repeat bg-center bg-contain"
                            style="background-image: url('../../image/Icon-Startup.jpg');">
                        </div>
                        <Icon class="z-[2] flex-shrink-0 h-12 w-12" />
                        <div class="text-x-verydarkgrey text-[23px] leading-10 font-bold group-hover:text-white">
                            Startup
                        </div>
                    </div>
                </div>
            </div>

      <!-- Main Image -->
      <img 
        src="../../image/Gambar-BlogPost.png" 
        alt="Font pairing illustration" 
        class="w-full mt-16 max-md:mt-10"
      />

      <!-- Article Content -->
      <article class="mt-16 max-w-[843px] max-md:mt-10">
        <section class="space-y-4">
          <h3 class="text-4xl font-bold text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </h3>
          <p class="text-base leading-7 text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
          </p>
        </section>

        <section class="mt-12 space-y-4">
          <h3 class="text-4xl font-bold text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </h3>
          <p class="text-base leading-7 text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
          </p>
          <p class="text-base leading-7 text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
          </p>
        </section>

        <!-- Bullet Points -->
        <ul class="list-disc list-inside mt-4 space-y-1 text-xl font-bold">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Non blandit massa enim nec scelerisque</li>
          <li>Neque egestas congue quisque egestas</li>
        </ul>

        <p class="mt-6 text-base leading-7 text-zinc-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
        </p>

        <section class="mt-12 space-y-4">
          <h3 class="text-4xl font-bold text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </h3>
          <p class="text-base leading-7 text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
          </p>
        </section>
      </article>

      <!-- Related Articles -->
      <section class="mx-24 py-20">
        <h2 class="text-2xl font-bold mb-8">What to read next</h2>
        
        <div class="flex gap-8">
          <!-- Article Card 1 -->
          <article class="flex-1">
            <img 
              src="../../image/orangBlog2.jpg" 
              alt="Design tips article" 
              class="h-[246px] w-full object-cover"
            />
            <div class="mt-4">
              <p class="text-sm">
                By <a href="#" class="text-yellow-300">John Doe</a>
                <span class="text-neutral-600">l Aug 23, 2022</span>
              </p>
              <h3 class="mt-5 text-xl font-bold text-gray-800">
                A UX Case Study Creating a Studious Environment for Students:
              </h3>
              <p class="mt-4 text-sm text-zinc-500">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </article>

          <!-- Article Card 2 -->
          <article class="flex-1">
            <img 
              src="../../image/orangBlog3.jpg" 
              alt="Design tips article" 
              class="h-[246px] w-full object-cover"
            />
            <div class="mt-4">
              <p class="text-sm">
                By <a href="#" class="text-yellow-300">John Doe</a>
                <span class="text-neutral-600">l Aug 23, 2022</span>
              </p>
              <h3 class="mt-5 text-xl font-bold text-gray-800">
                A UX Case Study Creating a Studious Environment for Students:
              </h3>
              <p class="mt-4 text-sm text-zinc-500">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </article>

          <!-- Article Card 3 -->
          <article class="flex-1">
            <img 
              src="../../image/orangBlog4.jpg" 
              alt="Design tips article" 
              class="h-[246px] w-full object-cover"
            />
            <div class="mt-4">
              <p class="text-sm">
                By <a href="#" class="text-yellow-300">John Doe</a>
                <span class="text-neutral-600">l Aug 23, 2022</span>
              </p>
              <h3 class="mt-5 text-xl font-bold text-gray-800">
                A UX Case Study Creating a Studious Environment for Students:
              </h3>
              <p class="mt-4 text-sm text-zinc-500">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </article>
        </div>
      </section>

      <hr class="w-full mt-16 border-zinc-500 opacity-30 max-md:mt-10" />
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
  name: 'BlogPost',
  components: {
    HeaderContent,
    FooterContent,
    JoinContent
  }
}
</script>