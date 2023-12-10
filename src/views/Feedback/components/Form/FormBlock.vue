<template>
  <div v-if="!isSendSuccess" class="form-block">
    <h3 class="title title_h1 form-block__title">
      <span class="colored-el"> успейте</span> занять место
    </h3>
    <form class="form-block__form" novalidate @submit.prevent="onSubmit()">
      <div class="form-block__content">
        <div class="form-block__column">
          <div class="form-block__row">
            <div class="form-block__field">
              <span v-if="isError('company')" class="form-block__field__error">
                Введите название компании
              </span>
              <input
                type="text"
                name="company"
                placeholder="Название компании *"
                v-model.trim="formData.company"
                :class="{
                  'input-error': isError('company'),
                }"
              />
            </div>
            <div class="form-block__field">
              <span v-if="isError('link')" class="form-block__field__error">
                Введите сайт или соцсети
              </span>
              <input
                type="text"
                name="link"
                placeholder="Сайт или соцсети компании *"
                v-model.trim="formData.link"
                :class="{
                  'input-error': isError('link'),
                }"
              />
            </div>
          </div>
          <div class="form-block__row">
            <div class="form-block__field">
              <span v-if="isError('name')" class="form-block__field__error">
                Введите фаше ФИО
              </span>
              <input
                type="text"
                name="name"
                placeholder="Ваше ФИО *"
                v-model.trim="formData.name"
                :class="{
                  'input-error': isError('name'),
                }"
              />
            </div>
            <div class="form-block__field">
              <span v-if="isError('position')" class="form-block__field__error">
                Введите вашу должность
              </span>
              <input
                type="text"
                name="position"
                placeholder="Ваша должность *"
                v-model.trim="formData.position"
                :class="{
                  'input-error': isError('position'),
                }"
              />
            </div>
          </div>
          <div class="form-block__row">
            <div class="form-block__field">
              <span v-if="isError('phone')" class="form-block__field__error">
                Введите ваш номер телефона
              </span>
              <input
                type="text"
                name="phone"
                placeholder="Ваш номер телефона *"
                v-model.trim="formData.phone"
                :class="{
                  'input-error': isError('phone'),
                }"
              />
            </div>
            <div class="form-block__field">
              <span v-if="isError('email')" class="form-block__field__error">
                Введите корректный email
              </span>
              <input
                type="email"
                name="email"
                placeholder="Ваш E-mail *"
                v-model.trim="formData.email"
                :class="{
                  'input-error': isError('email'),
                }"
              />
            </div>
          </div>
        </div>
        <div class="form-block__field form-block__field_message">
          <span class="text form-block__field__error" v-if="isError('message')">
            Расскажите о компании
          </span>
          <textarea
            name="message"
            placeholder="Расскажите, в чем сейчас трудности? Что хотите улучшить? *"
            v-model.trim="formData.message"
            :class="{
              'input-error': isError('message'),
            }"
          />
        </div>
      </div>
      <label class="form-block__control">
        <input
          type="checkbox"
          name="accept-policy"
          v-model="formData.policyAccept"
          class="check-box"
        />
        <span class="check-box-style" />
        <span class="text_smallest form-block__control__text">
          Я согласен с политикой обработки персональных данных
        </span>
      </label>
      <button type="submit" class="form-block__btn">
        <img
          src="@/assets/img/button-border.png"
          alt="border"
          class="base-button__border"
        />
        <span> отправить заявку </span>
      </button>
    </form>
  </div>
  <FormSend v-else class="form-block-success" />
</template>

<script lang="js">
import { validationMixin } from 'vuelidate';
import { email, numeric, required } from 'vuelidate/lib/validators';
import axios from 'axios';
import FormSend from '@/views/Feedback/components/Form/FormSend.vue';

export default {
  name: 'FormBlock',
  components: { FormSend },
  mixins: [ validationMixin ],
  data: () => ({
    isSendSuccess: false,
    formData: {
      company: '',
      link: '',
      name: '',
      position: '',
      phone: '',
      email: '',
      message: '',
      policyAccept: true,
    }
  }),
  validations: {
    formData: {
      company: {
        required,
      },
      link: {
        required,
      },
      name: {
        required,
      },
      position: {
        required,
      },
      phone: {
        required,
        numeric,
      },
      email: {
        required,
        email,
      },
      message: {
        required,
      },
      policyAccept: {
        required,
      },
    }
  },
  methods: {
    isError(field) {
      return this.$v.formData[field].$dirty && !this.$v.formData[field].required
    },
    async onSubmit() {
      this.$v.formData.$touch();
      if (this.$v.formData.$error) return;

      await axios.post(
        '/mail.php',
        this.formData,
        {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
      ).then(() => {
        Object.keys(this.formData).forEach((key) => {
          return this.formData[key] = ''
        })

        this.$nextTick(() => {
          this.isSendSuccess = true;
          this.$v.$reset();
        })
      }).finally(() => {
        setTimeout(() => this.isSendSuccess = false, 5000);
      })
    }
  }
}
</script>

<style lang="scss">
.form-block {
  padding: 48px 16px 68px;
  background-image: url(~@/assets/img/form/form-block-bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;

  @media (min-width: $screen-l) {
    background-image: none;
  }

  &__title {
    margin-bottom: 40px;
    font-size: 20px;

    @media (min-width: $screen-l) {
      font-size: 32px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 21px;

    @media (min-width: $screen-l) {
      flex-direction: row;
      align-items: stretch;
    }
  }

  &__column {
    @media (min-width: $screen-l) {
      margin-right: 16px;
    }
  }

  &__row {
    display: flex;
    flex-direction: column;
    gap: 17px;
    margin-bottom: 17px;

    @media (min-width: $screen-l) {
      flex-direction: row;
      gap: 13px;
      margin-bottom: 0;
    }

    &:not(:last-child) {
      @media (min-width: $screen-l) {
        margin-bottom: 22px;
      }
    }
  }

  &__field {
    position: relative;

    @media (min-width: $screen-l) {
      width: 315px;
    }

    &_message {
      height: 194px;

      @media (min-width: $screen-l) {
        width: 432px;
        height: auto;
      }
    }

    &__error {
      position: absolute;
      top: -14px;
      left: 4px;
      font-size: 10px;
      color: var(--color-light-light-blue);
    }

    .input-error {
      border: 2px solid var(--color-border-focus);
    }

    > textarea {
      height: 100%;
    }

    > input,
    > textarea {
      width: 100%;
      padding: 13px 17px;
      font-family: $font-family-stem;
      font-size: 16px;
      font-weight: 350;
      color: var(--color-text-white);
      border-radius: 10px;
      border: 2px solid var(--color-border);
      background: var(--color-bg-dark-blue2);
      transition: all 0.3s ease-in-out;

      &::placeholder {
        font-family: $font-family-stem;
        font-size: 16px;
        font-weight: 350;
        color: var(--color-text-placeholder);
      }

      &:hover,
      &:focus {
        border: 2px solid var(--color-border-focus);
      }
    }
  }

  &__control {
    position: relative;
    cursor: pointer;

    &__text {
      display: block;
      padding-left: 32px;
      line-height: 1.2;
    }

    .check-box {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
    }

    .check-box-style {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      border-radius: 2px;
      border: 2px solid var(--color-border);
      background: var(--color-bg-dark-blue2);
    }

    .check-box:checked + .check-box-style {
      border: 2px solid var(--color-border-focus);

      &::before {
        content: "\2713 \fe0e";
        position: absolute;
        left: 2px;
        top: -2px;
        width: 8px;
        height: 8px;
      }
    }
  }

  &__btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 26px 59px;
    font-family: $font-family-micra;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    color: var(--color-text-white);

    > img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    &:active {
      scale: 0.95;
    }
  }
}

.form-block-success {
  @media (min-width: $screen-l) {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
