<template>
  <div class="home">
    <br><br>
    <h2>登录</h2>
    <br>
    <el-input v-model="username" placeholder="请输入内容"></el-input>
    <br><br><br>
    <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
    <br><br><br><br><br>
      <div>
        <el-button type="primary" @click="deng">登录</el-button>
        <el-button type="info">重置</el-button>
      </div>
    
   
  </div>
</template>

<script>

import axios from "axios"
export default {
  data(){
    return{
      username:"",
      password:"",
      token:[]


    }
  },
  methods:{
    deng(){
      axios.get("http://localhost:8080/login.json",{
        username:this.username,
        password:this.password
      }).then(res=>{
        console.log(res.data)
        localStorage.token=res.data.data.token
        this.$router.push({
          path:"/about"
        })
      })
    }
  }
 
}
</script>
<style  scoped>
.home{
  width: 400px;
  height: 400px;
  border: 1px solid #eee;
  margin: 0 auto;
  margin-top: 100px;
  text-align: center;
}

</style>
