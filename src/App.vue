<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-dark-blue">
    <div class="max-w-md sm:min-w-[576px] mx-5 sm:mx-auto rounded-xl overflow-hidden shadow-current shadow-md bg-dark-blue-light">
      <RouterView />
    </div>
  </div>
</template>
