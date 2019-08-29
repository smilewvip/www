<template>
	<div>
		<div style="margin-bottom: 20px">
			<mt-field label="业务单号：" :disabled='isDisable' type="text" v-model="orderno"></mt-field>
			<mt-field label="合计金额：" :disabled='isDisable' type="number" v-model="amount"></mt-field>
			<mt-field label="交易日期：" :disabled='isDisable' type="date" v-model="datatime"></mt-field>
			<mt-navbar v-model="selected">
			  <mt-tab-item id="1">个人</mt-tab-item>
			  <mt-tab-item id="2">单位</mt-tab-item>
			</mt-navbar>

			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			    <mt-field label="发票抬头" placeholder="请输入发票抬头" type="text" v-model="personalMessage.invoiveHead"></mt-field>
				<mt-field label="电话号码" placeholder="请输入电话号码" type="tel" v-model="personalMessage.phone" :state="personalMessage.phonestate"></mt-field>
				<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="personalMessage.email" :state="personalMessage.emailstate"></mt-field>
				<mt-field label="身份证" placeholder="请输入身份证" type="text" v-model="personalMessage.IDcard" :state="personalMessage.IDcardstate"></mt-field>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			    <mt-field label="发票抬头" placeholder="请输入发票抬头" type="text" v-model="companyMessage.invoiveHead" ></mt-field>
			    <mt-field label="电话号码" placeholder="请输入电话号码" type="text" v-model="companyMessage.phone" :state="companyMessage.phonestate"></mt-field>
			    <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="companyMessage.email" :state="companyMessage.emailstate"></mt-field>
			    <mt-field label="身份证" placeholder="请输入身份证" type="text" v-model="companyMessage.IDcard" :state="companyMessage.IDcardstate"></mt-field>
			    <mt-field label="纳税人识别号" placeholder="请输入纳税人识别号" type="text" v-model="companyMessage.Taxpayernum"></mt-field>
			    <mt-field label="开户行名称" placeholder="请输入开户行名称" type="text" v-model="companyMessage.OpenbankName"></mt-field>
			    <mt-field label="地址" placeholder="请输入地址" type="text" v-model="companyMessage.address"></mt-field>
			  </mt-tab-container-item>
			</mt-tab-container>
			<!-- <mt-button type="default" size="large" @click.native = 'queryHistory()'>选择发票历史</mt-button> -->
		</div>

		<mt-button type="primary" size="large" @click.native = 'clicktest()'>提交</mt-button>
		<div style="margin-top: 20px">
			<mt-button  v-for="item in results" size="small" type="default" style="margin: 10px" @click.native = 'searchclick(item)'>{{item}}</mt-button>
		</div>


		<!-- <el-dialog title='选择发票历史' width='100%' :visible.sync="dialogFormVisible" :fullscreen='true' :close-on-click-modal='false'>
			<div style="height:100%;width:100%">
				<mt-field label="发票抬头" placeholder="请输入发票抬头" type="text" v-model="companyMessage.invoiveHead" ></mt-field>
				<ul :infinite-scroll-disabled="true">
					<li v-for="item in results" @click="alerttest(item)">{{ item }}</li>
				</ul>
			</div>
		</el-dialog> -->
	</div>
</template>

<script>
	import Vue from 'vue'
	import Mint from 'mint-ui';
	Vue.use(Mint);
	

	import {SaveTicketOpening,GetHistoryTicket} from '../service/getData';
	export default{
		data:function(){
			return{
				data:{
					'INVOICE_TYPE_ID':"3",		//发票类型代码
					'INVOICE_NO':"",			//发票号
					HistoryTicketModel:{
						cusNo:"",				//客户编码
						invoiceTitle:"",        //发票抬头
						invoiceCode:"",			//纳税人识别号
						invoiceType:"",			//发票类型
						Openingbank:"",			//开户行名称
						email:"",				//邮箱地址
						Mobile:"",				//手机
						Address:"",				//地址
						Certificateno:"",		//身份证
						PersonOrCompany:"",
					},
					OrderTicket:{
						UserID:"",				//用户ID
						OrderNo:"",				//工单号
						CusNo:"",				//用户编码
						CusName:"",				//客户名称
						StoreNo:"",				//门店编码
						StoreID:"",				//门店id
					},
				},
				HistoryTicketobj:{
					cusNo:"",
					invoiceTitle:"",
				},
				personalMessage:{
					invoiveHead:"",				//发票抬头
					phone:"",					//手机号
					IDcard:"",					//身份证
					email:"",					//邮箱

					emailstate:"warning",
					phonestate:"warning",
					IDcardstate:"warning",
				},
				companyMessage:{
					invoiveHead:"",				//发票抬头
					phone:"",					//手机号
					IDcard:"",					//身份证
					email:"",					//邮箱
					Taxpayernum:"",				//纳税人识别
					address:"",					//地址
					OpenbankName:"",			//开户行名称

					emailstate:"warning",
					phonestate:"warning",
					IDcardstate:"warning",
				},
				results:[],
				searchvalue:"",
				dialogFormVisible:false,
				StoreNo:"",
				orderno:"",
				datatime:"",
				amount:"",
				selected:"1",
				CusName:"",
				CusNo:"",
				UserID:"",
				StoreID:"",
				isDisable:true,
				isButtonDis:false,
			}
		},
		watch: {
		    'companyMessage.email':function (val) {
		    	var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); 
		        if(!reg.test(val)){
		        	this.companyMessage.emailstate = "warning";
		        }
		        else{
		        	this.companyMessage.emailstate = "success";
		        }
		    },
		    'personalMessage.email':function (val) {
		    	var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); 
		        if(!reg.test(val)){
		        	this.personalMessage.emailstate = "warning";
		        }
		        else{
		        	this.personalMessage.emailstate = "success";
		        }
		    },
		    'personalMessage.phone':function (val) {
		    	var reg = new RegExp("^[0-9]{6,12}$");
		        if(!reg.test(val)){
		        	this.personalMessage.phonestate = "warning";
		        }
		        else{
		        	this.personalMessage.phonestate = "success";
		        }
		    },
		    'companyMessage.phone':function (val) {
		    	var reg = new RegExp("^[0-9]{6,12}$");
		        if(!reg.test(val)){
		        	this.companyMessage.phonestate = "warning";
		        }
		        else{
		        	this.companyMessage.phonestate = "success";
		        }
		    },
		    'personalMessage.IDcard':function (val) {
		    	var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		        if(!reg.test(val)){
		        	this.personalMessage.IDcardstate = "warning";
		        }
		        else{
		        	this.personalMessage.IDcardstate = "success";
		        }
		    },
		    'companyMessage.IDcard':function (val) {
		    	var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		        if(!reg.test(val)){
		        	this.companyMessage.IDcardstate = "warning";
		        }
		        else{
		        	this.companyMessage.IDcardstate = "success";
		        }
		    },
		    searchvalue:function(){
		    	
		    }
		 },
		created() {
			let _th = this;
			_th.data.OrderTicket.StoreNo = _th.StoreNo = _th.$route.query.StoreNO;
			_th.data.OrderTicket.OrderNo = _th.orderno = _th.$route.query.orderno;
			_th.HistoryTicketobj.cusNo = _th.data.HistoryTicketModel.cusNo =  _th.data.OrderTicket.CusNo = _th.CusNo = _th.$route.query.cusno;
			_th.data.OrderTicket.UserID = _th.UserID = _th.$route.query.UserID;
			_th.data.OrderTicket.StoreID = _th.StoreID = _th.$route.query.StoreID;
			_th.data.OrderTicket.CusName = _th.CusName = _th.$route.query.CusName;

			_th.datatime = _th.$route.query.datatime;
			_th.amount = _th.$route.query.amount;
			_th.query();
		},
		methods: {
			queryHistory(){
				let _th = this;
				_th.dialogFormVisible= true;

			},
			searchclick(item){//带出精确
				let _th = this;
				_th.HistoryTicketobj.invoiceTitle=item;
	  			GetHistoryTicket(_th.HistoryTicketobj).then(res=>{
	  				if(res.IsSuccess) {
	  					if (res.result.list.list.length > 0) {
	  						 _th.companyMessage.address = _th.companyMessage.address == ""?res.result.list.list[0].ADDRESS : _th.companyMessage.address;   																		//地址
	  						 _th.personalMessage.IDcard = _th.personalMessage.IDcard ==""? res.result.list.list[0].CERTIFICATENO : _th.personalMessage.IDcard;     								//身份证
	  						 _th.companyMessage.IDcard = _th.companyMessage.IDcard ==""? res.result.list.list[0].CERTIFICATENO : _th.companyMessage.IDcard;
	  						 _th.personalMessage.email = _th.personalMessage.email ==""? res.result.list.list[0].EMAIL : _th.personalMessage.email;    													//邮箱
	  						 _th.companyMessage.email = _th.companyMessage.email ==""? res.result.list.list[0].EMAIL : _th.companyMessage.email;  
	  						 _th.companyMessage.invoiceCode  = _th.companyMessage.invoiceCode ==""? res.result.list.list[0].INVOICECODE : _th.companyMessage.invoiceCode;  								//纳税人识别号
	  						 _th.personalMessage.invoiveHead = _th.personalMessage.invoiveHead == "" ? res.result.list.list[0].INVOICETITLE : _th.personalMessage.invoiveHead;						//发票抬头
	  						 _th.companyMessage.invoiveHead = _th.companyMessage.invoiveHead == "" ? res.result.list.list[0].INVOICETITLE : _th.companyMessage.invoiveHead;
	  						 _th.personalMessage.phone = _th.personalMessage.phone == "" ? res.result.list.list[0].MOBILE : _th.personalMessage.phone;   												//手机号码
	  						 _th.companyMessage.phone =_th.companyMessage.phone == "" ? res.result.list.list[0].MOBILE : _th.companyMessage.phone;
	  						 _th.companyMessage.OpenbankName  =_th.companyMessage.OpenbankName==""? res.result.list.list[0].OPENINGBANK : _th.companyMessage.OpenbankName;   				//开户行名称
						}	
	  				}
	  			});
			},
			query(){
	  			let _th = this;
	  			GetHistoryTicket(_th.HistoryTicketobj).then(res=>{
	  				if(res.IsSuccess) {
	  					res.result.list.list.forEach(function(item,index){
							_th.results.push(item.INVOICETITLE)
	  					})
	  				}
	  			});
	  		},
			clicktest(){
				//拼接data
				let _th = this;

				if(_th.selected == "1"){//个人
					let _Check = _th.personalMessage;
					if (_Check.emailstate != "success") {
						this.$message.error("请将邮箱填写完整");
						return;
					}
					if (_Check.phonestate != "success") {
						this.$message.error("请将电话号码填写完整");
						return;
					}
					if (_Check.IDcardstate != "success") {
						this.$message.error("请将身份证填写完整");
						return;
					}
					_th.data.INVOICE_NO =  987654321;													//发票号码
					_th.data.HistoryTicketModel.PersonOrCompany = "0";									//发票类型
					_th.data.HistoryTicketModel.invoiceTitle = _th.personalMessage.invoiveHead;			//发票抬头
					_th.data.HistoryTicketModel.email = _th.personalMessage.email;						//邮箱
					_th.data.HistoryTicketModel.invoiceType = "个人";									//发票类型
					_th.data.HistoryTicketModel.Mobile = _th.personalMessage.phone;						//电话号码
					_th.data.HistoryTicketModel.Certificateno = _th.personalMessage.IDcard;				//身份证
				}
				else if(_th.selected == "2"){
					let _Check = _th.companyMessage;
					if (_Check.emailstate != "success") {
						this.$message.error("请将邮箱填写完整");
						return;
					}
					if (_Check.phonestate != "success") {
						this.$message.error("请将电话号码填写完整");
						return;
					}
					if (_Check.IDcardstate != "success") {
						this.$message.error("请将身份证填写完整");
						return;
					}
					_th.data.INVOICE_NO =  123456789;													//发票号码
					_th.data.HistoryTicketModel.PersonOrCompany = "1";									//发票类型
					_th.data.HistoryTicketModel.invoiceTitle = _th.companyMessage.invoiveHead;			//发票抬头
					_th.data.HistoryTicketModel.email = _th.companyMessage.email;						//邮箱
					_th.data.HistoryTicketModel.Openingbank = _th.companyMessage.OpenbankName;			//开户行名称
					_th.data.HistoryTicketModel.invoiceType = "单位";									//发票类型
					_th.data.HistoryTicketModel.invoiceCode = _th.companyMessage.Taxpayernum;			//纳税人识别号
					_th.data.HistoryTicketModel.Mobile = _th.companyMessage.phone;						//电话号码
					_th.data.HistoryTicketModel.Certificateno = _th.companyMessage.IDcard;				//身份证
					_th.data.HistoryTicketModel.Address = _th.companyMessage.address;					//地址
				}
				SaveTicketOpening(_th.data).then(res=>{
	  				if(res.IsSuccess) {
			 			_th.$message.success("开票成功");
			 			_th.isButtonDis = true;
	  				}else{
	  					_th.$message.error("开票失败"+res.msg);
	  				}
	  			});
			},
		},
	};
</script>

<style>
</style>
