$(document).ready(function(){
  // INIT PARALAX EFFECT ON HEADER
  window_width = $(window).width();
  if (window_width >= 992){
      big_image = $('.wrapper > .header');

    $(window).on('scroll', materialKitDemo.checkScrollForParallax);
  }

  // INIT PRETTY EMBED ON VIDEO IFRAME
  $('#weesurf-video').prettyEmbed({
    videoID: '2XKwC0ipCWA',
    previewSize: 'hd',              // use either this option...
    customPreviewImage: 'assets/images/weesurf-video.jpg',         // ...or this option

    // Embed controls
    showInfo: false,
    showControls: false,
    loop: false,

    colorScheme: 'dark',
    showRelated: false,

    useFitVids: false
  });

  // INIT INSTAFEED
  var userFeed = new Instafeed({
    get: 'user',
    clientID: 'd1ccc6556d2d4f4680eebebfce6badbc',
    accessToken:'2136174131.d1ccc65.8eec8dedffba4f5c810911e77b041e1c',
    userId: 2136174131,
    limit: 15,
    link: false,
    resolution: 'standard_resolution',
    sortBy: 'most-recent',
  });

  userFeed.run();

  // INIT SLICK TESTIMONIALS
  $('.testimonials').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});