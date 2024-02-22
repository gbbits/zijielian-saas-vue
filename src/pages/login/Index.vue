<template>
  <q-page>
    <div class="q-ml-auto q-mr-auto" style="max-width: 600px">
      <div style="min-height: 100px"></div>
      <q-card>
      <q-tabs
        v-model="form.type"
        inline-label
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="left"
      >
        <q-tab name="login" label="登录" />
        <q-tab name="code" label="验证码登录" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="form.type" animated>
        <q-tab-panel name="login">
          <q-form
            class="q-gutter-md"
          >
            <q-input
              v-model="form.username"
              ref="usernameRef"
              label-slot
              clearable
              lazy-rules
              :rules="[
                val => val && val.length > 0 || '请输入用户名/邮箱',
                val => val.length > 4 || '必须大于4个字符'
              ]"
            >
              <template v-slot:label>
                <div class="row items-center all-pointer-events">
                  <q-icon class="q-mr-xs" color="primary" size="24px" name="fas fa-user" />
                  用户名/邮箱
                  <q-tooltip class="bg-grey-8" anchor="top left" self="bottom left" :offset="[0, 8]">请输入用户名/邮箱</q-tooltip>
                </div>
              </template>
            </q-input>

            <q-input
              v-model="form.password"
              ref="passwordUsernameRef"
              label-slot
              clearable
              lazy-rules
              :rules="[
                val => val && val.length > 0 || '请输入密码',
                val => val.length > 5 || '密码必须大于6个字符'
              ]"
              :type="isPwd ? 'password' : 'text'"
            >
              <template v-slot:label>
                <div class="row items-center all-pointer-events">
                  <q-icon class="q-mr-xs" color="primary" size="24px" name="fas fa-key" />
                  密码
                  <q-tooltip class="bg-grey-8" anchor="top left" self="bottom left" :offset="[0, 8]">请输入密码</q-tooltip>
                </div>
              </template>
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>


            <div>
              <q-btn class="full-width" label="登录" color="primary" @click="submit"/>
            </div>
            <div>
              没有账号?去 <router-link to="/register" class="text-primary">注册</router-link>
            </div>
          </q-form>
        </q-tab-panel>


        <q-tab-panel name="code">
          <q-form
            class="q-gutter-md"
          >
            <q-input
              v-model="form.email"
              ref="emailRef"
              label-slot
              clearable
              lazy-rules
              :rules="[
                val => val && val.length > 0 || '请输入邮箱地址',
                val => isEmail(val) || '邮箱格式错误'
              ]"
            >
              <template v-slot:label>
                <div class="row items-center all-pointer-events">
                  <q-icon class="q-mr-xs" color="primary" size="24px" name="mail" />
                  邮箱
                  <q-tooltip class="bg-grey-8" anchor="top left" self="bottom left" :offset="[0, 8]">请输入邮箱地址</q-tooltip>
                </div>
              </template>
            </q-input>

            <q-input
              v-model="form.code"
              ref="codeRef"
              label-slot
              clearable
              lazy-rules
              :rules="[
                val => val && val.length > 0 || '请输入验证码',
                val => val.length == 6 || '验证码为6位数'
              ]"
            >
              <template v-slot:label>
                <div class="row items-center all-pointer-events">
                  <q-icon class="q-mr-xs" color="primary" size="24px" name="fas fa-digital-tachograph" />
                  验证码
                  <q-tooltip class="bg-grey-8" anchor="top left" self="bottom left" :offset="[0, 8]">请输入验证码</q-tooltip>
                </div>
              </template>
              <template v-slot:append>
                <q-btn class="full-width" label="发送验证码" color="primary" @click="sendEmail"/>
              </template>
            </q-input>

            <q-input
              v-model="form.password"
              ref="passwordEmailRef"
              label-slot
              clearable
              lazy-rules
              :rules="[
                val => val && val.length > 0 || '请输入密码',
                val => val.length > 6 || '密码必须大于6个字符'
              ]"
              :type="isPwd ? 'password' : 'text'"
            >
              <template v-slot:label>
                <div class="row items-center all-pointer-events">
                  <q-icon class="q-mr-xs" color="primary" size="24px" name="fas fa-key" />
                  密码
                  <q-tooltip class="bg-grey-8" anchor="top left" self="bottom left" :offset="[0, 8]">请输入密码</q-tooltip>
                </div>
              </template>
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>


            <div>
              <q-btn class="full-width" label="登录" color="primary" @click="submit"/>
            </div>
            <div>
              没有账号?去 <router-link to="/register" class="text-primary">注册</router-link>
            </div>
          </q-form>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
    </div>
  </q-page>
</template>

<script>
import {defineComponent, ref, reactive, computed} from "vue";
import {isEmail} from 'src/utils/validate';
import {useMeta, useQuasar} from "quasar";
import {useRootStore} from "stores/root";
// import {send} from "src/api/email";
// import {userLogin} from "src/api/user";
// import { userLocalStorageKey } from "boot/constant";

export default defineComponent({
  name: "LoginIndex",
  setup () {
    const $q = useQuasar()
    const rootStore = useRootStore()

    let appName = computed(() => {
      return rootStore.appName
    })
    useMeta(() =>{
      return{
        title: appName.value,
        titleTemplate: title => `${title} - 登录`,
        meta: {
          description: { name: 'description', content: '链字节（lianbyte.com）为区块链爱好者提供区块链、区块链技术、区块链是什么、什么是区块链最新资讯，了解行情、最新价格，货币、货币交易所、货币价格，货币今日价格等最新资讯！' },
          keywords: { name: 'keywords', content: '链字节,区块链,区块链技术,区块链应用,区块链是什么,什么是区块链,区块链开发,区块链游戏,区块链金融' }
        }
      }
    })

    let form = reactive({
      username: '',
      email: '',
      tel: '',
      password: '',
      code: '',
      type: 'login'
    })

    let emailRef = ref('')
    let codeRef = ref('')
    let passwordUsernameRef = ref('')
    let passwordEmailRef = ref('')
    let usernameRef = ref('')
    let sendEmail = function (){
      if (!emailRef.value.validate()){
        return
      }

      // send({email: form.email}).then(({data}) => {
      //   if (data.code == 2000){
      //     $q.notify({
      //       type: 'positive',
      //       message: '验证码已发送,有效时间3分钟',
      //       position: 'top'
      //     })
      //   }else {
      //     $q.notify({
      //       type: 'info',
      //       message: data.msg,
      //       position: 'top'
      //     })
      //   }
      // }).catch(({e}) => {
      //   console.log(e)
      // })
    }

    let submit = function (){
      if (form.type == 'login'){
        // form['auth_type'] = 'up'
        if (!usernameRef.value.validate() || !passwordUsernameRef.value.validate()){
          return;
        }
      }
      if (form.type == 'email'){
        if (!emailRef.value.validate() || !codeRef.value.validate() || !passwordEmailRef.value.validate()){
          return;
        }
      }

      // userLogin(form).then(({data}) => {
      //   if (data.code == 2000){
      //     $q.notify({
      //       type: 'positive',
      //       message: '登录成功',
      //       position: 'top'
      //     })
      //     $q.localStorage.set(userLocalStorageKey, data.data)
      //   }else {
      //     $q.notify({
      //       type: 'info',
      //       message: data.msg,
      //       position: 'top'
      //     })
      //   }
      // }).catch(({e}) => {
      //   console.log(e)
      // })

    }

    return {
      form,
      isEmail,
      isPwd: ref(true),
      emailRef,
      codeRef,
      passwordUsernameRef,
      passwordEmailRef,
      usernameRef,
      sendEmail,
      submit
    }
  }
})
</script>

<style scoped>

</style>
