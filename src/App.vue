<template>
  <el-config-provider :locale="elementLocales['zh-cn']">
    <router-view/>
  </el-config-provider>
</template>

<script setup>
import { elementLocales } from '@/i18n';
</script>

<style>
</style>
