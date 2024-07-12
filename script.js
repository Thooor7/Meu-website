$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");0
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
}); 

   // toogle menu/navbar script
   $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
   });

  //Function for videos
   document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.getElementById('video-container');
    const videoURLs = [
        'https://www.youtube.com/embed/p6Rhcw6Vv8o',
        'https://www.youtube.com/embed/CfTxzQKaEfk',
        'https://www.youtube.com/embed/Y2FZlzd-3hc',
        'https://www.youtube.com/embed/lZLDGy7FUrk',
        'https://www.youtube.com/embed/_Xn-wSfrmyE',
        'https://www.youtube.com/embed/7YMoOtJ4QUQ',
        'https://www.youtube.com/embed/H__zj-Yx4i8',
        'https://www.youtube.com/embed/p_aZDGZYm6k'
    ];

    videoURLs.forEach(url => {
        const videoDiv = document.createElement('div');
        videoDiv.className = 'video';
        
        const iframe = document.createElement('iframe');
        iframe.width = '560';
        iframe.height = '315';
        iframe.src = url;
        iframe.title = 'YouTube video player';
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        
        videoDiv.appendChild(iframe);
        videoContainer.appendChild(videoDiv);
    });
});