<template>
  <a-form
    :model="formStateReject"
    :label-col="labelCol"
    :rules="rules"
    :wrapper-col="wrapperCol"
    ref="formRef"
  >
    <a-form-item required has-feedback label="用户名" name="name">
      <a-input v-model:value="formStateReject.name" autocomplete="off" />
    </a-form-item>
    <a-form-item required has-feedback label="邮箱" name="email">
      <a-input v-model:value="formStateReject.email" @change="getCodeBtnStatus" autocomplete="off" ></a-input>
    </a-form-item>
    
        <a-form-item required has-feedback label="验证码" name="checkCode">
      <a-input  style="width:220px" v-model:value="formStateReject.chek_code" autocomplete="off" />
    <a-button type="link" :disabled='codeBtnStatus' @click="getEmaiCode">获取验证码</a-button>
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
      <a-button type="primary" @click.prevent="onSubmit(formStateReject)">注册</a-button>
      <a-button style="margin-left: 10px" @click="recalLogin">返回登入</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, UnwrapRef } from "vue";

import { chekEmai } from "@/hooks/comm";
import { User } from "@/Api/userRequest";
import { Reject, userReauest } from "@/interface/userRequest";
import { isInput, Emails, passwordCheack } from "@/hooks/rules/formRules";
import { chekFrom } from "@/hooks/check_from";

export default defineComponent({
  name: "login",
  components: {},
  setup(props, ctx) {
    const formRef = ref();
    let codeBtnStatus = ref(true);
    const formStateReject: UnwrapRef<Reject> = reactive({
      name: "",
      email: "",
      chek_code: "",
      password: "",
      password2: "",
    });
    const rules = {
      name: isInput("用户名称", "blur", 2, 18),
      email: [
        { validator: Emails(formStateReject, formRef), trigger: "change" },
      ],
      checkCode: isInput("验证码", "blur", 3, 6),
      password: isInput("密码"),
      password2: [
        {
          validator: passwordCheack(formStateReject),
          trigger: "change",
        },
      ],
    };
    const onSubmit = async (values: Reject) => {

    const iSchekFrom:boolean= await chekFrom(formRef)
 
    if(iSchekFrom){
     const { result, errorData } = await new User().reject<userReauest>(values);
     if (errorData.value) {
        if (result.value?.msg instanceof Array) {
         
        }
      
        return;
      }
     
      ctx.emit("showLogin", true);
    }
 
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
        code_type: 1000,
        email: email,
      };
      // 发送邮箱到给用户
      const {
        result,
        errorData,
      } = await new User().getValidataCode<userReauest>(getData);
      // console.log(result.value, errorData.value);
      if (errorData.value) {
        if (result.value?.msg instanceof Array) {
          // Notify({ type: "warning", message: result.value.msg[0].message });
        }
      }
    };
    const recalLogin = () => {
      ctx.emit("showLogin", true);
    };
    // 获取验证码状态
    const getCodeBtnStatus = ():Boolean=>{
      const {email} = formStateReject
      if (!email) {
        codeBtnStatus.value = true;
        return codeBtnStatus.value
      }
      let isEmai = chekEmai(email);
      if (!isEmai) {     
       codeBtnStatus.value = true;
       return codeBtnStatus.value
      }
      console.log("邮箱输入了")
      return codeBtnStatus.value = false
    }
     
    
    return {
      formRef,
      formStateReject,
      onSubmit,
      recalLogin,
      getEmaiCode,
      rules,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      getCodeBtnStatus,
      codeBtnStatus
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