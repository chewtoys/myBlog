"use strict";
import Vue      from 'vue';
import Router   from 'vue-router';

const index = r => require.ensure([], () => r(require('../components/index.vue')), 'index');
const author = r => require.ensure([], () => r(require('../components/author.vue')), 'author');
const lived = r => require.ensure([], () => r(require('../components/lived.vue')), 'lived');
const searchResult = r => require.ensure([], () => r(require('../components/searchResult.vue')), 'searchResult');
const articleDetail = r => require.ensure([], () => r(require('../components/articleDetail.vue')), 'articleDetail');
const error = r => require.ensure([], () => r(require('../components/404.vue')), 'error');

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    { path: "/", component: index, name: "index", meta: {title: "朱为鹏的网站"}},
    { path: "/index", component: index, name: "index2", meta: {title: "朱为鹏的网站"}},
    { path: "/author", component: author, name: "author", meta: {title: "个人信息"}},
    { path: "/lived", component: lived, name: "lived", meta: {title: "生活"}},
    { path: "/searchResult", component: searchResult, name: "searchResult", meta: {title: "搜索结果"}},
    { path: "/articleDetail", component: articleDetail, name: "articleDetail", meta: {title: "文章详情"}},
    { path: "*", component: error, name: "404", meta: {title: "404"}}
  ]
})