<template>
  <main class="page-main">
    <div class="grid ">
      <crumbs :crumbs="crumbs"/>
    </div>
    <catalog-used :page-title="pageTitle"/>
    <div class="grid grid--container">
      <text-used v-if="$route.params.category === 'used'"/>
    </div>
  </main>
</template>
<script>

import seoTags from "@/mixins/seoTags";
import jsonld from "@/mixins/jsonld";

export default {
  mixins: [seoTags, jsonld],
  validate(ctx) {
    if (ctx.store.getters.showComm) {
      return ctx.params.category === 'used' ||
        ctx.params.category === 'commercial' ||
        ctx.params.category === 'europe' ||
        ctx.params.category === 'new';
    } else {
      return ctx.params.category === 'used'
    }
  },
  mounted() {
    setTimeout(function () {
      window.scrollTo(0, -100);
    }, 1);
  },
}

</script>
