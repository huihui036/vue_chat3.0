<template>
  <div id="loginWrap">
    <div class="loginWrapWrap">
      <div class="loginWrapTop">
        <div id="login">
          <div id="loginTitle">
            <img alt="1" src="../assets/img/logo.png" />
          </div>
          <div id="content">
            <div id="vision">
              <p class="visionTop">当前版本号：123132</p>
              <p class="visionMiddle">易判智能执行管理系统</p>
              <p class="visionBottom">让法律看得见，让判判更容易</p>
            </div>
            <p class="visionDate"></p>
            <div class="visionAcitve">激活</div>
            <div class="lognicon">
              <img src="../assets/img/login-left.png" alt="" />
            </div>
            <div class="contentRight">
              <LoginIndex />
              <!-- <p class="recommend">推荐浏览器下载</p>
              <p class="hr"></p>
              <p class="PXOp">操作手册</p>
              <p class="PXSystem">XP系统</p>
              <p class="PXAbove">XP以上</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import LoginIndex from "@/components/login/index.vue";
export default {
  components: {
    LoginIndex,
  },
};
</script>
<style lang="less">
#loginWrap {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .loginWrapWrap {
    // background: #fafafa url("../../static/img/login-bg.png?v=1.1") no-repeat
    background: #fafafa url("/@/assets/img/login-bg.png") no-repeat center
      center;
    height: 100%;
  }

  .loginWrapTop {
    width: 1000px;
    position: absolute;
    left: 50%;
    height: 660px;
    top: 50%;
    -webkit-transform: translate(-50%, -54%);
    transform: translate(-50%, -54%);
  }
  #loginTitle {
    margin-bottom: 23px;
    margin-left: 3px;
    display: flex;
  }

  #loginTitle > img {
    width: 163px;
    height: 74px;
  }

  #content {
    width: 1000px;
    height: 560px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 16px 0px rgba(4, 0, 0, 0.2);
    border-radius: 10px;
    position: relative;
  }

  .contentRight {
    width: 560px;
    height: 560px;
    position: absolute;
    top: 0;
    left: 440px;
  }

  .contentUser {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(144, 147, 153, 1);
    position: absolute;
    top: 88px;
    left: 1px;
  }

  .contentPassword {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(144, 147, 153, 1);
    position: absolute;
    top: 171px;
    left: 1px;
  }

  .recommend {
    width: 122px;
    position: absolute;
    top: 425px;
    right: 218px;
    text-align: center;
    background: rgba(255, 255, 255, 1);
    font-size: 12px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(192, 196, 204, 1);
    z-index: 1;
  }

  .hr {
    width: 290px;
    border: 0.5px solid rgba(220, 223, 230, 1);
    position: absolute;
    top: 434px;
    right: 135px;
  }

  .PXSystem {
    font-size: 12px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    text-decoration: underline;
    color: rgba(192, 196, 204, 1);
    position: absolute;
    top: 464px;
    right: 260px;
    cursor: pointer;
  }
  .PXOp {
    font-size: 12px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    text-decoration: underline;
    color: rgba(192, 196, 204, 1);
    position: absolute;
    top: 464px;
    left: 135px;
    cursor: pointer;
  }

  .PXOp:hover {
    color: rgba(25, 138, 227, 1);
  }

  .PXSystem:hover {
    color: rgba(25, 138, 227, 1);
  }

  .PXAbove:hover {
    color: rgba(25, 138, 227, 1);
  }

  .PXAbove {
    font-size: 12px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    text-decoration: underline;
    color: rgba(192, 196, 204, 1);
    position: absolute;
    top: 464px;
    right: 140px;
    cursor: pointer;
  }

  .demo-ruleForm {
    position: relative;
  }

  .contentUserInputMain {
    position: absolute;
    top: 205px;
    right: 135px;
  }

  .contentPasswordInputMain {
    position: absolute;
    top: 289px;
    right: 135px;
  }

  .contentUserInput {
    width: 290px;
    height: 40px;
    border: 1px solid rgba(220, 223, 230, 1);
    border-radius: 4px;
    border: 1px;
    line-height: 40px;
  }

  .contentPasswordInput {
    width: 290px;
    height: 40px;
    border: 1px solid rgba(220, 223, 230, 1);
    border-radius: 4px;
    border: 1px;
    line-height: 40px;
  }
  .lognicon > img {
    width: 440px;
    height: 560px;
    background: linear-gradient(
      0deg,
      rgba(27, 93, 207, 1) 0%,
      rgba(27, 93, 207, 0) 100%
    );
    border-radius: 10px 0px 0px 10px;
  }

  .loginbtn {
    width: 290px;
    height: 40px;
    background: linear-gradient(
      90deg,
      rgba(144, 202, 249, 1),
      rgba(4, 126, 223, 1)
    );
    border-radius: 4px;
    position: absolute;
    top: 359px;
    right: 135px;
    border: 0;
  }

  .loginbtn:hover {
    background: linear-gradient(
      90deg,
      rgba(144, 202, 249, 0.8),
      rgba(4, 126, 223, 0.8)
    );
  }

  .loginbtnLogin {
    width: 29px;
    height: 14px;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }

  #vision {
    position: relative;
  }

  .visionTop {
    font-size: 12px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    opacity: 0.6;
    position: absolute;
    top: 34px;
    left: 298px;
  }

  .visionMiddle {
    font-size: 27px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    position: absolute;
    top: 109px;
    left: 86px;
  }

  .visionBottom {
    font-size: 16px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    opacity: 0.6;
    position: absolute;
    top: 159px;
    left: 117px;
  }

  .visionDate {
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    position: absolute;
    top: 446px;
    left: 151px;
  }

  .visionAcitve {
    position: absolute;
    top: 488px;
    left: 176px;
  }

  #downLoad {
    color: red;
    position: fixed;
    top: 20px;
    right: 20px;

    .el-icon-download {
      font-size: 14px;
    }
  }
}

.rainbow {
  margin-left: 20px;
  --fill-color: #198ce6;
  position: relative;
  display: block;
  padding: 4px 0;
  font-family: Raleway, sans-serif;
  font-size: 3em;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  -webkit-text-stroke: 2px var(--fill-color);
  background: linear-gradient(
    90deg,
    var(--fill-color) 0%,
    var(--fill-color) 100%
  );
  background-size: 0;
  background-position: left;
  background-repeat: no-repeat;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  transition: 0.5s linear;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;

  &:hover {
    background-size: 100%;
    cursor: pointer;
  }

  &:active {
    position: relative;
    top: 1px;
    left: 1px;
  }
}
</style>


