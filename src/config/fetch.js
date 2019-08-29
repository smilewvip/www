
import {baseUrl} from './env';
import md5 from 'js-md5';
import axios from 'axios';
import { Message } from 'element-ui'
export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
	type = type.toUpperCase();
	url = baseUrl + url;

	var strParam = JSON.stringify(data);
  var AppSecret = "65E66CFE173F4F8A864BCA50DB6FC979";
  var Authorization = "BTBPM17D4A7ABEE164341B879A1E9D44CB674";
  var AppKey = "192208F8DB5942DBBCB16ED762B7DCDE";
  var SignMethod = "md5";
	var Timestamp = Date.parse(new Date()) / 1000;
	var strConcat = AppSecret + "App-Key" + AppKey + "Authorization" + Authorization
		+ "param" + strParam + "Sign-Method" + SignMethod + "Timestamp" + Timestamp + AppSecret;

	var md5Str = md5(strConcat);
	var strSign = md5Str.toUpperCase();  //转大写

	if (type == 'GET') {
		let dataStr = ''; //数据拼接字符串
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		})

		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
		}
	}
	if (method == 'fetch') {
		let requestConfig = {
			method: type,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				"Authorization": Authorization,
				"App-Key": AppKey,
				"Timestamp": Timestamp.toString(),
				"Sign-Method": SignMethod,
				"Sign": strSign,
				// "CurrentUserInfo":localStorage.getItem("CurrentUserInfo"),
				"loginAuthorization":localStorage.getItem('loginAuthorization')||""
			},
			mode: "cors",
			cache: "force-cache"
		}
		if (type == 'POST') {
			Object.defineProperty(requestConfig, 'body', {
				value: JSON.stringify({"jsonStr": JSON.stringify(data)})
			})
		}
		try {
			var instance=axios.create({
				baseURL:'',
				timeout:25000,
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					"Authorization": Authorization,
					"App-Key": AppKey,
					"Timestamp": Timestamp.toString(),
					"Sign-Method": SignMethod,
					"Sign": strSign,
					"loginAuthorization":localStorage.getItem('loginAuthorization')||""
				}
			});
			//console.log(JSON.stringify({"jsonStr": JSON.stringify(data)}),"161616");
			const response = await instance.request({
				method:type,
				url:url,
				data:JSON.stringify({"jsonStr": JSON.stringify(data)})
			})
			.catch(function(error){
				console.log(error);
			});
			const responsJson = await response.data;
				
				if(responsJson.code==28006){
		           Message.error(responsJson.msg)
				}
			return responsJson

		} catch (error) {
			throw new Error(error)
		}
	} else if (method == 'abutment') {
		let requestConfig = {
			method: type,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				"Authorization": Authorization,
				"App-Key": AppKey,
				"Timestamp": Timestamp.toString(),
				"Sign-Method": SignMethod,
				"Sign": strSign
			},
			mode: "cors",
			cache: "force-cache"
		}
		if (type == 'POST') {
			Object.defineProperty(requestConfig, 'body', {
				value: JSON.stringify({"jsonStr": JSON.stringify(data)})
			})
		}
		try {
			var instance=axios.create({
				baseURL:'',
				timeout:25000,
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					"Authorization": Authorization,
					"App-Key": AppKey,
					"Timestamp": Timestamp.toString(),
					"Sign-Method": SignMethod,
					"Sign": strSign
				}
			});
			//console.log(JSON.stringify({"jsonStr": JSON.stringify(data)}),"161616");
			const response = await instance.request({
				method:type,
				url:url,
				data:JSON.stringify({"jsonStr": JSON.stringify(data)})
			})
			.catch(function(error){
				console.log(error);
			});
			const responsJson = await response.data;
				if(responsJson.code==28006){
		           Message.error(responsJson.msg)
				}
			return responsJson

		} catch (error) {
			throw new Error(error)
		}
	} else {
		return new Promise((resolve, reject) => {
			let requestObj;
			if (window.XMLHttpRequest) {
				requestObj = new XMLHttpRequest();
			} else {
				requestObj = new ActiveXObject;
			}
			let sendData = '';
			if (type == 'POST') {
				sendData = JSON.stringify(data);
			}

			requestObj.open(type, url, true);
			requestObj.setRequestHeader("Content-type", "application/json");
			requestObj.send(sendData);

			requestObj.onreadystatechange = () => {
				if (requestObj.readyState == 4) {
					if (requestObj.status == 200) {
						let obj = requestObj.response
						console.log(obj,"响应数据")
						if (typeof obj !== 'object') {
							obj = JSON.parse(obj);
						}
						resolve(obj)
					} else {
						reject(requestObj)
					}
				}
			}
		})
	}
}
