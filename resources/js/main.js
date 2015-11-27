$(function () { 
    var item = [
	    { 
	    	id: '12313',
		    img: 'https://avatars3.githubusercontent.com/u/5542777?v=3&s=220', 
		    name: 'name', 
		    price: 'price'
		}, 

	    { 
	    	id: '123123',
		    img: 'https://avatars3.githubusercontent.com/u/5542777?v=3&s=220', 
		    name: 'name', 
		    price: 'price'
		}, 

	    { 
	    	id: '12313',
		    img: 'https://avatars3.githubusercontent.com/u/5542777?v=3&s=220', 
		    name: 'name', 
		    price: 'price'
		}, 

	    { 
	    	id: '123123',
		    img: 'https://avatars3.githubusercontent.com/u/5542777?v=3&s=220', 
		    name: 'name', 
		    price: 'price'
		}, 
    ]; 
    console.log(item);
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
}); 