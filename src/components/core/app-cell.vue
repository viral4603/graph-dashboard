<template>
        <aside class="sidebar h-100 flex-shrink-0">
            <app-sidebar></app-sidebar>
        </aside>
        <main class="flex-grow-1 d-flex flex-column overflow-hidden">
            <app-header></app-header>
            <router-view/>
        </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import AppSidebar from './app-sidebar.vue'
import AppHeader from './app-header.vue'
export default defineComponent({
    components:{
        AppSidebar,
        AppHeader
    }
})
</script>
