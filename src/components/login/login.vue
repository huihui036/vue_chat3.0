<template>
  <a-form
    :model="formState"
    :label-col="labelCol"
    :rules="rules"
    :wrapper-col="wrapperCol"
    ref="formRef"
  >
    <a-form-item required has-feedback label="邮箱" name="email">
      <a-input v-model:value="formState.email" autocomplete="off" />
    </a-form-item>
    <a-form-item required has-feedback label="密码" name="password">
      <a-input
        v-model:value="formState.password"
        type="password"
        autocomplete="off"
      />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click.prevent="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px">Reset</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, UnwrapRef, toRaw } from "vue";
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";

import { User } from "@/Api/userRequest";
import { Login, userReauest } from "@/interface/userRequest";
import { isInput, Emails } from "@/hooks/rules/formRules";
export default defineComponent({
  name: "login",
  components: {},
  setup(props, ctx) {
    const count = ref(0);
    const formRef = ref();

    const formState: UnwrapRef<Login> = reactive({
      email: "",
      password: "",
    });

    const rules = {
      email: [{ validator: Emails(formState, formRef), trigger: "change" }],
      password: isInput("密码"),
    };
    const onSubmit = async (values: Login) => {
      console.log("submit", values);
      formRef.value
        .validate()
        .then(() => {
          console.log("values", formState, toRaw(formState));
        })
        .catch((error: ValidateErrorEntity<Login>) => {
          console.log("error", error);
        });
      const { result, errorData } = await new User().login<userReauest>(values);
      if (errorData.value) {
        if (result.value?.msg instanceof Array) {
          //  Notify({ type: "warning", message: result.value.msg[0].message });
        }
        //Notify({ type: "warning", message: result.value?.msg as string });
        return;
      }
      console.log(result, errorData);
      // Notify({ type: "success", message: "登入成功" });
    };

    const toReject = () => {
      ctx.emit("showLogin", false);
    };

    return {
      count,
      formState,
      onSubmit,
      toReject,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      rules,
      formRef,
    };
  },
});
</script>
<style lang="less">
.van-field {
  margin: 5px 0px;
}
</style>