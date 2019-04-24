// JavaScript Document
$(document).ready(function(){	
        var fenye_w=(parseFloat($(".jiantou").width()));
        var fenye_w1=(parseFloat($("#ban").width()));
        var fenye_left=parseFloat($(".jiantou").css("left"));
      var dian_w=parseFloat($(".ul_dian").width());
        var l= 0.5*fenye_w1-0.5*fenye_w;
        var l2= 0.5*fenye_w1-0.5*dian_w;
        $(".jiantou").css("margin-left",l);
        $(".ul_dian").css("margin-left",l2);
    var currIndex = 0;
    var prevIndex = 0;
    var len;
    var moveInt;
    var _isMoveClick = false;
    var distNavLeft;
    function MoveRightBtn(_prev,_next){
        $('#ban_xia_center li').eq(_prev).stop(true,false).animate({left:-727},500,function(){})
        $('#ban_xia_center li').eq(_next).css({left:$(window).width()}).stop(true,false).animate({left:0},500,function(){
            _isMoveClick = false;	
        })
    }
    function MoveLeftBtn(_prev,_next){
        $('#ban_xia_center li').eq(_prev).stop(true,false).animate({left:727},500,function(){})/*$(window).width()*/
        $('#ban_xia_center li').eq(_next).css({left:-$(window).width()}).stop(true,false).animate({left:0},500,function(){
            _isMoveClick = false;	
        })
    }
    function autoMove(){
        if(currIndex >=(len-1)){
            currIndex = 0;
            prevIndex = len-1;
        }else{
            prevIndex = currIndex;
            currIndex = currIndex+1;
        }
        MoveRightBtn(prevIndex,currIndex);	
    }
    var next1 = 0;
    var prev2 = 0;
    var click_shu = false;
    $(function(){
        var li_width=$("#ban .ban_bj").width();
        $('#ban .ban_bj li').not(':first').css({left:li_width});
        li_shu = $('#ban .ban_bj li').length;

        movezi = window.setInterval(function(){
            zimove(prev2,next1);
        },5000)
        $('#ban ul.ul_dian li').hover(function(){
                clearInterval(movezi)
            },function(){
            movezi = window.setInterval(function(){
                zimove(prev2,next1);
            },5000);
        })/**/
        $('.ban_bj li').hover(function(){
                clearInterval(movezi);
                jiantou_show()
            },function(){
            movezi = window.setInterval(function(){
                zimove(prev2,next1);
                jiantou_hide();
            },5000);
        })
        $('.jiantou div').hover(function(){
                clearInterval(movezi);
                jiantou_show()
            },function(){
            movezi = window.setInterval(function(){
                zimove(prev2,next1);
                jiantou_hide();
            },5000);
        })
        $(".jiantou .jiantou_left").click(function(){
            
        if(next1 <=0){
            next1 = li_shu-1;
            prev2 = 0;
        }else{
            prev2 = next1;
            next1 = next1-1;
        }
        moveleft(prev2,next1);	
            
            
            });
        $(".jiantou .jiantou_right").click(function(){
            
        if(next1 >=(li_shu-1)){
            next1 = 0;
            prev2 = li_shu-1;
        }else{
            prev2 = next1;
            next1 = next1+1;
        }
        moveright(prev2,next1);	
            });
        $('#ban ul.ul_dian li').click(function(){
         
            var bannercurrIndex = $('#ban ul.ul_dian li').index(this);
    

            moveright(next1,bannercurrIndex);
      
            next1 = bannercurrIndex;
        })	
    })
    function jiantou_show(){
        $(".jiantou").show(10)
        }
    function jiantou_hide(){
        $(".jiantou").hide(10)	
        }
   
    function moveright(_prev,_next){
        var li_width=$("#ban .ban_bj").width();
        $('#ban .ban_bj li').eq(_prev).stop(true,false).animate({left:-li_width},1000,function(){})
        // 灏忓浘鏍� remove add  .Class
        $('#ban ul.ul_dian li').eq(_prev).removeClass('licurr');
        $('#ban ul.ul_dian li').eq(_next).addClass('licurr');
        $('#ban .ban_bj li').eq(_next).css({left:li_width}).stop(true,false).animate({left:0},1000,function(){
            click_shu = false;	
        })
    }

    function moveleft(_prev,_next){
        var li_width=$("#ban .ban_bj").width();
        $('#ban .ban_bj li').eq(_prev).stop(true,false).animate({left:li_width},1000,function(){})
        $('#ban ul.ul_dian li').eq(_prev).removeClass('licurr');
        $('#ban ul.ul_dian li').eq(_next).addClass('licurr');
        $('#ban .ban_bj li').eq(_next).css({left:-li_width}).stop(true,false).animate({left:0},1000,function(){
            click_shu = false;	
        })
    } 

    function zimove(){
        if(next1 >=(li_shu-1)){
            next1 = 0;
            prev2 = li_shu-1;
        }else{
            prev2 = next1;
            next1 = next1+1;
        }
        moveright(prev2,next1);	
    }
    $(document).ready(function(e) {
        $('.flex_comBtn').hover(function(){
            window.clearInterval(movezi)
        },function(){
            movezi = window.setInterval(function(){
                zimove(prev2,next1);
            },5000)
        })
    });	
    })
    
     