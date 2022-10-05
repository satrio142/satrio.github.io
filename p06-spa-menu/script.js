		$(document).ready(function(){
		    $(".menu").click(function(){
		        let menu_id = $(this).prop('id');
		        let split = menu_id.split('_');
		        let id = split[1];

		        $(".menu").removeClass('aktif');
		        $("#menu_"+id).addClass('aktif');

		        $(".home").slideUp();
		        $("#isi_1").slideUp();
		        $("#isi_2").slideUp();
		        $("#isi_3").slideUp();
		        $("#isi_"+id).slideToggle();
		    });
		});