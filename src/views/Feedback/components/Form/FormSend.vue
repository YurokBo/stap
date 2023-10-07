<template>
  <div class="form-send">
    <img src="@/assets/img/form/success.png" alt="mail send success">
    <p class="text">
      Ваша заявка успешно отправлена
    </p>
  </div>
</template>

<script lang="js">
export default {
  name: 'FormSend'
};
</script>

<style lang="scss">
.form-send {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 38px 95px 48px;
  background-image: url(~@/assets/img/form/form-send-bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  font-size: 14px;
  text-align: center;

  @media (min-width: $screen-l) {
    width: 470px;
    font-size: 20px;
  }

  > img {
    width: 41px;
    height: 41px;
    margin-bottom: 16px;

    @media (min-width: $screen-l) {
      width: 78px;
      height: 78px;
    }
  }
}
</style>
