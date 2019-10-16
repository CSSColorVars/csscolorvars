<template>
  <footer class="nds-footer nds-container full">
    <div class="nds-item l-20 menu-footer nds-container center">
      <div class="nds-item l-block darkfrom-l">
        <!-- ·&nbsp; -->
        <a href="https://paper.dropbox.com/doc/Build-color-CSS-variables-with-CSS-ColorVars-C4RJSkmMJu2RKZo7BZmzS" target="_blank">Guide</a>
        &nbsp;·&nbsp;&nbsp;
        <a href="https://github.com/CSSColorVars/csscolorvars" target="_blank">Github</a>
        &nbsp;·&nbsp;&nbsp;
        <a href="#" target="_blank">About</a>
      </div>
    </div>
    <div class="nds-item l-80 copyright cross-end">
      <hr class="to-l">
      <p class="cross-center main-center">
        create by&nbsp;·&nbsp;
        <a href="https://twitter.com/2062nandes?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @2062nandes</a>
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'NdsFooter'
}
</script>
<style lang="scss">
@import 'src/sass/mixins.scss';
  .darkfrom-l{
    color: rgba(0, 0, 0, 0.54);
    a{
      position: relative;
      color: rgba(0, 0, 0, 0.54);
      padding-bottom: 3px;
      &:hover {
        color: #303030;
        &::before{
        left: 0;
        right: 0;
        }
      }
      &::before {
        content: "";
        position: absolute;
        left: 51%;
        right: 51%;
        bottom: 0;
        background: #303030;
        height: 3px;
        transition-property: left, right;
        transition-duration: 0.3s;
        transition-timing-function: ease-out;
      }
    }
    @include from(l){
      color: #c4c4c4;
      a{
        color: #c4c4c4;
        &:hover {
          color: #FFF;
        }
        &::before {
          background: #FFF;
        }
      }
    }
  }
  .nds-footer {
    bottom: 1rem;
    @include from(l){
      position: fixed;
      left: 0;
      bottom: 0;
    }
  }
  .center{
    text-align: center;
  }
  @include to(l){
    .menu-footer.nds-item.nds-container{
      padding-right: 80px;
    }
  }
  .copyright{
    padding-left: 1rem;
    padding-right: 80px;
    color: rgba(0, 0, 0, 0.54);
    a{
      color: rgba(0, 0, 0, 0.54);
      &:hover{
        color: #303030;
      }
    }
    p{
      @include to(l){
        text-align: center;
        width: 100%;
      }
    }
    .inline{
      display: inline-block;
    }
  }
</style>
