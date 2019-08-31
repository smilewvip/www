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
					<el-col :xs="24" :md="6">
						<el-button type="primary" style='background-color: #27b7b7;border-color: #27b7b7;margin-left: 20px;' size='small' icon="el-icon-search">搜索</el-button>
					</el-col>
				</el-row>
			</el-form>
		</div>
		<div style="padding: 20px 20px;">
			<el-button type="primary" size='small' style='background-color: #27b7b7;border-color: #27b7b7;'>新增客户</el-button>
		</div>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="name" label="客户名称" width="180">
			</el-table-column>
			<el-table-column prop="contacts" label="联系人" width="180">
			</el-table-column>
			<el-table-column prop="phone" label="联系方式">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
			<el-table-column prop="business" label="主营业务">
			</el-table-column>
			<el-table-column prop="manager" label="业务经理">
			</el-table-column>
			<el-table-column prop="telephone" label="业务电话">
			</el-table-column>
			<el-table-column prop="remark" label="备注">
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="100">
				<template slot-scope="scope">
					<el-button type="text" size="small" style='color: #27b7b7;'>查看</el-button>
					<el-button type="text" size="small" style='color: #27b7b7;'>编辑</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div style="text-align: right;margin-top: 20px;">
			<el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="currentPage4"
		      :page-sizes="[100, 200, 300, 400]"
		      :page-size="100"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="400">
		    </el-pagination>
		</div>
		
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
				currentPage4: 4,
				tableData: [{
					name: '阿里巴巴',
					contacts: '马云',
					phone: '18888888888',
					address: '上海市普陀区金沙江路 1518 弄',
					business: '电商',
					manager: '小明',
					telephone: '16666666666',
					remark: '',

				}, {
					name: '阿里巴巴',
					contacts: '马云',
					phone: '18888888888',
					address: '上海市普陀区金沙江路 1518 弄',
					business: '电商',
					manager: '小明',
					telephone: '16666666666',
					remark: '',
				}, {
					name: '阿里巴巴',
					contacts: '马云',
					phone: '18888888888',
					address: '上海市普陀区金沙江路 1518 弄',
					business: '电商',
					manager: '小明',
					telephone: '16666666666',
					remark: '',
				}]
			}
		},
		methods: {
			 handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
		      },
		      handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		      }
		}
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
	.el-table--border th, .el-table__fixed-right-patch{
		    background: linear-gradient(white, #e2e2e2);
	}
	.el-table--border, .el-table--group{
		    border: 1px solid #c7c7c7;
	}
	.el-table--border td, .el-table--border th{
		    border-right: 1px solid #c7c7c7;
	}
	.el-table td, .el-table th.is-leaf{
		border-right: 1px solid #c7c7c7;
		border-bottom: 1px solid #c7c7c7;
	}
</style>