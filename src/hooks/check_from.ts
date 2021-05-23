import { Ref, } from "vue";
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";

async function chekFrom(formRef: Ref<any>): Promise<boolean> {
  debugger
  const iSchekFrom: boolean = await formRef.value
    .validate()
    .then(() => {
      return true
    })
    .catch((error: ValidateErrorEntity) => {
      return false
    });

  return iSchekFrom

}
export { chekFrom }