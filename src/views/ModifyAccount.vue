<template>
  <div class="modify-account">
    <x-header :left-options="{backText: ''}"
              title="提现账户"></x-header>
  </div>
</template>

<script>
import {XHeader } from 'vux'

export default {
  components: {
		XHeader
  },
}
</script>

<style lang="scss" scoped>
.modify-account {
  .vux-header {
    background: #ffffff;
  }
}
</style>
<style>
.modify-account .vux-header .vux-header-title {
  color: #313233;
}
</style>

