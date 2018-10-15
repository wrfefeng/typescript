"use strict";
var xhr = new XMLHttpRequest;
function ajax(option) {
    option.dataType = option.dataType ? option.dataType : 'json';
    option.type = option.type ? option.type : 'GET';
    var xhr = null;
    //  创建请求
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    if (option.type === 'GET') {
        var requestParams = '';
        if (option.data) {
            requestParams = '?';
            for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                requestParams += key + "=" + value + "&";
            }
            requestParams = requestParams.slice(0, -1);
        }
        xhr.open('GET', option.url + requestParams);
        xhr.send(null);
    }
    else if (option.type === 'POST') {
        xhr.open('POST', option.url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(option.data);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('success');
        }
        else {
            console.log('fail');
        }
    };
}
ajax();
