<template>
  <div class="float--getcode cross-center nds-item">
      <v-dialog dark v-model="dialog2" max-width="600px">
        <v-tabs v-model="active">
          <v-tabs-slider color="yellow" :style="dialog2 ? activeTab() : '' "></v-tabs-slider>
          <v-tab class="t4" ripple href="#css">{{ styleSheet.selectStyle }}</v-tab>
          <v-tab class="t4" ripple href="#tailwind" style="text-transform: initial;">TailwindCSS</v-tab>
          <v-tab class="t4" ripple href="#json">JSON</v-tab>
        </v-tabs>
        <v-tabs-items v-model="active">
          <v-tab-item value="css">
            <v-card flat class="nds-container main-end">
              <pre class="language-css code-toolbar">
                <code class="language-css t4" v-html="codeCSS.html"></code>
              </pre>
            </v-card>
          </v-tab-item>
          <v-tab-item value="tailwind">
              <v-card flat>
                <pre class="language-scss code-toolbar">
                  <code class="language-scss t4" v-html="codeTailwind.html">
                  </code>
                  </pre>
              </v-card>
            </v-tab-item>
          <v-tab-item value="json">
            <v-card flat>
              <pre class="language-scss code-toolbar">
                <code class="language-scss t4" v-html="palleteColors">
                </code>
                </pre>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
          <div class="getcode--footer v-tabs__bar theme--dark main-center" style="width:100%;max-width:600px;">
            <v-btn @click="doCopy"
              light>Copy code <v-icon right>file_copy</v-icon></v-btn>
            <v-btn light @click.native="dialog2=false">Close <v-icon right>close</v-icon></v-btn>
          </div>
      </v-dialog>
    <v-btn v-if="!btnCode"
      block
      large
      class="btn--getcode active"
      @click="dialog2 = true"
    >
      GET CODE
      <v-icon right>code</v-icon>
    </v-btn>
    <v-btn v-else fab @click="dialog2 = true" class="button--getcode">
      <v-icon>code</v-icon>
    </v-btn>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import { hslObject } from '@/store/util/functions'
export default {
  name: 'NdsGetcode',
  data () {
    return {
      fab: true,
      bottom: true,
      right: true,
      dialog2: false,
      active: 'css',
      btnCode: true,
      selectActive: 'All',
      select: [ 'All', 'Luminosity', 'Transparency' ]
    }
  },
  created () {
    const largeBp = matchMedia('(min-width: 660px)')
    const mediaQuery = mql => {
      mql.matches
        ? this.btnCode = false
        : this.btnCode = true
    }
    largeBp.addListener(mediaQuery)
    mediaQuery(largeBp)
  },
  computed: {
    ...mapState(['palleteColors', 'styleSheet']),
    codeCSS: function () {
      let html = ''
      let text = ''
      for (let i = 0; i < this.palleteColors.length; i++) {
        const p = this.palleteColors[i]
        if (this.palleteColors.length - 1 !== i) {
          html = `${html}<span class="code-property">--${p.property}-color</span>: <span class="code-value" style="--value-color: ${p.value};">${p.value}</span>;
  <span class="code-property">--${p.property}-HS</span>: <span class="code-val">${hslObject(p)[0]}, ${hslObject(p)[1]}%</span>;
  <span class="code-property">--${p.property}-HSL</span>: <span class="code-val">${hslObject(p)[0]}, ${hslObject(p)[1]}%, ${hslObject(p)[2]}%</span>;
  `
          text = `${text}--${p.property}-color: ${p.value};
  --${p.property}-HS: ${hslObject(p)[0]}, ${hslObject(p)[1]}%;
  --${p.property}-HSL: ${hslObject(p)[0]}, ${hslObject(p)[1]}%, ${hslObject(p)[2]}%;
  `
        } else {
          html = `${html}<span class="code-property">--${p.property}-color</span>: <span class="code-value" style="--value-color: ${p.value};">${p.value}</span>;
  <span class="code-property">--${p.property}-HS</span>: <span class="code-val">${hslObject(p)[0]}, ${hslObject(p)[1]}%</span>;
  <span class="code-property">--${p.property}-HSL</span>: <span class="code-val">${hslObject(p)[0]}, ${hslObject(p)[1]}%, ${hslObject(p)[2]}%</span>;`
          text = `${text}--${p.property}-color: ${p.value};
  --${p.property}-HS: ${hslObject(p)[0]}, ${hslObject(p)[1]}%;
  --${p.property}-HSL: ${hslObject(p)[0]}, ${hslObject(p)[1]}%, ${hslObject(p)[2]}%;`
        }
      }
      html = `<span class="code-comment">/* In your ${this.styleSheet.selectStyle} */</span>
<span class="code-selector">:root</span> {
  ${html}
}
`
      text = `/* In your ${this.styleSheet.selectStyle} */
:root {
  ${text}
}`
      return {
        html,
        text
      }
    },
    copyCode: function () {
      if (this.active === 'css') {
        return this.codeCSS.text
      }
      if (this.active === 'scss') {
        return this.codeCSS.text
      }
      if (this.active === 'json') {
        return 'copy JSON'
      }
      if (this.active === 'tailwind') {
        return this.codeTailwind.text
      }
    },
    codeTailwind: function () {
      let html = `<span class="code-comment">// tailwind.conf.js</span>
<span>module.exports</span> <span class="code-property">=</span> <span>{</span>
  <span>theme: {</span>
    <span>colors: {</span>`
      let text = `// tailwind.conf.js
module.exports = {
  theme: {
    colors: {`

      for (let i = 0; i < this.palleteColors.length; i++) {
        const p = this.palleteColors[i]
        html = `${html}
      <span>${p.property}: {</span>
        <span>base:</span> <span class="code-value" style="--value-color: ${p.value};">'var(--${p.property}-color)'</span>,`
        text = `${text}
      ${p.property}: {
        base: 'var(--${p.property}-color)',`
        for (let j = 1; j <= 9; j++) {
          html = `${html}
        <span>${j}00</span>: <span class="code-value" style="--value-color: hsl(${hslObject(p)[0]}, ${hslObject(p)[1]}%, ${10 - j}0%);">'hsl(var(--${p.property}-HS), ${10 - j}0%)'</span>,`
          text = `${text}
        ${j}00: 'hsl(var(--${p.property}-HS), ${10 - j}0%)',`
        }
        html = `${html}
      },`
        text = `${text}
      },`
      }
      html = `${html}
    }
  }
}
`
      text = `${text}
    }
  }
}
`
      return {
        html,
        text
      }
    }
  },
  methods: {
    activeTab: function () {
      let slideColor = document.querySelector('.v-tabs__slider-wrapper')
      const style = slideColor.getAttribute('style')
      if (style === 'left: 0px; width: 0px;') {
        slideColor.style.width = '50px'
        this.active = 'css'
      }
    },
    doCopy: function () {
      this.$copyText(this.copyCode).then(function (e) {
        // alert('Copied')
        console.log(e.text)
      }, function (e) {
        alert('Can not copy')
        console.log(e)
      })
      navigator.clipboard.writeText(this.copyCode)
    }
  }
}
</script>
<style lang="scss">
@import 'src/sass/mixins.scss';

code[class*="language-"],
pre[class*="language-"] {
  color: #ccc;
  background: none;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: .5em 0;
  overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #2d2d2d;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: .1em;
  border-radius: .3em;
  white-space: normal;
}

.btn--getcode {
  background: linear-gradient(#d6d6d6,#fff,#d6d6d6) !important;
  background-clip: padding-box !important;
  border: double 3px #d6d6d6;
  border-radius: 10px;
  &.active{
    display: block;
  }
}
.button--getcode{
  background: linear-gradient(#d6d6d6,#fff,#d6d6d6) !important;
  margin: 0;
  border: double 3px #363636;
}
.float--getcode {
  // @include showFrom(l);
  background: #424242;
  border-radius: 10px 0 0 10px;
  height: 70px;
  width: 80px;
  @include from(m) {
    width: 300px;
  }
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: $z-fixed;
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
  --value-color: transparent;
}
code[class*="language-"], pre[class*="language-"] {
  color: #fff;
}
code:after, kbd:after, code:before, kbd:before {
  content: "";
}
.getcode--footer.v-tabs__bar{
  padding-bottom: .5rem;
  padding-top: .5rem;
}

.code-comment {
  color: #6d6d6d;
}
.code-selector{
  color: #e6db74;
}
.code-property{
  color: #66d9ef;
}
.code-val{
  color: #fd971f;
}
.code-value{
  color: #fd971f;
  &::before{
    content: '';
    display: inline-block;
    background: var(--value-color);
    width: 12px;
    height: 12px;
    margin-right: .2rem;
    border: solid 1px white;
  }
}
.v-tabs__item--active{
  background: linear-gradient(#4a4a4a 30px, transparent);

}

// Select code ComboBox
.select--code{
  @include from(m){
    position: absolute;
    padding-top: 1rem;
  }
}
</style>
