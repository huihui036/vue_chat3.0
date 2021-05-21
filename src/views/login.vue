<template>
  <div class="about">
    <Login msg="登入" />
    <div class="test">
      <p>{{ dubble }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import Login from "@/components/login/index.vue";

export default defineComponent({
  name: "login",
  components: { Login },
  setup() {
    const count = ref(0);
    const dubble = computed(() => {
      return count.value * 3;
    });
    const increase = () => {
      count.value++;
    };
    return {
      count,
      increase,
      dubble,
    };
  },
});
</script>