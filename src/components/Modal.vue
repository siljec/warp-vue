<template>
  <div>
    <h1 class="s-text-positive">Modal</h1>
    <w-button @click="openModal">Open Modal</w-button>
    <w-modal @dismiss="closeModal" v-model="isModalOpen" right @right="closeModal">
      <h1>Hello I am a modal</h1>
    </w-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { wModal, wButton } from '@warp-ds/vue';

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
}
const closeModal = () => {
  isModalOpen.value = false;
}
</script>