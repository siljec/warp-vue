<template>
  <div>
    <h1 class="s-text-positive">Breadcrumbs</h1>
    <w-breadcrumbs>
      <a href="#/url/1">Page 1</a>
      <a href="#/url/2">Page 2</a>
      <span aria-current="page">Current Page</span>
    </w-breadcrumbs>
  </div>
</template>

<script>
import { wBreadcrumbs } from '@warp-ds/vue';

export default {
  components: {
    wBreadcrumbs
  }
}
</script>