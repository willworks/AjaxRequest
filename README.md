# AjaxRequest
Ajax数据请求模拟，可用于接口还未开通时候的模拟返回数据

#### 主要插件

 - [jquery-mockjax](https://github.com/jakerella/jquery-mockjax) 提供基本功能实现

 - [mockJSON](https://github.com/mennovanslooten/mockJSON) 内置json和jsonp请求返回的处理

 - [jquery.tmpl](https://github.com/BorisMoore/jquery-tmpl) jq模板引擎

#### 使用方法

 - 发起ajax请求

		$.ajax({
		    url : "http://host/api/api_name",
		    brand_ids : "01234,56789",//批量查询
		    dataType : "jsonp",
		    jsonp : "jsonp",
		    success : function(res){
		        // 主要逻辑
		    }
		});

 - 在引入jquery-mockjax后，请求接口跟真正的设置一样，配置好返回数据，就可以进行请求的拦截、

	    $.mockjax({
	        url: 'http://host/api/api_name',
	        status: 200,
	        responseTime: 900,
	        // 模拟数据
	        responseText: 
	        {
	            "code": 0,
	            "data": {
	                data_list: [
						// 数据返回格式
	                ] 
	            },
	            "msg": "success"
	        }
	    });