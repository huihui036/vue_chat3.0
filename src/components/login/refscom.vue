<template>
  <div class="hello">
    <p>{{ count }}</p>
    <p>{{ dable }}</p>
    <a-button type="primary" @click="addCount"> 点击按钮 </a-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "testrefs",
  setup() {
    let count = ref(0);

    const dable = computed(() => {
      return count.value + 2;
    });

    const addCount = () => {
      count.value++;
    };

    return { count, addCount, dable };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
