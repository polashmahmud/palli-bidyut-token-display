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
    <div class="pb-4 mb-6 text-center">
      <h1 class="px-2 py-5 mb-4 text-2xl font-medium sm:text-3xl bg-sky-blue-light text-dark-blue-light-2 font-Roboto">Palli Bidyut <span class="px-4 py-1 rounded-lg bg-dark-blue-light-2 text-sky-blue-light">Token Display</span></h1>
      <p class="text-sm sm:text-base text-sky-blue-light/80">Enter your sms and get the <span class="underline underline-offset-4"> formatted</span> token</p>
    </div>
    <div v-if="newToken.length" class="px-6 pb-9">
      <div class="text-sky-blue-light/40 text-end">
        {{ tokenIndex + 1 }} / {{ newToken.length }}
      </div>

      <div class="space-y-6">
        <div class="px-2 py-4 text-xl font-semibold text-center border rounded-lg sm:text-3xl border-sky-blue-light/50 text-sky-blue-light">
          {{ newToken[tokenIndex] }}
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
          <button class="px-4 py-2 transition-all duration-300 bg-transparent border rounded-lg hover:text-white text-sky-blue-light border-sky-blue-light/20 hover:bg-sky-blue-light/10 hover:shadow-sm shadow-current" @click="reset">New Token</button>
        </div>
      </div>
    </div>

    <div v-else class="px-6 pb-9">
      <textarea
          class="w-full px-2 py-4 mb-3 transition-all duration-200 border-2 rounded-lg outline-none bg-dark-blue-light-2 border-slate-800 focus:border-slate-600 text-slate-300 font-Roboto"
          placeholder="Enter your sms here..."
          rows="5"
          required
          v-model="token"
      />
      <div class="text-center">
        <button class="px-4 py-2 text-white transition-all duration-300 rounded-lg bg-sky-blue-light/20 hover:bg-sky-blue-light/30 hover:shadow-sm shadow-current" @click="generate">Get Token</button>
      </div>
    </div>
  </div>
</template>
