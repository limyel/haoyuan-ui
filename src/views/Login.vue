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
      <el-form class="w-[250px]" :model="form" :rules="rules" ref="formRef">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="用户名">
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" type="password" placeholder="密码">
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="w-[250px]" round @click="onSubmit">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup>
import { reactive, ref } from "vue";
import { login } from "@/api/sys-user";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import Cookies from 'js-cookie';

const router = useRouter();

const form = reactive({
  username: '',
  password: ''
})

const rules = {
  username: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    }
  ]
};

// 拿到 el-form 节点
const formRef = ref(null);

const onSubmit = () => {
  formRef.value.validate(valid => {
    if (!valid) {
      return false;
    }
    login(...form).then(resp => {
      ElMessage.success('登录成功');

      Cookies.set('jwt-token', resp.data.data.token);

      router.push('/');
    }).catch(err => {
      ElMessage.error(err.data.msg || '请求失败');
    });
  })
}

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