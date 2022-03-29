<template>
  <div class="fact-randomizer">
    <h1 class="fact-randomizer__title">
      Did you know... 🐱
    </h1>

    <transition>
      <div
        v-if="apiFact"
        class="fact-randomizer__result"
      >
        <blockquote
          class="fact-randomizer__fact"
        >
          {{ factMessage }}
        </blockquote>

        <button
          class="fact-randomizer__submit"
          @click="loadFact"
        >
          Read another one!
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import { loadFact } from '@/api/catFacts';

export default {
  data () {
    return {
      apiFact: null,
      loading: false
    };
  },

  computed: {
    factMessage () {
      return this.apiFact?.fact;
    }
  },

  mounted () {
    this.loadFact();
  },

  methods: {
    async loadFact () {
      if (this.loading) {
        return;
      }

      this.loading = true;

      this.apiFact = null;

      const response = await loadFact();

      // Force wait a second
      const forcedDelay = 500;
      await new Promise(resolve => setTimeout(resolve, forcedDelay));

      this.apiFact = response.data;

      this.loading = false;
    }
  }
}
</script>

<style lang="scss">
.fact-randomizer {
  &__title {
    margin-bottom: 2rem;
  }

  &__result {
    max-width: 60rem;
    margin: 0 auto;

    &.v-enter-active,
    &.v-leave-active {
      transition: all 0.2s ease-in-out;
    }

    &.v-enter,
    &.v-leave-to {
      opacity: 0;
      transform: scale(0) rotate(5deg);
    }
  }

  &__fact {
    font-size: 1.8rem;
  }

  &__submit {
    display: inline-block;
    font-weight: bold;
    font-size: 1.8rem;
    color: white;
    background-color: burlywood;
    border: none;
    border-radius: 0.4rem;
    padding: 0.8rem 1.6rem;
    cursor: pointer;
    transition: all 0.1s linear;

    &:focus-visible {
      outline: 0.3rem solid chocolate;
    }

    &:hover {
      background-color: chocolate;
    }
  }
}
</style>
