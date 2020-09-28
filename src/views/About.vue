<template>
  <div class="about">
      <el-container>
     <el-header>
         <div class="why_dianshang">电商后套管理系统</div>
         <div>
           <el-button type="info" @click="tuichu">退出</el-button>
         </div>
     </el-header>

      <el-container>
    <!-- <el-aside width="300px"> -->
         <el-col :span="4">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/liebiao">用户列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>




       <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>管理权限</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/one">角色列表</el-menu-item>
          <el-menu-item index="/two">权限列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


       <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">用户列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
  

   


    

     </el-menu>


    





  </el-col>


    <!-- </el-aside> -->





    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
      </el-container>
     



  </div>
</template>



<script>

export default {
  methods:{
    tuichu(){
        this.$router.push({
        path:"/"
      })
      localStorage.removeItem("token")
    
    }
  }
  
}
</script>


<style scoped>
.el-header, .el-footer {
    background-color: #363C42;
    color: #333;
    /* text-align: center; */
    line-height: 60px;
    display: flex;
    justify-content: space-between;

  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    /* text-align: center; */
    /* line-height: 200px; */
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /* text-align: center;
    line-height: 160px; */
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .why_dianshang{
    font-size: 25px;
    color: #fff;
  }

</style>