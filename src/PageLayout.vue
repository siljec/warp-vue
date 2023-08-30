<script>
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    Sidebar
  }
}
</script>

<template>
  <div class="grid grid-cols-[auto_1fr]">
    <Sidebar class="grid-col-1"></Sidebar>
    <main class="grid-col-2 mx-32 my-32">
      <router-view></router-view>
    </main>
  </div>
</template>