<template>
  <el-form ref="form" :model="article" label-width="80px" @submit.native.prevent="save">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>

    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.content" style=""></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">发表</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      article: {}
    }
  },
  methods: {
    save() {
      this.$http.post('/createArticle', this.article)
      this.$message({
        message: '发表成功',
        type: 'success'
      });
      this.$router.push('/article-list')
    }
  }
}
</script>

<style>
.el-textarea__inner {
  height: 50vh;
}
</style>