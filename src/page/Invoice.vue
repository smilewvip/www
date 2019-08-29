<template>
	<div>
		<div style="margin-bottom: 20px">
			<mt-field label="门店名称：" :disabled='isDisable' type="text" v-model="storeName"></mt-field>
			<mt-field label="业务单号：" :disabled='isDisable' type="text" v-model="OrderNo"></mt-field>
			<mt-field label="交易日期：" :disabled='isDisable' type="date" v-model="datatime"></mt-field>
			<mt-field label="合计金额：" :disabled='isDisable' type="number" v-model="amount"></mt-field>
		</div>
		<mt-button type="primary" size="large" :disabled='isButtonDis' @click.native = 'clicktest()'>提交</mt-button>
	</div>
</template>

<script>
	import Vue from 'vue'
	import { MessageBox,Search } from 'mint-ui';
	
	Vue.component(Search.name, Search);
	import Mint from 'mint-ui';
	Vue.use(Mint);

	import {GetOrderTicket} from '../service/getData';
	export default{
		data:function(){
			return{
				data:{
					OrderNo:"",
					CusNo:"",
					StoreNo:"",
					StoreID:"",
				},
				isDisable:true,
				storeName:"",
				OrderNo:"",
				datatime:"",
				amount:"",
				StoreID:"",
				StoreNo:"",
				UserID:"",
				CusNo:"",
				CusName:"",
				// Timestamp:"",
				isButtonDis:false
			}
		},
		created() {
			let _th = this;
			 _th.UserID =_th.$route.query.UserID;
			 
			 _th.StoreID = _th.data.StoreID = _th.$route.query.StoreID;
			 _th.StoreNo = _th.data.StoreNo = _th.$route.query.StoreNO;
			 _th.OrderNo = _th.data.OrderNo =_th.$route.query.OrderNo;
			 
			 _th.CusNo = _th.data.CusNo = _th.$route.query.Cusno;
			 
			 // _th.Timestamp = _th.$route.query.Timestamp;
			 // var NowTimemp = Date.parse(new Date()) / 1000;
			 // if (NowTimemp - _th.Timestamp > 300) {
			 // 	_th.$message.error("二维码已失效");
			 // 	_th.isButtonDis = true;
			 // }
			 _th.query();
		},
		methods: {
		  	clicktest() {
		    	MessageBox.confirm('确定执行此操作?').then(action => {
					this.$router.push({path: '/Invoice_submit?StoreNO='+ this.StoreNo +'&orderno='+this.OrderNo+'&datatime='+this.datatime+'&amount='+this.amount+'&cusno='+this.CusNo+'&UserID='+this.UserID+'&StoreID='+this.StoreID+'&CusName='+this.CusName+''});
				},() => {});
	  		},
	  		query(){
	  			let _th = this;
	  			GetOrderTicket(_th.data).then(res=>{
	  				if(res.IsSuccess) {
	  					if(res.result.dataInfo.length > 0){
	  						_th.datatime = res.result.dataInfo[0].CREATEDATE;
	  						_th.amount = res.result.dataInfo[0].YGFEE;
	  						_th.storeName = res.result.dataInfo[0].STORE_NAME;
	  						_th.CusName = res.result.dataInfo[0].OWNERNAME;
	  					}
	  				}
	  			});
	  		}
		},

	};
</script>

<style>
</style>
