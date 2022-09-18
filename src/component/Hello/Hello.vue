<template>
    <div class="text">{{ helloText }}, 我们正在写一些测试代码!</div>
</template>

<script setup>
import { ref } from 'vue';
const helloText = ref('hello')
</script>    

<style scoped>
.text {
    font-size: 16px;
    font-weight: 600;
    font-family: 'Times New Roman', Times, serif;
}
</style>