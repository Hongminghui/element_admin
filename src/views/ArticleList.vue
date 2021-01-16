<template>
  <el-table :data="articles">
    <el-table-column prop="title" label="标题" width="140">
    </el-table-column>
    <el-table-column prop="author" label="作者" width="120">
    </el-table-column>
    <el-table-column prop="content" label="内容简介">
    </el-table-column>

    <el-table-column
        fixed="right"
        label="操作"
        width="200">
      <template slot-scope="scope">
        <el-button @click="edit(scope.row._id)" type="primary" size="small">编辑</el-button>
        <el-button @click="remove(scope.row._id)" type="primary" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      articles: []
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get('/article-list')
      this.articles = res.data
    },
    remove(id) {
      this.$confirm('确认删除')
          .then(_ => {
            this.$http.delete(`/article/${id}/delete`)
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.fetch()
          })
    },
    edit(id) {
      this.$router.replace(`article/${id}/edit`)
    },

  },
  created() {
    this.fetch()
  }
};
</script>

<style scoped>

</style>