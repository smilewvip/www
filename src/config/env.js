
/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = '';
let routerMode ='history';
let imgBaseUrl = 'http://images.cangdu.org/';

/*开发模式 */
if (process.env.NODE_ENV == 'development') {
   	// baseUrl = 'http://192.168.1.192:8088/';
    // baseUrl = 'http://114.55.2.156:7511/';
    baseUrl = 'http://124.232.152.90:7011/';
}
/*生产模式 */
else if(process.env.NODE_ENV == 'production'){
	// baseUrl = 'http://192.168.1.192:8088/';
	// baseUrl = 'http://114.55.2.156:7511/';
	baseUrl = 'http://124.232.152.90:7011/';
}

export{
	baseUrl,
	routerMode,
	imgBaseUrl
}


