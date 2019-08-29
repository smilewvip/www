import HelloWorld from '../HelloWorld'
export const menusList=[{
						name: "客户管理",
						index: '1',
						icon: "el-icon-user",
						child: [{
							name: "客户管理",
							index: "1-1",
							component: HelloWorld,
						}]
					},
					{
						name: "订单管理",
						index: '2',
						icon: "el-icon-tickets",
						child: [{
							name: "合同管理",
							index: "2-1",
							component: HelloWorld,
						},
						{
							name: "销售订单",
							index: "2-2",
							component: HelloWorld,
						},
						{
							name: "报价单",
							index: "2-3",
							component: HelloWorld,
						},
						{
							name: "任务通知单",
							index: "2-4",
							component: HelloWorld,
						},
						{
							name: "排单计划",
							index: "2-5",
							component: HelloWorld,
						}]
					},
					{
						name: "订单流程",
						index: '3',
						icon: "el-icon-connection",
						child: [{
							name: "订单流程",
							index: "3-1",
							component: HelloWorld,
						},
						{
							name: "费用结算",
							index: "3-2",
							component: HelloWorld,
						}]
					},
					{
						name: "原始记录单",
						index: '4',
						icon: "el-icon-document-add",
						child: [{
							name: "现场原始记录单",
							index: "4-1",
							component: HelloWorld,
						},
						{
							name: "实验室原始记录单",
							index: "4-2",
							component: HelloWorld,
						}]
					},
					{
						name: "样品管理",
						index: '5',
						icon: "el-icon-box",
						child: [{
							name: "样品交接",
							index: "5-1",
							component: HelloWorld,
						},
						{
							name: "样品分包",
							index: "5-2",
							component: HelloWorld,
						}]
					},
					{
						name: "实验室管理",
						index: '6',
						icon: "el-icon-first-aid-kit",
						child: [{
							name: "样品分析",
							index: "6-1",
							component: HelloWorld,
						},
						{
							name: "留样管理",
							index: "6-2",
							component: HelloWorld,
						}]
					},
					{
						name: "报告管理",
						index: '7',
						icon: "el-icon-reading",
						child: [{
							name: "质量控制",
							index: "7-1",
							component: HelloWorld,
						},
						{
							name: "报告管理",
							index: "7-2",
							component: HelloWorld,
						}]
					},
					{
						name: "系统设置",
						index: '8',
						icon: "el-icon-setting",
						child: [{
							name: "采样设备管理",
							index: "8-1",
							component: HelloWorld,
						},
						{
							name: "物质管理",
							index: "8-2",
							component: HelloWorld,
						}]
					},
					{
						name: "权限管理",
						index: '9',
						icon: "el-icon-folder-checked",
						child: [{
							name: "部门管理",
							index: "9-1",
							component: HelloWorld,
						},
						{
							name: "员工管理",
							index: "9-2",
							component: HelloWorld,
						},
						{
							name: "权限管理",
							index: "9-3",
							component: HelloWorld,
						},
						{
							name: "菜单管理",
							index: "9-4",
							component: HelloWorld,
						}]
					},
				]
