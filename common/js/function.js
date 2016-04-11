$(document).ready(function(){
    function get_data_voice(urlGet){
    $.ajax({
      type:"GET",
      url:urlGet,
      dataType:"html"

    }).done(function(rs){
      $('#post-detail-pop-content').html(rs);
      $('#post-detail-pop').bPopup({
                easing: 'easeOutBack',
                speed: 1000,
                position: ["auto", "auto"],
                positionStyle: "absolute",
                follow: [false, false],
                onClose: function(){
                    $('#post-detail-pop').fadeOut(1);
                }
              });
    });
  }
  $('.readmore').click(function(){
       var url = $(this).attr('link');
       get_data_voice(url);
       return false;
      });
      $("#send-mail").click(function (){
      		var urlPOST = "/mail.php";
      		var yourname = $("#yourname").val();
      		var address = $("#address").val();
      		var subject = $("#subject").val();
      		var content = $("#content").val();
      		var email = $("#email").val();
      		if(yourname.length<=0 || address.length<=0 || subject.length<=0 || content.length<=10 || email.length<=6){
      			alert("Error!!! Please input data.");
      			return;
      		}
      		var approve_data = {'yourname': yourname, 'address': address, 'subject':subject, 'content':content, 'email':email,'sendmail':1};
      		$.ajax({
		      type:"POST",
		      url:urlPOST,
		      dataType:"json",
		      data: approve_data,
		    }).done(function(rs){
		      $('#post-detail-pop-content').html(rs['des']);
		      $('#post-detail-pop').bPopup({
		                easing: 'easeOutBack',
		                speed: 1000,
		                position: ["auto", "auto"],
		                positionStyle: "absolute",
		                follow: [false, false],
		                onClose: function(){
		                    $('#post-detail-pop').fadeOut(1);
		                }
		              });
		    });
      });
    });
/*$('#subsendcontent').css('display','none');
$('#subcomback').css('display','none');
$('#subconfirm').click(function(){
	$('.form-control').css('display','none');
	$('.txtFormError').css('display','none');
	$('.lbFormConfirm').css('display','block');
	$('#subsendcontent').css('display','block');
	$('#subconfirm').css('display','none');
	$('#subconfirm').css('display','none');
	$('.formrow').addClass('formrowsp');
});
$('#subsendcontent').click(function(){
	$('.form-control').css('display','none');
	$('.txtFormError').css('display','none');
	$('.lbFormConfirm').css('display','none');
	$('#subsendcontent').css('display','none');
	$('.successconfirm').css('display','block');
	$('.formrow').css('display','none');
	$('#subcomback').css('display','block');
	
});/