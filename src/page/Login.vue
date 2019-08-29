<template>
	<div>
		<div>
			<div style="position: fixed;bottom: 0;">
				<img src="../../static/images/shanghai2.png"/>
			</div>
				<div class="login_wrap">
				
					<div class="login_content">
						<p>欢迎登录财务系统！</p>
					</div>
					<form class="login_form">
						<div class="login_text">
							<i class="fa fa-user"></i>
							<input placeholder="用户名" type="text" v-model="data.userName" />
						</div>
						<div class="login_text" style="border-bottom: none;margin-top: .5rem;">
							<i class="fa fa-lock"></i>
							<input placeholder="密码" type="password" v-model="data.password" />
						</div>
					</form>
					<div class="login_botton" @click="login">
							<input type="submit" value="登录" />
					</div>
				</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import {Login,LoginOut} from '../service/getData'
	export default{
		data(){
			return{
				data:{
					userName:'',		//	string	是	用户名
					password:'',		//string	是	密码
					storeId:'',			//decimal?	是	门店ID
					ipAddress:'',		//string	否	IP地址
					macAddress:'',		//string	否	MAC地址

				},
				loginData:{
					name:'',
					pass:'',
				}
			}
		}, 
		created(){
			
		},
		methods:{
			login(){
				var _th = this
				if(localStorage.getItem('store_id')!=null&&localStorage.getItem('store_id')!=undefined&&localStorage.getItem('store_id')!='undefined'&&localStorage.getItem('store_id')!='null'){
					this.data.storeId=localStorage.getItem('store_id')
				}else{
					this.data.storeId='0'
				}
		      	Login(_th.data).then(res => {
		      		console.log(res,"000")
		            if(res.IsSuccess){
		            	localStorage.loginAuthorization=res.msg
		            	localStorage.userName = res.result.userName
		            	localStorage.store_no = res.result.storeNo
		            	localStorage.password = this.data.password
		            	localStorage.store_id = res.result.storeId
		            	localStorage.store_name = res.result.storeName
		            	localStorage.employeeNo = res.result.employeeNo
		            	localStorage.employeeName = res.result.employeeName
		            	this.$router.push({path: '/home'});
		            }else{
		            	this.$alert(res.msg, {
					          confirmButtonText: '确定',
					        });
		            }
		       })
				
			}
		}
		
	}
</script>

<style scoped lang="scss">
	body{
		background-image: url(../../static/images/shanghai2.png);
	}
	.login_wrap{
	    position: relative;
	    margin: 10rem auto 0;
	    padding-top: 3rem;
	    width: 25rem;
	    height: 30rem;
	    background-color: #fff;
	    box-shadow: 0 -8px 50px #848484;
	    border-radius: 1rem;
	    .login_content{
		    font-size: 1.5rem;
		    text-align: center;
		}
	    .login_form{
			    position: absolute;
			    left: 1.5rem;
			    top: 30%;
			    width: 72%;
			    padding: 2rem;
			    border: 1px solid #0b65e6;
			    border-radius: .5rem;
		    .login_text{
				width: 100%;
			    text-align: center;
			    border-bottom: 1px solid #0b65e6;
		    		
			}
			input{
				width: 70%;
			    /*border: 1px solid #ccc;*/
			    border: none;
			    border-radius: .3rem;
			    padding: 1rem;
			}
			input:focus{
				outline:none;
			}
			i{
				font-size: 1.5rem;
		    	vertical-align: middle;
			}
		}
		.login_botton{
			position: absolute;
		    bottom: 5rem;
		    width: 100%;
		    text-align: center;
		    
	    	input{
				width: 90%;
				border: none;
				height: 3rem;
				border-radius: .5rem;
				background-color: #0b65e6;
				color: #fff;
				font-size: 1.4rem;
				box-shadow: 0 0 10px #9a9a9a;
				cursor: pointer;
			}
		}
	}
</style>