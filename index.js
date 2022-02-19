function Clock(wrap){
    this.wrap = wrap;
    var date = new Date();
    this.currentYear = date.getFullYear();
    this.currentMonth = date.getMonth()+1;//返回值0-11
    this.currentDay = date.getDate();//当月的第几天
    this.currentWeek = date.getDay();//星期几返回0-6，0是星期日
    this.currentHour = date.getHours();
    this.currentMinute = date.getMinutes();
    this.currentSecond = date.getSeconds();
    this.weeksName = ['日','一','二','三','四','五','六'];
    this.yearWrapper = null;
    this.monthWrapper = null;
    this.dayWrapper = null;
    this.weekWrapper = null;
    this.hourWrapper = null;
    this.minuteWrapper = null;
    this.secondWrapper = null;

    this.monthsSpan = [];
    this.daysSpan = [];
    this.weeksSpan = [];
    this.hoursSpan = [];
    this.minutesSpan = [];
    this.secondsSpan = [];
}
Clock.prototype.getMonthDay = function(){
    var result = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(this.currentYear % 4 ==0 ){
        result[1]=29;
    }
    return result[this.currentMonth-1];
}
Clock.prototype.init = function(){
    this.createDom()
    this.rotate()
}
Clock.prototype.createDom=function(){
    var fragment = document.createDocumentFragment();


    var yearWrapper = document.createElement('div');
    yearWrapper.className = 'year';
    yearWrapper.innerText = this.currentYear+'年';
    this.yearWrapper=yearWrapper;

    var monthWrapper =document.createElement('div');
    monthWrapper.className = 'month';
    this.monthWrapper=monthWrapper;
    for (var i=1;i<=12;i++){
        var oSpan = document.createElement('span');
        oSpan.innerText = i+'月';
        monthWrapper.appendChild(oSpan);
        this.monthsSpan.push(oSpan);
    }

    var dayWrapper = document.createElement('div');
    dayWrapper.className = 'day';
    this.dayWrapper=dayWrapper;
    for (var i =1;i<=this.getMonthDay();i++){
        var oSpan = document.createElement('span');
        oSpan.innerText = i+'日';
        dayWrapper.appendChild(oSpan);
        this.daysSpan.push(oSpan);
    }

    var weekWrapper = document.createElement('div');
    weekWrapper.className = 'week';
    this.weekWrapper = weekWrapper;
    for (var i=0;i<=6;i++){
        var oSpan = document.createElement('span');
        oSpan.innerText = '星期'+this.weeksName[i];
        weekWrapper.appendChild(oSpan);
        this.weeksSpan.push(oSpan);
    }
    
    var hourWrapper = document.createElement('div');
    hourWrapper.className = 'hour';
    this.hourWrapper = hourWrapper;
    for (var i=0;i<24;i++){
        var oSpan = document.createElement('span');
        oSpan.innerText = i+'时';
        hourWrapper.appendChild(oSpan);
        this.hoursSpan.push(oSpan);
    }

    var minuteWrapper = document.createElement('div');
    minuteWrapper.className = 'minute';
    this.minuteWrapper = minuteWrapper;
    for (var i=0;i<60;i++){
        var oSpan = document.createElement('span');
        oSpan.innerText = i+'分';
        minuteWrapper.appendChild(oSpan);
        this.minutesSpan.push(oSpan);
    }

    var secondWrapper = document.createElement('div');
    secondWrapper.className = 'second';
    this.secondWrapper = secondWrapper;
    for (var i=0;i<60;i++){
        var oSpan = document.createElement('span');
        oSpan.innerText = i+'秒';
        secondWrapper.appendChild(oSpan);
        this.secondsSpan.push(oSpan);
    }

    fragment.appendChild(yearWrapper);
    fragment.appendChild(monthWrapper);
    fragment.appendChild(dayWrapper);
    fragment.appendChild(weekWrapper);
    fragment.appendChild(hourWrapper);
    fragment.appendChild(minuteWrapper);
    fragment.appendChild(secondWrapper);
    this.wrap.appendChild(fragment)
}
Clock.prototype.rotate=function(){
    var monthDeg = 30;
    var dayDeg = 360/this.getMonthDay();
    var weekDeg = 360/7;
    var hourDeg = 15;
    var minuteDeg = 6;
    var secondDeg = 6;
    setTimeout(()=>{
        for(var i=0;i<this.monthsSpan.length;i++){
        this.monthsSpan[i].style.transform='rotate(-'+i*monthDeg+'deg'
        }
    },0)
    setTimeout(()=>{
        for(var i=0;i<this.daysSpan.length;i++){
        this.daysSpan[i].style.transform='rotate(-'+i*dayDeg+'deg'
        }
    },0)
    setTimeout(()=>{
        for(var i=0;i<this.weeksSpan.length;i++){
        this.weeksSpan[i].style.transform='rotate(-'+i*weekDeg+'deg'
        }
    },0)
    setTimeout(()=>{
        for(var i=0;i<this.hoursSpan.length;i++){
        this.hoursSpan[i].style.transform='rotate(-'+i*hourDeg+'deg'
        }
    },0)
    setTimeout(()=>{
        for(var i=0;i<this.minutesSpan.length;i++){
        this.minutesSpan[i].style.transform='rotate(-'+i*minuteDeg+'deg'
        }
    },0)
    setTimeout(()=>{
        for(var i=0;i<this.secondsSpan.length;i++){
        this.secondsSpan[i].style.transform='rotate(-'+i*secondDeg+'deg'
        }
    },0)
    setTimeout(()=>{
        var date = new Date();
        this.currentYear = date.getFullYear();
        this.currentMonth = date.getMonth()+1;//返回值0-11
        this.currentDay = date.getDate();//当月的第几天
        this.currentWeek = date.getDay();//星期几返回0-6，0是星期日
        this.currentHour = date.getHours();
        this.currentMinute = date.getMinutes();
        this.currentSecond = date.getSeconds();
        this.monthWrapper.style.transform = 'rotate('+(this.currentMonth - 1)* monthDeg+'deg)';
        this.dayWrapper.style.transform = 'rotate('+(this.currentDay - 1)* dayDeg+'deg)';
        this.weekWrapper.style.transform = 'rotate('+(this.currentWeek )* weekDeg+'deg)';
        this.hourWrapper.style.transform = 'rotate('+(this.currentHour )* hourDeg+'deg)';
        this.minuteWrapper.style.transform = 'rotate('+(this.currentMinute )* minuteDeg+'deg)';
        this.secondWrapper.style.transform = 'rotate('+(this.currentSecond )* secondDeg+'deg)';
        setInterval(()=>{
            var date = new Date();
            this.currentYear = date.getFullYear();
            this.currentMonth = date.getMonth()+1;//返回值0-11
            this.currentDay = date.getDate();//当月的第几天
            this.currentWeek = date.getDay();//星期几返回0-6，0是星期日
            this.currentHour = date.getHours();
            this.currentMinute = date.getMinutes();
            this.currentSecond = date.getSeconds();
            this.monthWrapper.style.transform = 'rotate('+(this.currentMonth - 1)* monthDeg+'deg)';
            this.dayWrapper.style.transform = 'rotate('+(this.currentDay - 1)* dayDeg+'deg)';
            this.weekWrapper.style.transform = 'rotate('+(this.currentWeek )* weekDeg+'deg)';
            this.hourWrapper.style.transform = 'rotate('+(this.currentHour )* hourDeg+'deg)';
            this.minuteWrapper.style.transform = 'rotate('+(this.currentMinute )* minuteDeg+'deg)';
            this.secondWrapper.style.transform = 'rotate('+(this.currentSecond )* secondDeg+'deg)';
        },1000)
    },1000)
}

var c = new Clock(document.getElementsByClassName('wrapper')[0]);
c.init()