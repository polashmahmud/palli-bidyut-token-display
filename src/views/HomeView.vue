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
        return number.match(/.{1,4}/g).join('-');
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
    <div class="text-center border-b pb-4 mb-6">
      <h1 class="text-3xl font-semibold mb-3">Palli Bidyut Token Display</h1>
      <p class="text-gray-500">Enter your sms and get the token</p>
    </div>
    <div v-if="newToken.length">
      <div class="text-gray-400 text-end">
        {{ tokenIndex + 1 }} / {{ newToken.length }}
      </div>

      <div class="space-y-6">
        <div class="border rounded-lg py-4 px-2 text-3xl text-center font-semibold">
          {{ newToken[tokenIndex] }}
        </div>
        <div class="flex items-center space-x-3">
          <button type="button" :disabled="tokenIndex < 1" @click="preview"
                  class="bg-blue-500 text-white px-4 py-2 rounded-lg w-full disabled:opacity-50">Previous
          </button>
          <button type="button" :disabled="tokenIndex + 1 >= newToken.length" @click="next"
                  class="bg-blue-500 text-white px-4 py-2 rounded-lg w-full disabled:opacity-50">Next
          </button>
        </div>

        <div class="text-center">
          <button class="text-blue-500 hover:text-blue-700" @click="reset">New Token</button>
        </div>
      </div>
    </div>

    <div v-else>
      <textarea
          class="w-full border-2 rounded-lg py-4 px-2 mb-3"
          placeholder="Enter your sms here..."
          rows="5"
          v-model="token"
      />
      <div class="text-center">
        <button class="bg-gray-800 text-white px-4 py-2 rounded-lg" @click="generate">Get Token</button>
      </div>
    </div>
  </div>
</template>
