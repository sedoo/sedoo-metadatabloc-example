<i18n>
{
  "en": {
    "message": "hello"
  },
  "fr": {
     "message": "bonjour"
  }
}
</i18n>
<template>
<v-card v-if="isVisible"  :flat="true">
  <v-card-title>
    {{ $t('message') }}
  </v-card-title>
  <v-card-text>
    Id : {{metadata.id}}
  </v-card-text>

</v-card>
</template>

<script>
export default {
  name: 'myproject-fake-block',

  data() {
    return {
    }
  },

  props: {
    metadata: {
      type: Object,
      default: null
    },
    
    language: {
      type: String
    }
    
  },

  computed: {
   
   isVisible() {
        let isVisible = true
        this.$emit("getVisibility", {
        name: this.$options.name,
        programmaticScrollingTitle: "My Fake Bloc",
        isVisible
        });
        return isVisible;
    },

    
  },

  watch: {
   
    language(value) {
      this.$i18n.locale = value;
    },
  },

  created() {
    this.$i18n.locale = this.language;
  },

  methods: {

   

  }
}
</script>

<style scoped>

</style>
