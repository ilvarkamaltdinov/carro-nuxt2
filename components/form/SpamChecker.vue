<template>
  <div>
    <slot :handleInput="increaseLength" :checkValidation="checkValidation" />
  </div>
</template>

<script>
export default {
  emits: ['spam'],
  data() {
    return {
      eventTriggeredCount: 0,
      text: null
    }
  },
  methods: {
    checkValidation() {
      return this.text.length > this.eventTriggeredCount;
    },
    increaseLength(event) {
      this.eventTriggeredCount += 1;
      this.text = event;
      return this.checkValidation();
    }
  }
};
</script>
