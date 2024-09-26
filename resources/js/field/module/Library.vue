<template>
  <div class="popup fixed top-0 left-0 bottom-0 right-0  flex items-center justify-center pin z-50 py-view bg-primary-70% overflow-y-scroll" style="max-height: 90vh">
    <div class="absolute top-0 left-0 bottom-0 right-0 z-20 bg-gray-800 opacity-50 h-full w-full" @click="$parent.$parent.popup = null"></div>

    <div class="relative z-30 p-8 rounded-lg m-auto border-2 border-gray-200 shadow-lg bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

      <button type="button" class="nml-close select-none" @click="$parent.$parent.popup = null">&times;</button>

      <Library :field="field.attribute" :isArray="field.nmlArray" :types="types" />

    </div>

  </div>
</template>

<script>
import Library from '../../tool/'

export default {
  props: ['field'],
  components: { Library },
  data() {
    return {
      types: Array.isArray(this.field.nmlTypes) ? this.field.nmlTypes : []
    }
  },
  mounted() {
    document.body.classList.add('overflow-hidden');
  },
  beforeUnmount() {
    document.body.classList.remove('overflow-hidden');
  }
}
</script>
