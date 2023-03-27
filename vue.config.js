const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //lintOnSave: false,  //" Component name "Home" should always be multi-word" 라는 lint오류 해제 
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/main.scss";
        `,
      },
    },
  },
})
