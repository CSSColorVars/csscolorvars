<template>
  <div class="float--getcode cross-center nds-item">
      <v-dialog dark v-model="dialog2" max-width="600px">
        <v-tabs v-model="active">
          <v-tabs-slider color="yellow" :style="dialog2 ? activeTab() : '' "></v-tabs-slider>
          <v-tab ripple href="#css">CSS</v-tab>
          <v-tab ripple href="#scss">SCSS</v-tab>
          <v-tab ripple href="#json">JSON</v-tab>
          <v-tab ripple href="#snippets">SNIPPETS</v-tab>
        </v-tabs>
        <v-tabs-items v-model="active">
          <v-tab-item value="css">
            <v-card flat>
              <pre class="language-css code-toolbar">
                <code class="language-css" v-html="cssPrism"></code>
              </pre>
            </v-card>
          </v-tab-item>
          <v-tab-item value="scss">
            <v-card flat>
              <pre class="language-scss code-toolbar">
                <code class="language-scss" v-html="code">
                </code>
                </pre>
            </v-card>
          </v-tab-item>
          <v-tab-item value="json">
            <v-card flat>
              <pre class="language-scss code-toolbar">
                <code class="language-scss" v-html="palleteColors">
                </code>
                </pre>
            </v-card>
          </v-tab-item>
          <v-tab-item value="snippets">
              <v-card flat>
                <pre class="language-scss code-toolbar">
                  <code class="language-scss" v-html="code">
                  </code>
                  </pre>
              </v-card>
            </v-tab-item>
        </v-tabs-items>
          <div class="getcode--footer v-tabs__bar theme--dark main-center" style="width:100%;max-width:600px;">
            <v-btn v-clipboard:copy="copyCode"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
              light>Copy code <v-icon right>file_copy</v-icon></v-btn>
            <v-btn light @click.native="dialog2=false">Close <v-icon right>close</v-icon></v-btn>
          </div>
      </v-dialog>
    <v-btn
      block
      large
      class="btn--getcode"
      @click="dialog2 = true"
    >
      GET CODE
      <v-icon right>code</v-icon>
    </v-btn>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import Prism from 'prismjs'
import 'prismjs/components/prism-scss'
import { gradientColors } from '@/store/util/functions'
export default {
  name: 'NdsGetcode',
  data () {
    return {
      fab: true,
      bottom: true,
      right: true,
      dialog2: false,
      active: 'css',
      code: `jeje`
    }
  },
  computed: {
    ...mapState(['palleteColors']),
    colorCSS: function () {
      let string = ''
      for (let i = 0; i < this.palleteColors.length; i++) {
        const p = this.palleteColors[i]
        for (let j = 0; j < gradientColors(p).length; j++) {
          let lighten = gradientColors(p)[gradientColors(p).length - j - 1]
          string = `${string}--${p.property}-light-${gradientColors(p).length - j}: ${lighten.color};
  `
        }
        for (let j = 0; j < gradientColors(p, 'darken').length; j++) {
          let darken = gradientColors(p, 'darken')[j]
          if (gradientColors(p, 'darken').length - 1 !== j || this.palleteColors.length - 1 !== i) {
            string = `${string}--${p.property}-dark-${j + 1}: ${darken.color};
  `
          } else {
            string = `${string}--${p.property}-dark-${j + 1}: ${darken.color};`
          }
        }
      }
      string = `:root {
  ${string}
}`
      return `${string}`
    },
    codeCSS: function () {
      let string = ''
      for (let i = 0; i < this.palleteColors.length; i++) {
        const p = this.palleteColors[i]
        if (this.palleteColors.length - 1 !== i) {
          string = `${string}--${p.property}-color: ${p.value};
  `
        } else {
          string = `${string}--${p.property}-color: ${p.value};`
        }
      }
      string = `${string}`
      string = `:root {
  ${string}
}
${this.colorCSS}`
      // string = Prism.highlight(string, Prism.languages.css, 'css')
      return `${string}`
    },
    cssPrism: function() {
      return Prism.highlight(this.codeCSS, Prism.languages.css, 'css')
    },
    copyCode: function () {
      if (this.active === 'css') {
        return this.codeCSS
      }
      if (this.active === 'scss') {
        return 'copy SCSS'
      }
      if (this.active === 'json') {
        return 'copy JSON'
      }
      if (this.active === 'snippets') {
        return 'copy SNIPPETS'
      }      
    },
  },
  methods: {
    activeTab: function () {
      let slideColor = document.querySelector('.v-tabs__slider-wrapper')
      const style = slideColor.getAttribute('style')
      if (style === 'left: 0px; width: 0px;') {
        slideColor.style.width = '50px'
      }
    },
    onCopy: function (e) {
      alert('You just copied: ' + e.text)
    },
    onError: function (e) {
      alert('Failed to copy code')
    }
  }
}
</script>
<style lang="scss">
@import 'src/sass/mixins.scss';
.btn--getcode {
  background: linear-gradient(#d6d6d6,#fff,#d6d6d6) !important;
  background-clip: padding-box !important;
  border: double 3px #d6d6d6;
  border-radius: 10px;
}
.float--getcode {
  @include showFrom(l);
  background: #424242;
  border-radius: 10px 0 0 10px;
  width: 300px;
  height: 70px;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: $z-modal;
  @include crossCenter;
}
:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  padding: 0;
  margin: 0;
  width: 100%;
  max-height: 58.6vh !important;
  min-height: 1vh !important;
}
code {
  display: block;
  padding: 0 1rem;
  box-shadow: none;
  width: 100% !important;
  margin-top: -1rem;
}
code:after, kbd:after, code:before, kbd:before {
  content: "";
}
.getcode--footer.v-tabs__bar{
  padding-bottom: .5rem;
  padding-top: .5rem;
}
</style>
