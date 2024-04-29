
$(document).ready(function () {

    // 首頁滑動展開效果
    $('.hotType li').hover(function () {
        $(this).css('opacity', '0.8');
        $(this).siblings().css('opacity', '0.3')
    }, function () {
        $(this).siblings().css('opacity', '0.8');
    });

    // header搜尋點擊效果
    $('.search').click(function () {

        let searchToggle = $('.searchBox').css('display');

        if (searchToggle === 'none') {
            $(this).siblings('.searchBox').css('display', 'block');
            $('.search i').removeClass('fa-solid fa-magnifying-glass').addClass('fa-solid fa-xmark');
        } else {
            $(this).siblings('.searchBox').css('display', 'none');
            $('.search i').removeClass('fa-solid fa-xmark').addClass('fa-solid fa-magnifying-glass');
        }

        // $('.search i').toggleClass(function() {
        //     if($('.search i').hasClass('fa-solid fa-magnifying-glass')) {
        //         return 'fa-solid fa-xmark';
        //     } else {
        //         return 'fa-solid fa-magnifying-glass';
        //     }
        // });

    })

    // 商店及類型頁fliter點擊效果

    $('.tagFliter i').click(function () {
        let fliterToggle = $('.tagFliter ul').css('display');

        if (fliterToggle === 'none') {
            $(this).siblings('ul').css('display', 'block');
            $(this).removeClass('fa-solid fa-filter').addClass('fa-solid fa-xmark');
        } else {
            $(this).siblings('ul').css('display', 'none');
            $(this).removeClass('fa-solid fa-xmark').addClass('fa-solid fa-filter');
        }
    })





    // setInterval(() => {
    //     $().()
    // }, 1000)

    // let $this = $('.bannerSet div')
    // if ($this.hasClass('banner b0')) {
    //     $this.removeClass('banner b0').addClass('banner b1');
    // }
    // if ($this.hasClass('banner b1')) {
    //     $this.removeClass('banner b1').addClass('banner b2');
    // }
    // if ($this.hasClass('banner b2')) {
    //     $this.removeClass('banner b2').addClass('banner b3');
    // }
    // if ($this.hasClass('banner b3')) {
    //     $this.removeClass('banner b3').addClass('banner b0');
    // }

    // --------------------------------------------------------------------------


    function next() {
        for (let div of document.querySelectorAll('.banner')) {
            let b = div.classList[1];
            let seq = +b[1];
            div.classList.remove(b);
            div.classList.add(`b${(seq + 1) % 4}`);
        }
    }

    function prev() {
        for (let div of document.querySelectorAll('.banner')) {
            let b = div.classList[1];
            let seq = +b[1];
            div.classList.remove(b);
            div.classList.add(`b${(seq + 3) % 4}`);
        }
    }


    let bannerInterval = setInterval(next, 2500);


    let lbtn = document.querySelector('.lbtn');
    let rbtn = document.querySelector('.rbtn');

    lbtn.addEventListener('click', () => {
        clearInterval(bannerInterval)
        next()
        bannerInterval = setInterval(next, 2500);
    })

    rbtn.addEventListener('click', () => {
        clearInterval(bannerInterval)
        prev()
        bannerInterval = setInterval(next, 2500);
    })

    // let count = 0;
    // function interval() {
    //     let i = 0;

    //     next()

    //     count++;

    //     if (count <= i--) {
    //         clearInterval(bannerInterval);
    //     }
    // }

    //   for (i; i <= 3; i++) {
    //     $(`.bannerSet div:nth-child(${(i + 1)})`).addClass(`b${(i + 1) % 4}`).removeClass(`b${i}`);

    //     $(`.b${i}`).addClass(`b${(i + 1) % 4}`).removeClass(`b${i}`);
    //     }

    //     let cot = 0;
    //     function nex() {
    //     if (cot < 3) {
    //         cot++;
    //         $('.banner').eq(cot).css({ 'transform': 'translate3d(0px, 0px, 0px)', 'z-index': '40' });
    //         $('.banner').eq(cot - 1).css({ 'transform': 'translate3d(-508px, 100px, -500px)', 'z-index': '30' });
    //     }
    // }
    //     function pre() {
    //     if (cot > 0) {
    //         cot--;
    //         $('.banner').eq(cot).css({ 'transform': 'translate3d(0px, 0px, 0px)', 'z-index': '40' });
    //         $('.banner').eq(cot + 1).css({ 'transform': 'translate3d(469px, 100px, -500px)', 'z-index': '30' });
    //     }
    // }



    // switch($('.bannerSet div').hasClass()) {
    //     case 'banner b0' :
    //         $('.banner b0').removeClass('.banner b0').addClass('.banner b1');
    //     case 'banner b1' :
    //         $('.banner b1').removeClass('.banner b1').addClass('.banner b2');
    //     case 'banner b2' :
    //         $('.banner b2').removeClass('.banner b2').addClass('.banner b3');
    //     case 'banner b3' :
    //         $('.banner b3').removeClass('.banner b3').addClass('.banner b0');
    // }

    // let ban1 = document.querySelector(".banner b0");
    // let ban2 = document.querySelector(".banner b1");
    // let ban3 = document.querySelector(".banner b2");
    // let ban4 = document.querySelector(".banner b3");

    // let banner = [ban1, ban2, ban3, ban4];

    // let spots = [
    //     { zIndex: 40, transform: 'translate3d(0px, 0px, 0px)' },
    //     { zIndex: 30, transform: 'translate3d(-608px, 0px, -400px)' },
    //     { zIndex: 20, transform: 'translate3d(0px, 0px, -2300px)' },
    //     { zIndex: 30, transform: 'translate3d(608px, 0px, -400px)' }
    // ];

    // for (let i = 0; i < 3; i++) {
    //     banner[i].style.zIndex = spots[i].zIndex;
    //     benner[i].style.transform = spots[i].transform;
    // };

    // ban1.style.zIndex = 10
    // $('.banner b0').css('zIndex', 10)


    // ----------------------------------------------
    // ----------------------------------------------
    // ----------------------------------------------
    // --------------以下typeCamp.html---------------
    // ----------------------------------------------
    // ----------------------------------------------
    // ----------------------------------------------

    // $('.gametype li').click(function() {
    //     let typeIndex = $(this).index();
    //     $('.gametype li.trigged').removeClass('trigged').fadeOut(function() {
    //         $('.gametype li').eq(typeIndex).fadeIn().addClass('trigged');
    //     })
    // });

    // $('.gametype li').hide().first().show().addClass('trigged');



    // $('#asd').click(function(){
    //     console.log(this);
    //     $('.gametype li').removeClass('trigged');
    //     $(this).addClass('trigged');
    // });

    // $('.hamburger').click(function(){
    //     let burgerToggle = $(this).siblings('ul').css('display','block');
    //     burgerToggle = !burgerToggle;
    //     $(this).siblings('ul').css('display', burgerToggle ? 'block' : 'none');

    // });


    

});
// ------------jQery截止線--------------



function doFrist() {

    function toggleClass(element, className) {
        if (element.classList.contains(className)) {
            element.classList.remove(className);
        } else {
            element.classList.add(className);
        }
    }

    let burger = document.querySelector('.hamburger');
    let navUl = document.querySelectorAll('.nav ul');
    let burgerLine = document.querySelectorAll('.hamburger span');

    burger.addEventListener('click', () => {
        navUl.forEach(ul => {
            ul.style.display = ul.style.display === "flex" ? "none" : "flex";
        });

        burgerLine.forEach(span => {
            toggleClass(span, 'active');
        });
    });

}


window.addEventListener('load', doFrist)




document.addEventListener("DOMContentLoaded", () => {

    // --------------篩選列表--------------

    let li = document.querySelectorAll(".gametype li");

    li.forEach((item) => {
        item.addEventListener("click", () => {
            li.forEach(() => {
                item.classList.toggle("trigged");
            });

        
            let triggedTags = document.querySelectorAll('.trigged');
            let itemList = document.querySelectorAll('.items>li');


            if(triggedTags.length === 0){
                itemList.forEach((item) =>{
                    item.style.display = 'block';                
                });
                return;
            } 

            gan(triggedTags, itemList);

        })
    })

    
    function gan(triggedTags, itemList){
        itemList.forEach((item) => {
            item.style.display = 'none';
        });
        
        triggedTags.forEach((triggedTag)=>{
            let category = triggedTag.getAttribute('data-category');            
            
            console.log(category);
            
            itemList.forEach((item) => {
                let dataItem = item.getAttribute('data-item');
                
                if(dataItem.includes(category)){
                    item.style.display = 'block';
                }
                
            });
        });
    }        

    
    
    // function gan(triggedTags, itemList){
    //     itemList.forEach((item) => {
    //         item.style.display = 'none';
    //     });
        
    //     triggedTags.forEach((triggedTag) => {
    //         let category = triggedTag.getAttribute('data-category');
    //         let categoryValues = category.split(',');
    //         console.log(categoryValues);
            
    //         categoryValues.forEach((value) => {
    //             itemList.forEach((item) => {
    //                 let dataItem = item.getAttribute('data-item');
                    
    //                 if(dataItem.includes(value)){
    //                     item.style.display = 'block';
    //                 } else {
    //                     item.style.display = 'none';
    //                 }
    //             });
    //         });
    //     });
    // }

    // ----------------------------------------------------------------------
            // let isVisible = false; 

            // triggedTag.forEach((triggedTag) => {
                
                
            //     if(itemCategory.includes(dataItem)){
            //         isVisible = true;
            //     }
            // });

            // if(isVisible) {
            //     item.style.display = "block";
            // } else {
            //     item.style.display = "none";
            // }
    
    // itemList.forEach((item)=>{
                //     let dataItem = item.getAttribute('data-item');
                //     // console.log(itemTags);

                //     if(triggedTag.getAttribute('item-category').includes(dataItem)){
                //         item.style.display = "block";
                //     } else {
                //         item.style.display = "none";
                //     };

                // })
    // ----------------------------------

    let li2 = document.querySelectorAll(".pplnum li");

    li2.forEach((item) => {
        item.addEventListener("click", () => {
            li2.forEach((li) => {
                li.classList.remove("trigged");
            });
            item.classList.add("trigged");
        });
    });

    let li3 = document.querySelectorAll(".difficulty li");

    li3.forEach((item) => {
        item.addEventListener("click", () => {
            li3.forEach((li) => {
                li.classList.remove("trigged");
            });
            item.classList.add("trigged");
        });
    });


// ----------------------------------

// $(this).toggleClass('active');
// let clickBtn = $(`.list_btn button.active`)



// if ($(".list_btn button.active").length === 0) {
//     $(".card_zone ul > li").show(); 
//     return; 
// }



// $(".card_zone ul > li").each(function(){
//     let categoryCard = $(this).data('class');
   
    
//     if ($(clickBtn).filter(":contains(" + categoryCard + ")").length > 0) {
//         $(this).show();
//     } else {
//         $(this).hide();
//     }
// });







    // --------------換頁--------------

    let pages = document.querySelectorAll('.changePage a');

    pages.forEach(a => {
        a.addEventListener('click', () => {
            pages.forEach((a) => {
                a.classList.remove('pageHere');
            });
            a.classList.add('pageHere');
        })
    })

    // --------------滾到時滑入----------

    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    });

    const slideRight = document.querySelectorAll(".slide-right");
    slideRight.forEach((el) => {
        observer.observe(el);
    });

    //--------------- 商品頁數量加減-----------

    let inputNum = document.querySelector('.itemNums input');
    const addBtn = document.querySelector('.addNum');
    const removeBtn = document.querySelector('.removeNum');
    
    addBtn.addEventListener('click', ()=>{
        let nowNum = parseInt(inputNum.value);
        inputNum.value = nowNum + 1;
    });

    removeBtn.addEventListener('click', ()=>{
        if(inputNum.value > 1){
            let nowNum = parseInt(inputNum.value);
            inputNum.value = nowNum - 1;
        }
    });

});






