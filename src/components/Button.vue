<template>
  <div>
    <h1 class="s-text-positive">Buttons</h1>
    <wButton>Click me</wButton>
    <wButton primary>Click me</wButton>
    <wButton secondary>Click me</wButton>
    <wButton loading>Click me</wButton>
  </div>
</template>

<script>
import { wButton } from '@warp-ds/vue';

export default {
  components: {
    wButton
  }
}
</script>