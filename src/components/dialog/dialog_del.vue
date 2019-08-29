<template>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>你确定要删除该数据吗？</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="cancle()">取 消</el-button>
            <el-button type="primary" @click="del()">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
  export default {
    props:['isShow'],
    data() {
      return {
        dialogVisible :this.isShow
        
      };
    },
    mounted (){
        
    },
    computed:{
        showDialog:() =>{
            return this.isShow;
        }
    },
    methods:{
        handleClose(){
            this.dialogVisible = false
           
        },
        cancle(){
            this.dialogVisible = false
        },
        del(){
           
            this.dialogVisible = false
        }
    }
  }
</script>

<style>

</style>