<template>
  <div class="float--getcode nds-item">
      <v-dialog dark v-model="dialog2" max-width="600px">
        <v-card style="max-width=600px;">
          <v-card-text style="height: 500px;max-width=600px;">
            <v-tabs v-model="active" slider-color="yellow">
              <v-tab ripple>CSS</v-tab>
              <v-tab ripple>SCSS</v-tab>
              <v-tab ripple>JSON</v-tab>
              <v-tab ripple>SNIPPETS</v-tab>
              <v-tab-item>
                <v-card flat>
                    <pre class="language-css code-toolbar">
                    <code class=" language-css" v-html="codeCSS">
                    </code>
                    </pre>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <pre class="language-scss code-toolbar">
                    <code class=" language-scss" v-html="code">
                    </code>
                    </pre>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <pre class="language-scss code-toolbar">
                    <code class=" language-scss" v-html="code">
                    </code>
                    </pre>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <pre class="language-scss code-toolbar">
                    <code class=" language-scss" v-html="palleteColors">
                    </code>
                    </pre>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="primary" flat @click.native="dialog2=false">Close</v-btn>
          </v-card-actions>
        </v-card>
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
export default {
  name: 'NdsGetcode',
  data () {
    return {
      fab: true,
      bottom: true,
      right: true,
      dialog2: true,
      active: null,
      code: ``
    }
  },
  computed: {
    ...mapState(['palleteColors']),
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
      string = `:root {
  ${string}
}`
      string = Prism.highlight(string, Prism.languages.css, 'css')
      return `${string}`
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
  width: 100%;
}
code {
  display: block;
  padding: 0 1rem;
  box-shadow: none;
  width: 100% !important;
  min-height: 350px !important;
}
code:after, kbd:after, code:before, kbd:before {
  content: "";
}
</style>
