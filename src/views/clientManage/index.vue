<template>
	<div class="main_wrap">
		<div class="searchList">
			<div class="search_btn">
				<span>搜索</span>
			</div>
			<el-form ref="addFollowForm" size="mini" :model="form" label-width="100px">
				<el-row>
					<el-col :xs="24" :md="6">
						<el-form-item label="客户名称：">
							<el-input v-model="form.name" placeholder="请输入"></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :md="6">
						<el-form-item label="业务经理：">
							<el-input v-model="form.name" placeholder="请输入"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
		</div>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="date" label="日期" width="180">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name: 'add-businessType',
		data() {
			return {
				form: {
					name: ''
				},
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}]
			}
		},
		methods: {}
	}
</script>

<style>
	.main_wrap {
		padding: 10px;
	}
	
	.searchList {
		min-height: 100px;
		border: 1px solid #c7c7c7;
		width: 100%;
		border-radius: 10px;
	}
	
	.search_btn {
		border-bottom: 1px solid #c7c7c7;
		height: 40px;
		line-height: 40px;
		margin-bottom: 10px;
	}
	
	.search_btn span {
		margin-left: 20px;
		font-size: 20px;
		font-weight: bold;
		color: #606266;
	}
</style>