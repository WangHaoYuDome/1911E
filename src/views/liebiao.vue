<template>
  <div>

      <el-input v-model="input" placeholder="请输入内容" class="input" @change="why"></el-input>
       <el-button type="primary" @click="ss">搜索</el-button>
    <a-table :columns="columns" :data-source="data"  bordered  :pagination="{ pageSize: 2 }">
        <template slot="caozuo" slot-scope="props">
            <div>
                <el-button type="info" icon="el-icon-message" circle>{{props}}</el-button>
                <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </div>

        </template>
    </a-table>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      columns: [
        {
          title: "姓名",
          dataIndex: "username",
        },
        {
          title: "邮箱",
          dataIndex: "email",
        },
        {
          title: "手机号",
          dataIndex: "mobile",
        },
        {
          title: "角色",
          dataIndex: "role_name",

        },
        {
          title: "状态",
          dataIndex: "mg_state",
           scopedSlots: { customRender: 'mg_state' },

        },
        {
          title: "操作",
          dataIndex: "caozuo",
          scopedSlots: { customRender: 'caozuo' },

        },
      ],
      data:[],
      data1:[],
      input:""
    };
  },
mounted(){
    axios.get("/user.json",{
    }).then(res=>{
        console.log(res.data.data.users)
        this.data=res.data.data.users
        this.data1=res.data.data.users
    })
},
methods:{
    why(){
        this.data=[]
        this.data1.map(item=>{
         if(item.username.includes(this.input)){
             this.data.push(item)
         }
        })
    },
    ss(){
        this.data=[]
        this.data1.map(item=>{
         if(item.username.includes(this.input)){
             this.data.push(item)
         }
        })
    }
}
};
</script>

<style scoped>
.input{
    width: 300px;
    height: 100px;
}
</style>