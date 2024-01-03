<template>
  <div ref="aboutTranscriptRef"  class="about-transcript">
    <p v-for="(transcript, index) in transcripts" :key="index" class="about-transcript__item">
      <span class="about-transcript__item_first-letter">
        {{ formatText(transcript).firstLetter }}
      </span>
      {{ formatText(transcript).restText }}
    </p>
  </div>
</template>

<script lang="js">
export default {
  name: 'AboutTranscript',
  data: () => ({
    transcripts: [
      'автоматизированная',
      'информационная',
      'система',
      'охраны',
      'труда',
    ],
  }),
  methods: {
    formatText(text) {
      const firstLetter = text.charAt(0);
      const restText = text.slice(1)

      return { firstLetter, restText };
    }
  }
};
</script>

<style lang="scss">
.about-transcript {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 0 40px;

  @media (min-width: $screen-l) {
    margin-top: 70px;
  }

  &__item {
    display: flex;
    align-items: center;
    padding: 20px 27px 20px 36px;
    color: var(--color-text-white);
    font-family: $font-family-stem;
    font-size: 20px;
    font-weight: 350;
    background-image: url(~@/assets/img/about/transcript-item-bg.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;

    &_first-letter {
      display: block;
      color: var(--color-text-blue);
      font-family: $font-family-micra;
      font-size: 42px;
      font-weight: 400;
      line-height: 0.95;
      margin-right: 2px;
    }
  }
}
</style>
