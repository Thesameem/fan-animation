let fan = document.getElementById('fan');
      
      document.addEventListener('click', function (event) {
            let target = event.target;

            let targetClass = target.getAttribute('data-name');
            if (targetClass !== null) {
                  fan.classList.remove('stop', 'one', 'two', 'three');
                  fan.classList.add(targetClass);
            }
            
      });