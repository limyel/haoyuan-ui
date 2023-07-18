<template>
  <div class="flex">
    <span>
      浩元
    </span>
    <el-icon><Fold /></el-icon>
    <el-icon><Refresh /></el-icon>
    <div>
      <el-icon><FullScreen /></el-icon>
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar :size="25" :src="''" />
          Dropdown List
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import {Fold, FullScreen, Refresh} from "@element-plus/icons-vue";
</script>