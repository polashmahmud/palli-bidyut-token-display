<script setup>
import {ref} from "vue";

const token = ref('');

const newToken = ref([]);

const tokenIndex = ref(0);

const generate = () => {
  const regex = /\b\d{20}\b|\b\d{4}-\d{4}-\d{4}-\d{4}-\d{4}\b/g;

  const numbers = token.value.match(regex);

  function formatTokenNumbers(numbers) {
    return numbers.map(number => {
      if (number.includes("-")) {
        return number; // Return the number as it is
      } else {
        // Otherwise, format it with dashes
        return number.match(/.{1,4}/g).join(' - ');
      }
    });
  }

  newToken.value = formatTokenNumbers(numbers);
}

const next = () => {
  tokenIndex.value++;
}

const preview = () => {
  tokenIndex.value--;
}

const reset = () => {
  token.value = '';
  newToken.value = [];
  tokenIndex.value = 0;
}
</script>

<template>
  <div>
    <div v-if="!newToken.length" class="flex p-4 mb-4 text-sm rounded-lg bg-gray-800 text-blue-400"
         role="alert">
      <svg class="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
           fill="currentColor" viewBox="0 0 20 20">
        <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>
      <span class="sr-only">ব্যবহারবিধি:</span>
      <div>
        <span class="font-medium">ব্যবহারবিধি:</span>
        <ul class="mt-1.5 list-disc list-inside">
          <li>আপনার মিটারের মেসেজটি কপি করে নিচের বক্সে পেষ্ট করুন।</li>
          <li>Get Token বাটনে চাপ দিন।</li>
          <li>Token entry দিন এবং Next Token বাটনে ক্লিক করে পরবর্তী Token দেখুন।</li>
        </ul>
      </div>
    </div>

    <div class="pb-4 mb-6 text-center">
      <h1 class="px-2 py-5 mb-4 text-[20px] xs:text-[16px] sm:text-[20px] font-medium sm:text-3xl bg-sky-blue-light text-dark-blue-light-2 font-Roboto">
        Palli Bidyut <span class="px-4 py-1 rounded-lg bg-dark-blue-light-2 text-sky-blue-light">Token Display</span>
      </h1>
    </div>
    <div v-if="newToken.length" class="px-6 pb-9">
      <div class="text-sky-blue-light/40 text-end">
        {{ tokenIndex + 1 }} / {{ newToken.length }}
      </div>

      <div class="space-y-6">
        <div>
          <div
              class="px-2 py-4 text-xl font-semibold text-center border rounded-lg sm:text-3xl border-sky-blue-light/50 text-sky-blue-light">
            {{ newToken[tokenIndex] }}
          </div>
        </div>
        <div class="flex items-center space-x-8 sm:space-x-16">
          <button type="button" :disabled="tokenIndex < 1" @click="preview"
                  class="w-full px-4 py-2 rounded-lg text-dark-blue bg-sky-blue-light-2 disabled:opacity-50">Previous
          </button>
          <button type="button" :disabled="tokenIndex + 1 >= newToken.length" @click="next"
                  class="w-full px-4 py-2 rounded-lg text-dark-blue bg-sky-blue-light-2 disabled:opacity-50">Next
          </button>
        </div>

        <div class="text-center">
          <button
              class="px-4 py-2 transition-all duration-300 bg-transparent border rounded-lg hover:text-white text-sky-blue-light border-sky-blue-light/20 hover:bg-sky-blue-light/10 hover:shadow-sm shadow-current"
              @click="reset">New Token
          </button>
        </div>
      </div>
    </div>

    <div v-else class="px-4 sm:px-6 pb-9">
      <textarea
          class="w-full px-2 py-4 mb-3 transition-all duration-200 border-2 rounded-lg outline-none bg-dark-blue-light-2 border-slate-800 focus:border-slate-600 text-slate-300 font-Roboto"
          placeholder="Paste your meter token sms here..."
          rows="5"
          required
          v-model="token"
      />
      <div class="text-center">
        <button
            class="px-4 py-2 text-white transition-all duration-300 rounded-lg bg-sky-blue-light/20 hover:bg-sky-blue-light/30 hover:shadow-sm shadow-current"
            @click="generate">Get Token
        </button>
      </div>
    </div>

    <div
        class="flex flex-col items-center py-2 space-y-1 text-sm sm:space-y-0 sm:space-x-3 sm:items-center sm:justify-center sm:flex-row bg-dark-blue-light-2 text-sky-blue-light/70">
      <span>Developed by:</span>
      <a href="https://github.com/polashmahmud" target="_blank"
         class="hover:underline hover:text-sky-blue-light/80 underline-offset-4">Polash Mahmud</a>
      <span>and</span>
      <a href="https://github.com/royhridoy" target="_blank"
         class="hover:underline hover:text-sky-blue-light/80 underline-offset-4"> Hridoy Roy </a>
    </div>

  </div>
</template>
