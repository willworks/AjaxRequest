$(function () { 
	// jquery-mockjax拦截ajax请求进行数据模拟
	var isAjaxMocked = true;
	if (isAjaxMocked) {
	    $.mockjax({
	        url: 'http://host/api/api_name',
	        status: 200,
	        responseTime: 900,
	        // 模拟数据
	        responseText: 
	        {
	            "code": 0,
	            "data": {
	                data_list: 
	                [
					    { 
					    	id: '12313',
						    img: 'resources/images/img.png', 
						    name: 'name', 
						    price: 'price'
						}, 

					    { 
					    	id: '123123',
						    img: 'resources/images/img.png', 
						    name: 'name', 
						    price: 'price'
						}, 

					    { 
					    	id: '12313',
						    img: 'resources/images/img.png', 
						    name: 'name', 
						    price: 'price'
						}, 

					    { 
					    	id: '123123',
						    img: 'resources/images/img.png', 
						    name: 'name', 
						    price: 'price'
						}, 
				    ] 
	            },
	            "msg": "success"
	        }
	    });
	}

	// 请求档期接口获取数据
	$.ajax({
	    url : "http://host/api/api_name",
	    brand_ids : "01234,56789",//批量查询
	    dataType : "jsonp",
	    jsonp : "jsonp",
	    success : function(res){
	        if (0 === res.code) {
	        	// 切割接口数据
	        	var item = [];
	        	var brandMsg = res.data.data_list;
	        	console.log(brandMsg);
	        	for (var i=0; i<brandMsg.length;i++){
	        		item[i] = {
	        			id:brandMsg[i].id,
	        			name:brandMsg[i].name,
	        			img:brandMsg[i].img,
	        			price:brandMsg[i].price
	        		};
	        	}

	            // 分三部分渲染
                $('#itemTemplate').tmpl(item, {
                    getTags: function (separator) {
                        return this.data.tags.join(separator);
                    }
                }).appendTo('#item1');
                $('#itemTemplate').tmpl(item, {
                    getTags: function (separator) {
                        return this.data.tags.join(separator);
                    }
                }).appendTo('#item2');
                $('#itemTemplate').tmpl(item, {
                    getTags: function (separator) {
                        return this.data.tags.join(separator);
                    }
                }).appendTo('#item3');
	        }
	        else {
	            alert(res.msg);
	        }
	    }
	});
}); 
