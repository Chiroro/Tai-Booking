// Button File styler
// Author: Mart Lloyd Mativo
// Version: 1.0.0
// Build Date: Feb 29, 2016

function buttontoinputFile() {
    var a,b,c,d,e,f,g,h,j,k,l,m,n,o;
	a = $('.bfs');
	a.each(function() {
		b = $(this);
    	c = b.data('id');
    	d = b.data('style');
    	e = "<span class='input-group-btn'></span>";
    	f = "<div class='input-group'></div>";
    	g = b.data('size');
        j = b.data('enabled');
        k = "<div class='ButtonHolder'></div>";
        l = b.data('placeholder');
        m = b.data('textclass');
        if(m){
            m = b.data('textclass');
        }else{
            m = "bfs-text";
        }
    	if(g === 'sm'){
    		h = "<input type='text' class='bfs-disabled form-control input-sm "+m+"'>";
    		b.addClass('btn-sm');
    	}else if(g === 'lg'){
    		h = "<input type='text' class='bfs-disabled form-control input-lg "+m+"'>";
    		b.addClass('btn-lg');
    	}else{
    		h = "<input type='text' class='bfs-disabled form-control "+m+"'>";
    	}
    	if(d === 'fileStyle-r'){
    		b.wrap(f);
    		b.after(h);
    		b.wrap(e);
            b.after("<input type='file' id='"+c+"' class='bfs-input' style='display:none;'>");
    	}else if(d === 'fileStyle-l'){
    		b.wrap(f);
    		b.before(h);
    		b.wrap(e);
            b.before("<input type='file' id='"+c+"' class='bfs-input' style='display:none;'>");
    	}else{
            b.wrap(k);
    		b.after("<input type='file' id='"+c+"' class='bfs-input' style='display:none;'>");
    	}
        if(j === true){
            b.closest('div').find(':text').prop("disabled",false);
        }else{
            b.closest('div').find(':text').prop("disabled",true);
        }
        if(l){
            b.closest('div').find(':text').attr("placeholder",l);
        }
	});
		a.closest("div").find(':file').on('change',function() {
		    var filename = $(this).val();
		    var lastIndex = filename.lastIndexOf("\\");
		    if (lastIndex >= 0) {
		        filename = filename.substring(lastIndex + 1);
		    }
		    $(this).closest("div").find(":text").val(filename);
		});
        a.on('click',function(){
            $(this).closest('div').find('.bfs-input').trigger('click');
        });
}

