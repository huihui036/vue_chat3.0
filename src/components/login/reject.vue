<template>
  <a-form
    :model="formStateReject"
    :label-col="labelCol"
    :rules="rules"
    :wrapper-col="wrapperCol"
    ref="formRef"
  >
    <a-form-item required has-feedback label="用户名" name="userName">
      <a-input v-model:value="formStateReject.userName" autocomplete="off" />
    </a-form-item>
    <a-form-item required has-feedback label="邮箱" name="email">
      <a-input v-model:value="formStateReject.email" autocomplete="off" />
    </a-form-item>
    <a-form-item required has-feedback label="验证码" name="checkCode">
      <a-input v-model:value="formStateReject.checkCode" autocomplete="off" />
    </a-form-item>
    <a-form-item required has-feedback label="密码" name="password">
      <a-input
        v-model:value="formStateReject.password"
        type="password"
        autocomplete="off"
      />
    </a-form-item>
    <a-form-item required has-feedback label="确认密码" name="password2">
      <a-input
        v-model:value="formStateReject.password2"
        type="password"
        autocomplete="off"
      />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click.prevent="onSubmit">注册</a-button>
      <a-button style="margin-left: 10px">返回登入</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, UnwrapRef } from "vue";

import { chekEmai } from "@/hooks/comm";
import { User } from "@/Api/userRequest";
import { Reject, userReauest } from "@/interface/userRequest";
import { isInput, Emails, passwordCheack } from "@/hooks/rules/formRules";
export default defineComponent({
  name: "login",
  components: {},
  setup(props, ctx) {
    const formRef = ref();
    const formStateReject: UnwrapRef<Reject> = reactive({
      userName: "",
      email: "",
      checkCode: "",
      password: "123456",
      password2: "",
    });
    const rules = {
      userName: isInput("用户名称", "blur", 2, 18),
      email: [
        { validator: Emails(formStateReject, formRef), trigger: "change" },
      ],
      checkCode: isInput("验证码", "blur", 6, 6),
      password: isInput("密码"),
      password2: [
        {
          validator: passwordCheack(formStateReject),
          trigger: "change",
        },
      ],
    };
    const onSubmit = async (values: Reject) => {
      const { result, errorData } = await new User().reject<userReauest>(
        values
      );
      if (errorData.value) {
        if (result.value?.msg instanceof Array) {
          //   Notify({ type: "warning", message: result.value.msg[0].message });
        }
        //  Notify({ type: "warning", message: result.value?.msg as string });
        return;
      }
      //  Notify({ type: "success", message: "注册成功返回登入" });
      ctx.emit("showLogin", true);
    };

    const getEmaiCode = async () => {
      // 判断用户是否输入了邮箱并且邮箱格式正确
      let email = formStateReject.email;
      if (!email) {
        //  Notify({ type: "warning", message: "请输入邮箱" });
        return;
      }
      let isEmai = chekEmai(email);

      if (!isEmai) {
        //  Notify({ type: "warning", message: "请输入正确的邮箱" });
        return;
      }
      let getData = {
        codeType: 1000,
        userName: email,
      };
      // 发送邮箱到给用户
      const {
        result,
        errorData,
      } = await new User().getValidataCode<userReauest>(getData);
      //   console.log(result.value, errorData.value);
      if (errorData.value) {
        if (result.value?.msg instanceof Array) {
          //   Notify({ type: "warning", message: result.value.msg[0].message });
        }
      }
    };
    const recalLogin = () => {
      ctx.emit("showLogin", true);
    };
    return {
      formStateReject,
      onSubmit,
      recalLogin,
      getEmaiCode,
      rules,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    };
  },
});
</script>
<style lang="less">
#Vcode {
  display: block;
  position: relative;
  left: 360px;
  height: 0;
  top: 14px;
  z-index: 10;
  color: #1989fa;
  cursor: pointer;
}
</style>