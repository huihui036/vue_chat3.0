<template>
  <div class="about">
    <div class="contentRightCenter">
      <span class="contentLogin">登录</span>
    </div>
    <div class="userLogin">
      <Login @showLogin="togoShow" v-if="loginShow" />
      <Reject @showLogin="togoShow" v-if="!loginShow" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Login from "./login.vue";
import Reject from "./reject.vue";
export default defineComponent({
  name: "Logininedx",
  components: { Login, Reject },
  setup() {
    const loginShow = ref(true);

    const togoShow = (isShow: boolean) => {
      loginShow.value = isShow;
      return isShow;
    };
    return {
      loginShow,
      togoShow,
    };
  },
});
</script>
<style lang="less">
.userLogin {
  position: relative;
  top: 100px;
  left: 10%;
  text-align: center;
}
.contentRightCenter {
  width: 292px;
  height: 389px;
  position: absolute;
  left: 135px;
}

.contentLogin {
  font-size: 42px;
  font-family: MicrosoftYaHei;
  color: rgba(25, 138, 227, 1);
  position: absolute;
  top: 10px;
  left: 103px;
}
</style>