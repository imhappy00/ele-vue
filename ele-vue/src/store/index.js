/*
 * @Author: 笑佛弥勒
 * @Date: 2020-01-05 15:47:10
 * @LastEditTime: 2020-03-08 17:33:43
 * @LastEditors: 笑佛弥勒
 * @Description: In User Settings Edit
 * @FilePath: \ele-vue\ele-vue\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

import common from './modules/common'
import main from './modules/main'
import shopDetail from './modules/shopDetail'
import address from './modules/address'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    main,
    shopDetail,
    address,
    common
  }
})
