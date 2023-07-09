<template>
  <el-row class="login-container">
    <el-col class="left" :span="16">
      <div>
        <div>浩元</div>
        <div>浩元商城后台管理系统</div>
      </div>
    </el-col>
    <el-col class="right" :span="8">
      <h2>欢迎回来</h2>
      <div>
        <span class="line"></span>
        <span>账号密码登录</span>
        <span class="line"></span>
      </div>
      <el-form class="w-[250px]" :model="form">
        <el-form-item>
          <el-input v-model="form.username" placeholder="用户名">
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="密码">
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="w-[250px]" round>登 录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({})

</script>

<style scoped>
.login-container {
  @apply min-h-screen bg-sky-500
}

.login-container .left {
  @apply flex items-center justify-center;
}

.login-container .right {
  @apply bg-light-50 flex items-center justify-center flex-col;
}

.left>div>div:first-child {
  @apply font-bold text-5xl text-light-50 mb-4;
}
.left>div>div:last-child {
  @apply text-light-900 text-sm;
}

.right>h2:first-child {
  @apply font-bold text-3xl;
}
.right>div {
  @apply flex items-center justify-center my-5 text-gray-500 space-x-2;
}

.line {
  @apply h-[1px] w-16 bg-gray-300;
}
</style>