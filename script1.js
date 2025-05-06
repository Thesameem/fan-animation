

      
      let stopFan = document.getElementById('stop');
      let one = document.getElementById('one');
      let two = document.getElementById('two');
      let three = document.getElementById('three');

      let fan = document.getElementById('fan');

      one.onclick = function () {
            fan.classList.remove('two');
            fan.classList.remove('three');
            fan.classList.remove('stop');
            fan.classList.add('one');
      }

      two.onclick = function () {
            fan.classList.remove('one');
            fan.classList.remove('three');
            fan.classList.remove('stop');
            fan.classList.add('two');
      }

      three.onclick = function () {
            fan.classList.remove('one');
            fan.classList.remove('two');
            fan.classList.remove('stop');
            fan.classList.add('three');
      }

      stopFan.onclick = function () {
            fan.classList.remove('one');
            fan.classList.remove('two');
            fan.classList.remove('three');
            fan.classList.add('stop');
      }

