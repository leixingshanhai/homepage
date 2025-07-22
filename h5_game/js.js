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
	  var url = type + '/index.html';
	  window.open(url,'h5_game_page');
  }