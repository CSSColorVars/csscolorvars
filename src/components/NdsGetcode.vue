<template>
  <div class="float--getcode nds-item">
      <v-dialog dark v-model="dialog2" max-width="600px">
        <v-card style="max-width=600px;">
          <v-card-text style="height: 500px;max-width=600px;">
            <v-tabs
              v-model="active"
              slider-color="yellow"
            >
              <v-tab
                ripple
              >
                CSS
              </v-tab>
              <v-tab
                ripple
              >
                SCSS
              </v-tab>
              <v-tab
                ripple
              >
                JSON
              </v-tab>
              <v-tab
                ripple
              >
                SNIPPETS
              </v-tab>
              <v-tab-item
              >
                <v-card flat>
                    <pre class="language-scss code-toolbar">
                    <code class=" language-scss" v-html="code">
                    </code>
                    </pre>
                </v-card>
              </v-tab-item>
              <v-tab-item
              >
                <v-card flat>
                  <pre class="language-scss code-toolbar">
                    <code class=" language-scss" v-html="code">
                    </code>
                    </pre>
                </v-card>
              </v-tab-item>
              <v-tab-item
              >
                <v-card flat>
                  <pre class="language-scss code-toolbar">
                    <code class=" language-scss" v-html="code">
                    </code>
                    </pre>
                </v-card>
              </v-tab-item>
              <v-tab-item
              >
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
  mounted () {
    // const code = 'var data = 1'
    const code2 = `@import 'src/sass/mixins.scss';
  .btn--getcode{
    background: linear-gradient(#d6d6d6, #FFF, #d6d6d6) !important;
    background-clip: padding-box !important;
    border: double 3px #d6d6d6;
    border-radius: 10px;
  }
  .float--getcode{
    @include showFrom(l);
    background:#424242;
    border-radius: 10px 0 0 10px;
    width: 300px;
    height: 70px;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: $z-modal;
    @include crossCenter;
  }`
    console.log(Prism.highlight(code2, Prism.languages.scss, 'scss'))
    this.code = Prism.highlight(code2, Prism.languages.scss, 'scss')
  },
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

  }
}
</script>
<style lang="scss">
  @import 'src/sass/mixins.scss';
  .btn--getcode{
    background: linear-gradient(#d6d6d6, #FFF, #d6d6d6) !important;
    background-clip: padding-box !important;
    border: double 3px #d6d6d6;
    border-radius: 10px;
  }
  .float--getcode{
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
  :not(pre) > code[class*="language-"], pre[class*="language-"] {
    padding: 0;
    width: 100%;
    max-height: 420px;

  }
  code{
    display: block;
    padding: 0 1rem;
    box-shadow: none;
    width: 100% !important;
    height: 400px !important;
  }
</style>
