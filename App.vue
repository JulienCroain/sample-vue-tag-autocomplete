<template>
  <div class="container">
    <h1>
      Vue Tag Autocomplete
    </h1>
    <p>
      Read documentation <a target="_blank" href="https://github.com/JulienCroain/vue-tag-input/blob/master/README.md">here</a>.
    </p>
    <input
    v-model="preventDefaultOnEnter"
    type="checkbox">Prevent default on enter
    <input
    v-model="allowDuplicates"
    type="checkbox">Allow duplicates
    <input
    v-model="onlyFromSuggestions"
    type="checkbox">Only from suggestions
    <VueTagInput
    v-model="tags"
    :suggestions="suggestions"
    :allow-duplicates="allowDuplicates"
    :only-from-suggestions="onlyFromSuggestions"
    :quick-mode="true"
    :prevent-default-on-enter="preventDefaultOnEnter"
    />
  </div>
</template>

<script>
import VueTagInput from 'vue-tag-autocomplete';

export default {
  components: {
    VueTagInput,
  },
  data() {
    return {
      tags: [],
      suggestions: ['Japan', 'Taiwan', 'Africa', 'America', 'Canada', 'Finland', 'China'],
      preventDefaultOnEnter: true,
      allowDuplicates: false,
      onlyFromSuggestions: false
    };
  },
};
</script>

<style lang="sass">
// style for development playgrond
body
  margin: 0
  padding: 0

.container
  margin: 30px auto
  width: 100%
  max-width: 600px
</style>
