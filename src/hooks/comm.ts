// 验证是否为邮箱
function chekEmai(email: string): boolean {
  const emalireg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
  if (!emalireg.test(email)) {
    return false;
  } else {
    return true;
  }

}

export { chekEmai }