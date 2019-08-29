<template>
      <div id="app">
					<transition name='slide-fade'>
					  	<router-view  v-if="isRouterAlive"></router-view>
					</transition>
					<!--<Home></Home>-->
      </div>
</template>

<script>
  import Vue from 'vue'
  import Element from 'element-ui'
	import 'element-ui/lib/theme-chalk/index.css'

  import Mint from 'mint-ui';
  Vue.use(Mint);
  Vue.use(Element)

export default {
  name: 'app',
   provide() {
    return {
      reload: this.reload
    }
  },
  data: function (){
  		return {
  			isRouterAlive: true
  		}
  },
  components:{
  	// Home
  },
  methods:{
  	reload () {
     this.isRouterAlive = false
     this.$nextTick(() => (this.isRouterAlive = true))
   } 
  }
}
</script>

<style>
	.el-dialog__header {
    	padding: 15px 20px 15px;
    	background-color: #409eff;
    	text-align: center;
	}
	.el-dialog__title {
	    line-height: 24px;
	    font-size: 20px;
	    color: #ffffff;
	}
	.el-dialog__headerbtn .el-dialog__close {
    	color: #ffffff;
	}
	.slide-fade-enter-active {
			  transition: all .6s ease;
			}
			.slide-fade-leave-active {
			  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
			}
			.slide-fade-enter, .slide-fade-leave-to
			/* .slide-fade-leave-active for below version 2.1.8 */ {
			  transform: translateX(10px);
			  opacity: 0;
			}
	.el-dialog__body{
		max-height: 30rem;
    overflow-y: auto;
	}
</style>
