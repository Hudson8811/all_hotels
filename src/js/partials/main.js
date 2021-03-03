$(document).ready(function(){
    $('.header-burger').click(function(e){
        e.preventDefault();
        $(this).toggleClass('is-active');
        $('.header-menu').toggleClass('is-active');
        $('body').toggleClass('hidden');
    });


    $('.header-link, .header-menu-title').click(function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - $('.header').height()}, 1000);
        return false;
    });

    $('[data-fancybox]').fancybox({
		touch: false,
		scrolling: 'no',
		beforeShow: function(){
			$("body").css({'overflow-y':'hidden'});
		},
		afterClose: function(){
			$("body").css({'overflow-y':'visible'});
		}
    });
    

    $('.slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:true,responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true
              }
            },
          ]
      });
    

    $('.m_header-select-holder').click(function(){
      const $this = $(this);
      if(!$this.parent('.m_header-select-wrapper').hasClass('is-active')){
        $this.parent('.m_header-select-wrapper').addClass('is-active'); 
        $this.siblings('.m_header-select-content').slideDown(200);
      } else{
        $this.parent('.m_header-select-wrapper').removeClass('is-active'); 
        $this.siblings('.m_header-select-content').slideUp(200);
      };
    });

    $('.m_header-select-item').click(function(){
      const $this = $(this);
      const value = $(this).text();
      $this.parents('.m_header-select-wrapper').removeClass('is-active'); 
      $this.parent('.m_header-select-content').slideUp(200);
      $this.parent('.m_header-select-content').siblings('.m_header-select-holder').html(value);
    });

    $('.m_forms-slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      appendArrows: $('.m_forms-wrapper .container')
    });


});

function initMap() {
  const myLatLng = {
    lat: 55.727270341260635,
    lng: 37.611032827380114
  };

  const myLatLng2 = {
    lat: 55.6368659435821,
    lng: 37.5098542242629
  };

  const myLatLng3 = {
    lat: 55.688752282828005,
    lng: 37.57360182731105
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: myLatLng,
    fullscreenControl: true,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    icon: {
			url: "img/marker.svg",
			scaledSize: new google.maps.Size(48, 64)
		}
  });

  new google.maps.Marker({
    position: myLatLng2,
    map,
    icon: {
			url: "img/marker.svg",
			scaledSize: new google.maps.Size(48, 64)
		}
  });

  new google.maps.Marker({
    position: myLatLng3,
    map,
    icon: {
			url: "img/marker.svg",
			scaledSize: new google.maps.Size(48, 64)
		}
  });
}

