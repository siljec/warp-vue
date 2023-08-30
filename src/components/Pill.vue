<template>
  <div>
    <h1 class="s-text-positive">Pill</h1>
    <w-pill label="Standard pill" />
    <w-pill suggestion label="Suggestion pill" />
    <w-pill canClose label="Can close pill" />
  </div>
</template>

<script>
import { wPill } from '@warp-ds/vue';

export default {
  components: {
    wPill
  }
}
</script>