<template>
  <el-row class="min-h-screen bg-sky-500">
    <el-col class="flex items-center justify-center" :span="16">
      <div>
        <div class="font-bold text-5xl text-light-50 mb-4">浩元</div>
        <div class="text-light-900 text-sm">浩元商城后台管理系统</div>
      </div>
    </el-col>
    <el-col class="bg-light-50 flex items-center justify-center flex-col" :span="8">
      <h2 class="font-bold text-3xl">欢迎回来</h2>
      <div class="flex items-center justify-center my-5 text-gray-500 space-x-2">
        <span class="h-[1px] w-16 bg-gray-300"></span>
        <span class="">账号密码登录</span>
        <span class="h-[1px] w-16 bg-gray-300"></span>
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

<style>
.main-body {
  min-height: 100vh;
}
</style>