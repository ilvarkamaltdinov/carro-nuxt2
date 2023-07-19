<template>
  <main class="page-main">
    <div class="grid">
      <crumbs :crumbs="crumbs"/>
    </div>
    <div class="grid grid--container">
      <faq :page-title="pageTitle" :crumbs="crumbs"/>
    </div>
  </main>
</template>
<script>
import seoTags from "@/mixins/seoTags";

export default {
  mixins: [seoTags],
  mounted() {
    setTimeout(function () {
      window.scrollTo(0, -100);
    }, 1);
  },
}
</script>
