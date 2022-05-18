<template>
  <button @click="fetch()">Fetch on client</button> <br />
  <pre>{{state.meow}}</pre> <br />
</template>

<script setup>
import {useState} from "nuxt/app";

const state = useState('test', () => ({ meow: 'uninit' }));

async function fetch() {
  try {
    const r = await $fetch('/api/posts');
    state.value.meow = r;
  } catch (e) {
    state.value.meow = 'server error: ' + e;
  }
}

if (process.server) {
  await fetch();
}
</script>
