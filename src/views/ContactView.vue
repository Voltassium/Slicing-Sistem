<template>
  <div>
    <HeaderContent/>
    <main class="flex flex-col items-center bg-white">
      <!-- Header Section -->
      <section class="mt-32 max-md:mt-10">
        <h1 class="text-base font-black text-center text-gray-800 uppercase tracking-[3px]">
          Contact us
        </h1>
        <h2 class="mt-3 text-5xl font-bold text-center text-gray-800 max-md:text-4xl">
          Let's Start a Conversation
        </h2>
        <p class="mt-6 text-base leading-7 text-center text-zinc-500 w-[768px] max-md:w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
        </p>
      </section>

      <!-- Contact Info Box -->
      <section class="p-12 mt-16 w-[768px] bg-amber-300 max-md:p-5 max-md:mt-10 max-md:w-full">
        <div class="flex gap-5 max-md:flex-col">
          <!-- Working Hours -->
          <div class="w-1/2 max-md:w-full">
            <h3 class="text-sm text-neutral-600 opacity-60">Working hours</h3>
            <hr class="my-4 opacity-10 border-neutral-600" />
            <p class="text-xl font-bold text-neutral-600">Monday To Friday</p>
            <p class="text-xl font-bold text-neutral-600">9:00 AM to 8:00 PM</p>
            <p class="text-base leading-7 text-neutral-600 opacity-60">Our Support Team is available 24/7</p>
          </div>

          <!-- Contact Details -->
          <div class="w-1/2 max-md:w-full">
            <h3 class="text-sm text-neutral-600 opacity-60">Contact Us</h3>
            <hr class="my-4 opacity-10 border-neutral-600" />
            <p class="text-xl font-bold text-neutral-600">020 7993 2905</p>
            <p class="text-base leading-7 text-neutral-600 opacity-60">hello@finsweet.com</p>
          </div>
        </div>
      </section>

      <!-- Contact Form -->
      <form class="w-full max-w-[768px] space-y-4 mt-8">
        <!-- Full Name -->
        <div class="border border-zinc-500 rounded-sm">
          <input 
            type="text" 
            placeholder="Full Name"
            class="w-full p-6 bg-transparent outline-none placeholder-slate-800"
          />
        </div>

        <!-- Email -->
        <div class="border border-zinc-500 rounded-sm">
          <input 
            type="email" 
            placeholder="Your Email"
            class="w-full p-6 bg-transparent outline-none placeholder-slate-800"
          />
        </div>

        <!-- Dropdowns -->
        <div class="flex gap-4 max-md:flex-col">
          <div class="flex-1 border border-zinc-500 p-6">
            <select class="w-full bg-transparent outline-none">
              <option value="" selected>Province</option>
              <option>Jawa Tengah</option>
              <option>Jawa Barat</option>
              <option>Jawa Timur</option>
            </select>
          </div>

          <div class="flex-1 border border-zinc-500 p-6">
            <select class="w-full bg-transparent outline-none">
              <option value="" selected>City</option>
              <option>Surakarta</option>
              <option>Semarang</option>
              <option>Yogyakarta</option>
              <option>Karanganyar</option>
              <option>Pekalongan</option>
              <option>Salatiga</option>
              <option>Tegal</option>
            </select>
          </div>
        </div>

        <!-- Message -->
        <div class="border border-zinc-500 rounded-sm">
          <textarea 
            placeholder="Message"
            class="w-full p-6 h-40 bg-transparent outline-none resize-none placeholder-slate-800"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button 
          type="submit"
          class="w-full p-4 text-2xl font-bold text-gray-800 bg-blue-600 hover:bg-yellow-600 transition-colors"
        >
          Send Message
        </button>
      </form>
    </main>

    <FooterContent />
  </div>
</template>

<script>
import HeaderContent from '@/components/HeaderContent.vue';
import FooterContent from '@/components/FooterContent.vue';

export default {
  name: 'ContactPage',
  components: {
    HeaderContent,
    FooterContent
  }
}
</script>