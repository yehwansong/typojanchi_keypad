
$( document ).ready(function() {
  console.log('j')
    var output_array_keypad = [0,0,0];
    var keypad_num = document.getElementById('keypad_num');
    document.getElementById('0').addEventListener("click", keypad_press_0);
    document.getElementById('1').addEventListener("click", keypad_press_1);
    document.getElementById('2').addEventListener("click", keypad_press_2);
    document.getElementById('3').addEventListener("click", keypad_press_3);
    document.getElementById('4').addEventListener("click", keypad_press_4);
    document.getElementById('5').addEventListener("click", keypad_press_5);
    document.getElementById('6').addEventListener("click", keypad_press_6);
    document.getElementById('7').addEventListener("click", keypad_press_7);
    document.getElementById('8').addEventListener("click", keypad_press_8);
    document.getElementById('9').addEventListener("click", keypad_press_9);
    document.getElementById('delete').addEventListener("click", removeall);
    function keypad_press_0(){
      output_array_keypad.push('0')
      keypad_press()
    }
    function keypad_press_1(){
      console.log('here')
      output_array_keypad.push('1')
      keypad_press()
    }
    function keypad_press_2(){
      output_array_keypad.push('2')
      keypad_press()
    }
    function keypad_press_3(){
      output_array_keypad.push('3')
      keypad_press()
    }
    function keypad_press_4(){
      output_array_keypad.push('4')
      keypad_press()
    }
    function keypad_press_5(){
      output_array_keypad.push('5')
      keypad_press()
    }
    function keypad_press_6(){
      output_array_keypad.push('6')
      keypad_press()
    }
    function keypad_press_7(){
      output_array_keypad.push('7')
      keypad_press()
    }
    function keypad_press_8(){
      output_array_keypad.push('8')
      keypad_press()
    }
    function keypad_press_9(){
      output_array_keypad.push('9')
      keypad_press()
    }
    function keypad_press(){
      output_array_keypad.shift()
      if(output_array_keypad.length == 3){
        keypad_num.innerHTML = output_array_keypad.join('')
      }
    }
    function removeall(){
      output_array_keypad = [0,0,0]
        keypad_num.innerHTML = output_array_keypad.join('')
    }




// loading post
    document.getElementById('move').addEventListener("click", move);
    function move(){
      console.log(keypad)
      document.getElementsByClassName('post')[0].innerHTML = "";
      var output_array = []
          var i = parseInt(output_array_keypad.join(''),10)-1;
          add_post(i)

          document.getElementsByTagName('body')[0].getElementsByTagName('div')[0].style.height = 'auto'
          document.getElementsByClassName('post')[0].style.display = 'block'
          document.getElementsByClassName('post')[0].style.opacity = '1'
    }
        function scrollToTop(scrollDuration) {
            var scrollStep = -window.scrollY / (scrollDuration / 15),
                scrollInterval = setInterval(function(){
                if ( window.scrollY != 0 ) {
                    window.scrollBy( 100, scrollStep );
                }
                else clearInterval(scrollInterval); 
            },15);
        }




function numtoalp(num){
        if (num == 1){ return('a') }
        if (num == 2){ return('b') }
        if (num == 3){ return('c') }
        if (num == 4){ return('d') }
}
// function swipe(img_wrap){
//     var counter = 0
//     img_wrap.addEventListener("touchstart", startTouch, false);
//     img_wrap.addEventListener("touchmove", moveTouch, false);
//     var initialX = null;
//     var initialY = null;

//     function startTouch(e) {
//       initialX = e.touches[0].clientX;
//       initialY = e.touches[0].clientY;
//     };

//     function moveTouch(e) {
//       if (initialX === null) {
//         return;
//       }

//       if (initialY === null) {
//         return;
//       }

//       var currentX = e.touches[0].clientX;
//       var currentY = e.touches[0].clientY;

//       var diffX = initialX - currentX;
//       var diffY = initialY - currentY;

//       if (Math.abs(diffX) > Math.abs(diffY)) {
//         if (diffX > 0) {
//           if(counter<img_wrap.getElementsByClassName('nimg').length-1){
//             counter ++ 
//             img_wrap.style.marginLeft = counter*-100+'vw'
//             console.log(counter)
//           }
//         } else {
//           if(counter> 0){
//             counter --
//             img_wrap.style.marginLeft = counter*-100+'vw'
//             console.log(counter)
//           }
//         }  
//       }

//       initialX = null;
//       initialY = null;

//       e.preventDefault();
//   }
// }
        function add_post(i){
            if(i > 195 || typeof data.feed.entry[i*13].content ==='undefined'){
            alert('001-195사이의 번호를 입력해 주세요.')
            }

                  document.getElementsByClassName('post')[0].innerHTML = "";
                  var element = document.querySelector("#post");

                  if(i > 29 && i<44){
                    var img_wrap = document.createElement("DIV");
                    img_wrap.classList.add('img_wrap')
                    swipe(img_wrap)


                    if(i == 30){
                        img_wrap.style.width = 100*3+'vw'
                      for (var k = 3; k >= 1; k--) {
                        var img = document.createElement("DIV");
                        img.classList.add('nimg');
                        img.classList.add('aimg'+ numtoalp(k));
                        img_wrap.appendChild(img)
                      }
                    }else if(i==31){
                        img_wrap.style.width = 100*3+'vw'
                      for (var k = 3; k >= 1; k--) {
                        var img = document.createElement("DIV");
                        img.classList.add('nimg');
                        img.classList.add('bimg'+ numtoalp(k));
                        img_wrap.appendChild(img)
                      }
                    }else if(i==32){
                        img_wrap.style.width = 100*3+'vw'
                      for (var k = 3; k >= 1; k--) {
                        var img = document.createElement("DIV");
                        img.classList.add('nimg');
                        img.classList.add('cimg'+ numtoalp(k));
                        img_wrap.appendChild(img)
                      }
                    }else if(i==33){
                        img_wrap.style.width = 100*3+'vw'
                      for (var k = 3; k >= 1; k--) {
                        var img = document.createElement("DIV");
                        img.classList.add('nimg');
                        img.classList.add('dimg'+ numtoalp(k));
                        img_wrap.appendChild(img)
                      }
                    }else if(i==34){
                        img_wrap.style.width = 100*4+'vw'
                      for (var k = 4; k >= 1; k--) {
                        var img = document.createElement("DIV");
                        img.classList.add('nimg');
                        img.classList.add('eimg'+ numtoalp(k));
                        img_wrap.appendChild(img)
                      }
                    }else if(i==35){
                        img_wrap.style.width = 100*3+'vw'
                      for (var k = 3; k >= 1; k--) {
                        var img = document.createElement("DIV");
                        img.classList.add('nimg');
                        img.classList.add('fimg'+ numtoalp(k));
                        img_wrap.appendChild(img)
                      }
                    }else if(i==36){
                        img_wrap.style.width = 100*7+'vw'
                      for (var k = 7; k >= 1; k--) {
                        var img = document.createElement("DIV");
                        img.classList.add('nimg');
                        img.classList.add('gimg'+ numtoalp(k));
                        img_wrap.appendChild(img)
                      }
                    }else if(i==37){
                        img_wrap.style.width = 100*3+'vw'
                      for (var k = 3; k >= 1; k--) {
                        var img = document.createElement("DIV");
                        img.classList.add('nimg');
                        img.classList.add('himg'+ numtoalp(k));
                        img_wrap.appendChild(img)
                      }
                    }else if(i==38){
                        img_wrap.style.width = 100*4+'vw'
                      for (var k = 4; k >= 1; k--) {
                        var img = document.createElement("DIV");
                        img.classList.add('nimg');
                        img.classList.add('iimg'+ numtoalp(k));
                        img_wrap.appendChild(img)
                      }
                    }else if(i==39){
                        img_wrap.style.width = 100*3+'vw'
                      for (var k = 3; k >= 1; k--) {
                        var img = document.createElement("DIV");
                        img.classList.add('nimg');
                        img.classList.add('jimg'+ numtoalp(k));
                        img_wrap.appendChild(img)
                      }
                    }else if(i==40){
                        img_wrap.style.width = 100*3+'vw'
                      for (var k = 3; k >= 1; k--) {
                        var img = document.createElement("DIV");
                        img.classList.add('nimg');
                        img.classList.add('kimg'+ numtoalp(k));
                        img_wrap.appendChild(img)
                      }
                    }else if(i==41){
                        img_wrap.style.width = 100*2+'vw'
                      for (var k = 2; k >= 1; k--) {
                        var img = document.createElement("DIV");
                        img.classList.add('nimg');
                        img.classList.add('limg'+ numtoalp(k));
                        img_wrap.appendChild(img)
                      }
                    }else if(i==42){
                        img_wrap.style.width = 100*4+'vw'
                      for (var k = 4; k >= 1; k--) {
                        var img = document.createElement("DIV");
                        img.classList.add('nimg');
                        img.classList.add('mimg'+ numtoalp(k));
                        img_wrap.appendChild(img)
                      }
                    }else if(i==43){
                        img_wrap.style.width = 100*4+'vw'
                      for (var k = 4; k >= 1; k--) {
                        var img = document.createElement("DIV");
                        img.classList.add('nimg');
                        img.classList.add('oimg'+ numtoalp(k));
                        img_wrap.appendChild(img)
                      }
                    }
                    element.appendChild(img_wrap)
                  }

                  var kr_div = document.createElement("div");
                  kr_div.classList.add('kr')
                  var en_div = document.createElement("div");
                  en_div.classList.add('en')



                  var no = document.createElement("DIV");
                  no.classList.add('no')
                  no.innerHTML = '('+data.feed.entry[i*13].content.$t+')';

                  var post_title_1 = document.createElement("DIV");
                  post_title_1.classList.add('post_title')
                  post_title_1.innerHTML = data.feed.entry[i*13 + 3].content.$t;

                  var post_artwork_dis_1 = document.createElement("DIV");
                  post_artwork_dis_1.classList.add('post_artwork_dis')
                  post_artwork_dis_1.innerHTML = data.feed.entry[i*13 + 4].content.$t;

                  var post_artwork_info_1 = document.createElement("DIV");
                  post_artwork_info_1.classList.add('post_artwork_info')
                  post_artwork_info_1.innerHTML = data.feed.entry[i*13 + 5].content.$t;

                  var post_artist_1 = document.createElement("DIV");
                  post_artist_1.classList.add('post_artist')
                  post_artist_1.innerHTML = data.feed.entry[i*13 + 1].content.$t;

                  var post_artist_dis_1 = document.createElement("DIV");
                  post_artist_dis_1.classList.add('post_artist_dis')
                  post_artist_dis_1.innerHTML = data.feed.entry[i*13 + 2].content.$t;



                  var post_artist_2 = document.createElement("DIV");
                  post_artist_2.classList.add('post_artist')
                  post_artist_2.innerHTML = data.feed.entry[i*13 + 7].content.$t;

                  var post_artist_dis_2 = document.createElement("DIV");
                  post_artist_dis_2.classList.add('post_artist_dis')
                  post_artist_dis_2.innerHTML = data.feed.entry[i*13 + 8].content.$t;

                  var post_artwork_info_2 = document.createElement("DIV");
                  post_artwork_info_2.classList.add('post_artwork_info')
                  post_artwork_info_2.innerHTML = data.feed.entry[i*13 + 11].content.$t;

                  var post_title_2 = document.createElement("DIV");
                  post_title_2.classList.add('post_title')
                  post_title_2.innerHTML = data.feed.entry[i*13 + 9].content.$t;

                  var post_artwork_dis_2 = document.createElement("DIV");
                  post_artwork_dis_2.classList.add('post_artwork_dis')
                  post_artwork_dis_2.innerHTML = data.feed.entry[i*13 + 10].content.$t;

                kr_div.appendChild(no)

                kr_div.appendChild(post_title_1)
                kr_div.appendChild(post_artwork_dis_1)
                kr_div.appendChild(post_artwork_info_1)
                kr_div.appendChild(post_artist_1)
                kr_div.appendChild(post_artist_dis_1)

                en_div.appendChild(post_title_2)
                en_div.appendChild(post_artwork_dis_2)
                en_div.appendChild(post_artwork_info_2)
                en_div.appendChild(post_artist_2)
                en_div.appendChild(post_artist_dis_2)

                element.appendChild(kr_div)
                element.appendChild(en_div)

      }
})