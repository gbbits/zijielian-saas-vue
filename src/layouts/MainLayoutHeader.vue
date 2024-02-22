<template>
    <q-header class="q-py-sm bg-white text-primary" :style="{borderBottom: '2px solid '+rootStore.themeColor}">
      <main-container>
        <q-toolbar>
            <q-btn dense flat round icon="menu" class="lt-md" @click="toggleLeftDrawer" color="primary"/>

            <q-space class="lt-md"/>
            <q-toolbar-title class="cursor-pointer gt-sm">
              <router-link to="/" style="text-decoration: none" class="text-primary">
                <q-avatar>
                  <img src="zijielian/zijielian.png">
                </q-avatar>
                字节链
              </router-link>
            </q-toolbar-title>
            <q-space/>
            <q-tabs
              align="justify"
              narrow-indicator
              class="text-grey-8 gt-sm"
              active-color="primary"
              :breakpoint="0"
              inline-label
            >
              <q-route-tab
                v-for="(row,index) in menuList"
                :key="index"
                :label="row.name"
                :to="row.path"
              />
            </q-tabs>

            <q-space class="gt-sm"/>
            <q-btn-dropdown stretch flat label="登录/注册">
              <q-list>
                <q-item clickable v-close-popup tabindex="0" to="/login">
                  <q-item-section avatar>
                    <q-avatar icon="fas fa-sign-in-alt" color="primary" text-color="white" size="md" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>登录</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup tabindex="0" to="/register">
                  <q-item-section avatar>
                    <q-avatar icon="fas fa-sign-in-alt" color="primary" text-color="white" size="md"/>
                  </q-item-section>
                  <q-item-section class="text-dark">
                    <q-item-label>注册</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </q-toolbar>
      </main-container>
      <q-drawer v-model="leftDrawerOpen" side="left" overlay behavior="mobile" elevated>
        <q-scroll-area
          :thumb-style="thumbStyle"
          :bar-style="barStyle"
          style="height: 100%"
        >
          <q-list padding>

            <q-item v-ripple clickable :to="{path: '/'}">
              <q-toolbar class="q-px-none">
                <q-toolbar-title class="text-center">
                  <q-avatar size="30px">
                    <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"/>
                  </q-avatar>
                  Title
                </q-toolbar-title>
              </q-toolbar>
            </q-item>

            <q-separator class="q-my-md"/>

            <q-item
              v-for="(link, index) in menuList"
              :key="index"
              :to="link.path"
              v-ripple
              clickable
              class="text-grey-8 text-center"
            >
              <q-item-section>
                <q-item-label>{{ link.name }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-separator class="q-my-md"/>

            <q-item
              v-for="(link, index) in menuList"
              :key="index + 10"
              :to="link.path"
              v-ripple
              clickable
            >
              <q-item-section>
                <q-item-label>{{ link.name }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-separator class="q-mt-md q-mb-xs"/>

            <q-item-label header class="text-weight-bold text-uppercase">
              More from IOYAN
            </q-item-label>
            <q-separator class="q-my-md"/>

            <q-item
              v-for="(link, index) in menuList"
              :key="index + 10"
              :to="link.path"
              v-ripple
              clickable
            >
              <q-item-section>
                <q-item-label>{{ link.name }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator class="q-my-md"/>

            <q-item
              v-for="(link, index) in menuList"
              :key="index + 10"
              :to="link.path"
              v-ripple
              clickable
            >
              <q-item-section>
                <q-item-label>{{ link.name }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

      </q-drawer>
    </q-header>
</template>

<script>
import {computed, defineComponent, ref} from "vue";
import {useRootStore} from "stores/root";
import MainContainer from "components/MainContainer";

export default defineComponent({
  name: "MainLayoutHeader",
  components:{
    MainContainer
  },
  setup () {
    const rootStore = useRootStore();

    const leftDrawerOpen = ref(false)


    return{
      rootStore,
      menuList: [
        {path: '/', name: '新闻'},
        {path: '/flash', name: '7X24快讯'},
        {path: '/coins', name: '行情'},
        {path: '/exchanges', name: '交易所'},
      ],
      // 手机左侧导航open
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: rootStore.themeColor,
        width: '5px',
        opacity: 0.75
      },

      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: rootStore.themeColor,
        width: '9px',
        opacity: 0.2
      },
    }
  }
})
</script>

<style scoped>
.custom_tab{
  width: 130px
}

</style>
