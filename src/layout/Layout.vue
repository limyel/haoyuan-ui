<template>
  <el-container>
    <el-header>
      <layout-header />
    </el-header>
    <el-container>
      <el-aside>
        <layout-menu />
      </el-aside>
      <el-main>
        <layout-tag-list />
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import LayoutHeader from "@/layout/components/LayoutHeader.vue";
import LayoutMenu from "@/layout/components/LayoutMenu.vue";
import LayoutTagList from "@/layout/components/LayoutTagList.vue";
</script>