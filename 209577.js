(function() {
      if ("undefined" == typeof window.clever_magic_var) {
      
        
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.defer = true;
      s.charset = 'utf-8';
      var defaultSource = 'https://widget.cleversite.ru/static/clever-widget.umd.min.js?tag=25.16.1';
      var changedSource = localStorage.getItem("CLEVERSITE.WIDGET.SOURCE");
      s.src = changedSource || defaultSource;

      var ss = document.getElementsByTagName('script')[0];
      if (ss) {
          ss.parentNode.insertBefore(s, ss);
      } else {
          document.documentElement.firstChild.appendChild(s);
      };

      if (changedSource) {
        alert('Переопределён источник скрипта для виджета !!!')
      }
    
      
        document.addEventListener('clever-loaded', () => {
          if (window.cleversiteEvent) {
            window.cleversiteEvent.trigger('init', 134610, 209577)
          }
        })
        window.clever_magic_var = 1;
      } 
    })();
  
