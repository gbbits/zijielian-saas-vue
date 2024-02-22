<template>
  <q-layout view="lHh lpr lFf">

    <main-layout-header/>

    <q-page-container>
      <router-view />
    </q-page-container>

    <main-layout-bottom/>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import MainLayoutHeader from 'layouts/MainLayoutHeader'
import MainLayoutBottom from "layouts/MainLayoutBottom";

export default defineComponent({
  name: 'MainLayout',

  components: {
    MainLayoutHeader,
    MainLayoutBottom
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
