$(document).ready(function(){
    $('#component-nav').click(function(e){
        let target = e.target;

        if (target.tagName !== 'LI') return;

        $(this).find('li').removeClass('active');
        $(target).addClass('active');
        
        let tab = $(target).attr('data-tab');
        $('.tab').removeClass('active');
        $('.' + tab).addClass('active');
    })

    $('.text-options').click(function(e){
        let target = e.target;
        if (target.tagName !== 'LI') return;
        
        if($(target).hasClass('active')){
            $(target).removeClass('active');
            return;
        }
        $(target).addClass('active');
        
    })
});