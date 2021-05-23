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
      <a-button type="primary" @click="onSubmit(formState)">登入</a-button>
      <a-button style="margin-left: 10px" @click="toReject">注册</a-button>
    </a-form-item>
  </a-form>

</template>
<script lang="ts">
import { defineComponent, ref, reactive, UnwrapRef,  } from "vue";

import { message } from 'ant-design-vue';
import { User } from "@/Api/userRequest";
import { Login, userReauest } from "@/interface/userRequest";
import { isInput, Emails } from "@/hooks/rules/formRules";
import { chekFrom } from "@/hooks/check_from";
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
   
    const iSchekFrom:boolean= await chekFrom(formRef)
 
    if(iSchekFrom){
  
  
        const { result, errorData } = await new User().login<userReauest>(values);
       
      if (errorData.value) {
        if (result.value?.msg instanceof Array) {
             message.error(result.value.msg[0].message);
        }
         message.error(result.value?.msg as string);
     
        return;
      }
    message.success('登入成功');
      }
       
   
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