
function Guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16).substring(1);
        }
        return {
            newguid: function () {
                return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                    s4() + '-' + s4() + s4() + s4();
            }
        }
}
function Trim(str, is_global) {
	var result;
	result = str.replace(/(^\s+)|(\s+$)/g, "");
	if(is_global.toLowerCase() == "g") {
		result = result.replace(/\s/g, "");
	}
	return result;
}

function isRepeat(arr) {//判断数组中的重复数据

	var hash = {};

	for(var i in arr) {

		if(hash[arr[i]])

			return true;

		hash[arr[i]] = true;

	}

	return false;
}

export {
	Guid,
	Trim,
	isRepeat
}
