interface Option {
  type: string;
  url: string,
  data?: string;
  dataType: string
}
let xhr = new XMLHttpRequest

function ajax (option: Option) {
  option.dataType = option.dataType ? option.dataType : 'json'
  option.type = option.type ? option.type : 'GET'
  let xhr:any = null
  //  创建请求
  if (window.XMLHttpRequest) {
    xhr =  new XMLHttpRequest()
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP')
  }
  if (option.type === 'GET') {
    let requestParams = ''
    if (option.data) {
      requestParams = '?'
      for (let [key, value] of Object.entries(data)) {
        requestParams += `${key}=${value}&`
      }
      requestParams = requestParams.slice(0, -1)
    }
    xhr.open('GET',option.url + requestParams)
    xhr.send(null)
  } else if (option.type === 'POST') {
    xhr.open('POST', option.url, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(option.data)
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('success')
    } else {
      console.log('fail')
    }
  }
}

ajax()
