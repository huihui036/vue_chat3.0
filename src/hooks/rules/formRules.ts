import { RuleObject } from "ant-design-vue/es/form/interface";
import { Ref } from 'vue';
import { chekEmai } from '@/hooks/comm';

// 普通字段验证
function isInput(name: string, trigger: 'blur' | 'change' = 'blur', min = 6, max = 64): any[] {
  const LenthRule = [
    {
      required: true,
      message: `请输入${name}`,
      trigger: trigger,
    },
    { min: min, max: max, message: `长度必须在${min}-${max}`, trigger: trigger },
  ]
  return LenthRule
}

// email 邮箱验证
function Emails(formState: any, formRef: Ref<any>) {
  const email = async (rule: RuleObject, value: string) => {
    if (value === "") {
      return Promise.reject("请输入邮箱");
    } else if (!chekEmai(value)) {
      return Promise.reject("请输入正确邮箱");
    } else {
      // if (formState.email !== "") {
      //   formRef.value.validateField("checkPass");
      // }
      console.log(formState, formRef)
      return Promise.resolve();
    }
  };
  return email
}

// 验证两次输入是否一致
function passwordCheack(formState: any,) {
  const validatePass2 = async (rule: RuleObject, value: string) => {
    console.log("value", value, "password",)
    if (value === '') {
      return Promise.reject('请输入');
    } else if (value !== formState.password) {
      return Promise.reject("两次输入内容不一致");
    } else {

      return Promise.resolve();
    }
  };
  return validatePass2
}

export { isInput, Emails, passwordCheack }