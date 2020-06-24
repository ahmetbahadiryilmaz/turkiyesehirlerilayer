$(function(){
    $('area').mouseover(function(){
        console.log('#' + $(this).attr('imgid'));
        $('#' + $(this).attr('imgid')).css('filter',"grayscale(0)");
        //$('#' + $(this).attr('imgid')).css('transform', 'scale(1.5)');
    }).mouseleave(function(){
        $('#' + $(this).attr('imgid')).css('filter',"grayscale(100)");
    })

    $('a').mouseover(function(){
        console.log('#' + $(this).attr('imgid'));
        $('#' + $(this).attr('imgid')).css('filter',"grayscale(0)");
        //$('#' + $(this).attr('imgid')).css('transform', 'scale(1.5)');
    }).mouseleave(function(){
        $('#' + $(this).attr('imgid')).css('filter',"grayscale(100)");
    })
    $('a[tumunurenklendir=true]').mouseover(function(){
        console.log('#' + $(this).attr('imgid'));
        $('img').css('filter',"grayscale(0)");
        //$('#' + $(this).attr('imgid')).css('transform', 'scale(1.5)');
    }).mouseleave(function(){
        $('img').css('filter',"grayscale(100)");
    })
})