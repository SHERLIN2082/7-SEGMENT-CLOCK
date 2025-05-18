class SegmentDigit{
    constructor(container) {
      this.container = container;
      this.segments = {};
      const segmentList = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
      segmentList.forEach(s => {
        const el = document.createElement('div');
        el.classList.add('segment', s);
        container.appendChild(el);
        this.segments[s] = el;
      });
}
    setDigit(num){
      const segmentMap = {
        0: 'abcdef',
        1: 'bc',
        2: 'abged',
        3: 'abgcd',
        4: 'fgbc',
        5: 'afgcd',
        6: 'afgcde',
        7: 'abc',
        8: 'abcdefg',
        9: 'abcfgd'
    };
      const active = segmentMap[num] || '';
      for (let s in this.segments){
        this.segments[s].classList.toggle('on', active.includes(s));
      }
    }
}
class Clock{
    constructor(container) {
      this.container = container;
      this.digits = [];
      for (let i = 0; i < 6; i++) {
        const digit = document.createElement('div');
        digit.classList.add('digit');
        const digitObj = new SegmentDigit(digit);
        this.digits.push(digitObj);
        container.appendChild(digit);
  
        if (i === 1 || i === 3){
          const colon = document.createElement('div');
          colon.className = 'colon';
          colon.innerText = ':';
          container.appendChild(colon);
        }
      }
      this.update();
      setInterval(() => this.update(), 1000);
    }
    update(){
      const now = new Date();
      const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, '');
      [...timeStr].forEach((digit, i) => {
        this.digits[i].setDigit(parseInt(digit));
      });
    }
}
function startClock(){
    const name = document.getElementById("nameInput").value.trim();
    if (!name) return alert("Please enter your name!");
    document.getElementById("greeting").innerText = `Hello,${name}! `;
    document.querySelector(".input-container").style.display = 'none';  
  new Clock(document.getElementById("clock"));
}
  
  
  
