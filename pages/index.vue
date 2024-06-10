<template>
  <main class="container">
    <button @click="logMessage">Log Message</button>
  </main>
</template>

<script setup lang="ts">
const logger = useLogger('Index');

function logMessage() {
  logger.info('Hello from the Nuxt app!');
}

</script>