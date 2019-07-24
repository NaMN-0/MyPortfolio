$(function(){

    var windowWidth = $(window).width();
    var xMenu = document.getElementsByClassName("xMenu");
    var yMenu = document.getElementsByClassName("yMenu");
    var moreBtn = document.getElementsByClassName("moreBtn");

    if(windowWidth <= 500){

        var windowWidth = $(window).width();
        $(xMenu).addClass("hidden");
        $(moreBtn).removeClass("hidden");         

    }

    if(windowWidth <= 500){
    
        $(yMenu).addClass("hidden");

    }

    $(window).resize(function(){

        var windowWidth = $(window).width();
        if(windowWidth <= 500){
    
            $(xMenu).addClass("hidden");
            $(moreBtn).removeClass("hidden");
    
        }    

        if(windowWidth >= 500){
    
            $(xMenu).removeClass("hidden");
            $(moreBtn).addClass("hidden");                
    
        }    

    })

    $(moreBtn).on("click", function(){

        $(yMenu).slideToggle(1000);

    })

    var leftBtn = document.getElementsByClassName("left");
    var rightBtn = document.getElementsByClassName("right");
    
    var pro1 = document.getElementsByClassName("pro1")
    var pro2 = document.getElementsByClassName("pro2")
    var pro3 = document.getElementsByClassName("pro3")

    var pro = 1;

    $(rightBtn).on("click", function(){

        if(pro<3){
            pro++;
        }

        $(pro1).addClass("hidden");
        $(pro2).addClass("hidden");
        $(pro3).addClass("hidden");
        $(document.getElementsByClassName("pro" + (pro))).removeClass("hidden");
    })

    $(leftBtn).on("click", function(){

        if(pro>1){
            pro--;
        }

        $(pro1).addClass("hidden");
        $(pro2).addClass("hidden");
        $(pro3).addClass("hidden");
        $(document.getElementsByClassName("pro" + (pro))).removeClass("hidden");
    })


    {                                                           /*star fxn */
        {
            j=1;                    /* skill number */
            j1 = 3;                 /* points out of 5 */
    
            for(i=1;i<=j1;i++)
            {
    
                var x = document.getElementsByClassName("s" + j + i);
                $(x).fadeToggle(1000);
    
            }
    
            for(i=j1+1;i<=5;i++)
            {
    
                var y = document.getElementsByClassName("ss" + j + i);
                $(y).fadeToggle(1000);        
    
            }
        }
    
        {
            j=2;                    /* skill number */
            j1 = 2;                 /* points out of 5 */
    
            for(i=1;i<=j1;i++)
            {
    
                var x = document.getElementsByClassName("s" + j + i);
                $(x).fadeToggle(1000);
    
            }
    
            for(i=j1+1;i<=5;i++)
            {
    
                var y = document.getElementsByClassName("ss" + j + i);
                $(y).fadeToggle(1000);        
    
            }
        }
    
        {
            j=3;                    /* skill number */
            j1 = 2;                 /* points out of 5 */
    
            for(i=1;i<=j1;i++)
            {
    
                var x = document.getElementsByClassName("s" + j + i);
                $(x).fadeToggle(1000);
    
            }
    
            for(i=j1+1;i<=5;i++)
            {
    
                var y = document.getElementsByClassName("ss" + j + i);
                $(y).fadeToggle(1000);        
    
            }
        }
    
        {
            j=4;                    /* skill number */
            j1 = 3;                 /* points out of 5 */
    
            for(i=1;i<=j1;i++)
            {
    
                var x = document.getElementsByClassName("s" + j + i);
                $(x).fadeToggle(1000);
    
            }
    
            for(i=j1+1;i<=5;i++)
            {
    
                var y = document.getElementsByClassName("ss" + j + i);
                $(y).fadeToggle(1000);        
    
            }
        }
    
        {
            j=5;                    /* skill number */
            j1 = 2;                 /* points out of 5 */
    
            for(i=1;i<=j1;i++)
            {
    
                var x = document.getElementsByClassName("s" + j + i);
                $(x).fadeToggle(1000);
    
            }
    
            for(i=j1+1;i<=5;i++)
            {
    
                var y = document.getElementsByClassName("ss" + j + i);
                $(y).fadeToggle(1000);        
    
            }
        }

    }

/*
    var h2 = document.getElementsByTagName("h2")

    h2.innerHTML
*/
})

