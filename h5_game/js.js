  // 页面加载后添加visible类触发动画
  document.addEventListener('DOMContentLoaded', function() {
      const cards = document.querySelectorAll('.card');
      // 使用setTimeout确保CSS transition-delay生效
      setTimeout(() => {
          cards.forEach(card => {
              card.classList.add('visible');
          });
      }, 100);
      // 如果是滚动触发的版本（取消上面的代码，使用下面的）
      /*
      function checkCards() {
          const triggerBottom = window.innerHeight / 5 * 4;
          cards.forEach(card => {
              const cardTop = card.getBoundingClientRect().top;
              
              if(cardTop < triggerBottom) {
                  card.classList.add('visible');
              } else {
                  card.classList.remove('visible');
              }
          });
      }
      window.addEventListener('scroll', checkCards);
      checkCards(); // 初始检查
      */
  });
  
  function cardClick(type){
	  if(type == 'tank_battle'){
		  if(isMobileDevice()){
			alert("请使用电脑端进行游玩~");
		  }else{
			var url = type + '/index.html';
		    window.open(url,'h5_game_page');
		  }
	  }else if(type == 'flying_shooting_game'){
		  if(isMobileDevice()){
			var url = type + '/index.html';
		    window.open(url,'h5_game_page');
		  }else{
			alert("请使用移动端进行游玩~");
		  }
	  }else{
	    var url = type + '/index.html';
	    window.open(url,'h5_game_page');
	  }
  }
  
  function isMobileDevice() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
 
    // 这些表达式用来检查设备是否为移动设备
    var isAndroid = /android/i.test(userAgent);
    var isiOS = /iphone|ipad|ipod/i.test(userAgent);
    var isOpera = /opera mini/i.test(userAgent);
    var isWindowsPhone = /windows phone/i.test(userAgent);
    var isBlackBerry = /blackberry/i.test(userAgent);
    var isMobile = /mobile/i.test(userAgent); // 基本移动设备
 
    // 如果满足任何移动设备的条件，则为移动设备
    if ((isAndroid || isiOS || isOpera || isWindowsPhone || isBlackBerry || isMobile)) {
        return true;
    } else {
        return false;
    }
  }