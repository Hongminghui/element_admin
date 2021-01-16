import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ArticleList from "@/views/ArticleList";
import ArticleCreate from "@/views/ArticleCreate";
import EditArticle from "@/views/EditArticle";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/article-list'
  },
  {
    path: '/article-list',
    name: 'article-list',
    component: ArticleList
  },
  {
    path: '/article-create',
    name: 'article-create',
    component: ArticleCreate
  },
  {
    path: '/article/:id/edit',
    name: 'article-edit',
    component: EditArticle
  }
]

const router = new VueRouter({
  routes
})

export default router
