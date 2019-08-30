<template>
	<div id="home">
		<el-container>
			<el-header style="text-align: right; font-size: 12px;background-color: #66cccc;">
				<div class="select_style">
      				<div style="color: #fff;font-size: 1.2rem;float: left;">
      					<i class="fa fa-handshake-o"></i>
      					欢迎进入财务系统
      				</div>
      				<div style="display: inline-block;color: #fff;font-size: .8rem;margin-right: 1rem;">
      					<i class="fa fa-user" style="font-size: 1.3rem;"></i>
      					您好，
      					<span style="font-size: 1rem;font-weight: bold;"> {{userName}} </span>
      				</div>
					<el-dropdown trigger="click" @command="storeChange">
				      <span class="el-dropdown-link" style="color: #fff;">
				        	{{storeName}}
				        	<i class="el-icon-arrow-down el-icon--right" style="color: #fff;"></i>
				      </span>
				      <el-dropdown-menu slot="dropdown"  style="max-height: 25rem;overflow-y: auto;">
				        	<el-dropdown-item :command="item.value" v-for="item in storeData">{{item.label}}</el-dropdown-item>
				      </el-dropdown-menu>
				   </el-dropdown>
				   <el-button type="info" plain size="small" style='margin-left: 1rem;' @click='loginOut'>注销</el-button>
      			</div>
			</el-header>
			<!-- 头部导航 -->
			<el-container>
				<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
					<el-menu :unique-opened="true" :default-active='activeIndex'>
						<el-submenu :index="item.index" v-for="item in menus" :key="item.index">
							<template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
							<!--一级导航-->
							<el-menu-item-group>
								<el-menu-item :index="i.index" v-for="i in item.child" :key="i.index" @click="addTab(i,i.index)">{{i.name}}</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
					</el-menu>
				</el-aside>
				<el-container>
					<el-main style='padding: 0;'>
						<div style="padding: 10px 10px;border-bottom: 1px solid #e6e6e6;color: #05a5a5;">
							<span  @click="backMenu"><i class="el-icon-s-home"></i></span>
							{{TabsValue}}
						</div>
						<tab-component></tab-component>
					</el-main>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import Vue from 'vue'
	import {menusList} from '../components/menu'
	import HelloWorld from '../components/HelloWorld'
	import { GetEmpStoreList, LoginOut, SwitchStore } from '../service/getData'
	export default {
		inject: ['reload'],
		data: function() {
			return {
				data: {
					employeeNo: localStorage.getItem('employeeNo'),
					iDisplayStart: 0,
					iDisplayLength: 1000000
				},
				index: "",
				activeIndex: '',
				active: true,
				tabIndex: 1,
				TabsValue:'首页',
				Tabs: [],
				TabsList:{
					title:'首页',
					content:HelloWorld
				},
				loginData: {
					token: localStorage.getItem('loginAuthorization')
				},
				userName: localStorage.getItem('employeeName'),
				password: '',
				storeData: [],
				storeValue: '',
				storeName: localStorage.getItem('store_name'),
				menus: menusList
			}
		},
		created() {
			var _this = this
			_this.userName = localStorage.getItem('employeeName')
			_this.password = localStorage.getItem('password')
			_this.storeName = localStorage.getItem('store_name') || '请选择门店'
			var tabComponent = Vue.component('tab-component', {
				name: "tab-component",
				render: function(h) {
					var comp = _this.TabsList.content
					return h(comp, {
						nativeOn: {
							click: function(event) {
							}
						},
					})
				},

			})
		},
		mounted() {
			var _this = this
			GetEmpStoreList(_this.data).then(res => {
				console.log(res, "门店")
				if(res.IsSuccess) {
					_this.storeData = []
					res.result.forEach(function(item, index) {
						_this.storeData.push({
							value: item.STORE_NO,
							label: item.STORE_NAME,
							id: item.STORE_ID

						})
					})

				} else if(res.code == 28006) {
					this.$router.push({
						path: '/login'
					});
				}
			})
		},
		methods: {
			addTab(menu) {
				this.TabsValue = menu.name
				this.TabsList={
					title: menu.name,
					name: menu.name,
					content: menu.component
				}
			},
			backMenu(){
				this.TabsValue = '首页'
				this.TabsList={
					title:'首页',
					content:HelloWorld
				}
			},
			storeChange(command) {
				//console.log(command,"09090")
				let obj = {};
				obj = this.storeData.find((item) => {
					return item.value === command;
				});
				localStorage.store_no = command
				localStorage.store_id = obj.id
				this.storeName = obj.label
				localStorage.store_name = obj.label
				//this.$message('click on item ' + obj.label);
				var data = {
					NewStoreId: obj.id,
					userName: localStorage.getItem('userName')
				}

				SwitchStore(data).then(res => {
					if(res.IsSuccess) {
						this.$message({
							message: '门店切换成功',
							type: 'success'
						});
					} else if(res.code == 28006) {
						this.$router.push({
							path: '/login'
						});
					}

				})
				this.reload()
			},
			loginOut() {
				LoginOut(this.loginData).then(res => {
					console.log(res, "注销")
					if(res.IsSuccess) {
						this.$message({
							message: '注销成功',
							type: 'success'
						});
						this.$router.push({
							path: '/login'
						});
					}
				})
			}
		}
	}
</script>

    <style>
      body{margin: 0;}
    #app {
      min-width: 1200px;
      margin: 0 auto;
      font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
    }
    #tab-first .el-icon-close{
    	display: none;
    }
      .el-header {
		    background-color: #B3C0D1;
		    color: #333;
		    line-height: 60px;
		  }

		  .el-aside {
		    color: #333;
		  }
		 .select_style .el-input--suffix .el-input__inner{
		 	text-align: left;
		 }
		 .select_style{
		 	padding-right: 4rem;
		 }
    </style>
