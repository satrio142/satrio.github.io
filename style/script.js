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

    window.onload = function() { jam(); }
   
    function jam() {
     var e = document.getElementById('jam'),
     d = new Date(), h, m, s;
     h = d.getHours();
     m = set(d.getMinutes());
     s = set(d.getSeconds());
   
     e.innerHTML = h +':'+ m +':'+ s;
   
     setTimeout('jam()', 1000);
    }
   
    function set(e) {
     e = e < 10 ? '0'+ e : e;
     return e;
    }