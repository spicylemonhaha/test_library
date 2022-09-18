<template>
    <div class="hi">{{ hiText }}, 我们正在写一些测试代码!</div>
</template>

<script setup>
import { ref } from 'vue';
const hiText = ref('Hi')
</script>    

<style>
.hi {
    font-size: 20px;
    font-weight: 600;
    color: #123;
}
</style>
    