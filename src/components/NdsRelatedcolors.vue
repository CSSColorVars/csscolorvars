<template>
  <div class="border-block nds-item nds-container full">
    <h3>Related colors</h3>
    <div class="grid nds-item">
      <div class="span-col-2">
        <div class="grid-releated">
          <div
            v-for="x in 10"
            :style="`--shadeColor: hsl(${hslValues[0]},${hslValues[1]}%, ${105 - (x * 10) }%)`"
            :key="x"
            v-clipboard:copy="`var(--${colorActive.property}-shade, ${105 - (x * 10) }%)`"
            v-clipboard:success="updateNotification"
            v-clipboard:error="updateError"
          ></div>
        </div>
      </div>
      <div class="grid-releated2">
        <div
          v-for="x in 5"
          :style="`--hsla-color: hsl(${hslValues[0]},${hslValues[1]}%, ${hslValues[2]}%, ${(x * 18)}%)`"
          :key="x"
          v-clipboard:copy="`var(--${colorActive.property}-transparent, ${(x * 18)}%)`"
          v-clipboard:success="updateNotification"
          v-clipboard:error="updateError"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
</style>
