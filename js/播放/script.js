(function($){
	 
	// Settings
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'false',
		continous = true,
		autoplay = true,
		playlist = [
{
title: '天空之城',
artist: '宫崎骏',
album: '天空之城',

mp3: 'http://sc1.111ttt.com/2016/1/11/13/204131732108.mp3',
//ogg: 'http://dxsn.gongzuo.in/bowen/HTML5player/music/jianshangdie.ogg'

},


{
title: '夜的钢琴曲(第五章)',
artist: '石进',
album: '夜的钢琴曲(第五章)',

mp3: 'http://sc1.111ttt.com/2016/1/09/29/202291413022.mp3',
//ogg: 'http://dxsn.gongzuo.in/bowen/HTML5player/music/jianshangdie.ogg'

},

{
title: '卡农',
artist: '钢琴版',
album: '卡农',

mp3: 'http://sc1.111ttt.com/2016/1/12/10/205101300290.mp3',
//ogg: 'http://dxsn.gongzuo.in/bowen/HTML5player/music/jianshangdie.ogg'
},
{
title: '让一切随风(粤语)',
artist: '高少华',
album: '让一切随风(粤语)',

mp3: 'http://sc1.111ttt.com/2016/1/12/06/205061420029.mp3',
//ogg: 'http://dxsn.gongzuo.in/bowen/HTML5player/music/wokeyibaonima.ogg'
},
{
title: '月半小夜曲(粤语)',
artist: '李克勤',
album: '月半小夜曲(粤语)',

mp3: 'http://sc1.111ttt.com/2016/1/12/04/205041600000.mp3',
//ogg: 'http://dxsn.gongzuo.in/bowen/HTML5player/music/yiwangeshebude.ogg'
},
{
title: '认真的雪',
artist: 'AmyChanrich',
album: '认真的雪',

mp3: 'http://sc1.111ttt.com/2016/1/12/02/205020328158.mp3',
//ogg: 'http://dxsn.gongzuo.in/bowen/HTML5player/music/yiwangeshebude.ogg'
},
{
title: 'NGCMLFY',
artist: '西城男孩',
album: 'NGCMLFY',

mp3: 'http://sc1.111ttt.com/2016/1/12/01/205011531423.mp3',
//ogg: 'http://dxsn.gongzuo.in/bowen/HTML5player/music/yiwangeshebude.ogg'
},
{
title: '关不上的窗',
artist: '周传雄',
album: '关不上的窗',

mp3: 'http://sc1.111ttt.com/2016/5/11/30/204301247062.mp3',
//ogg: 'http://dxsn.gongzuo.in/bowen/HTML5player/music/yiwangeshebude.ogg'
},
{
title: '冬天的秘密',
artist: '周传雄',
album: '冬天的秘密',

mp3: 'http://sc1.111ttt.com/2016/5/11/30/204301246224.mp3',
//ogg: 'http://dxsn.gongzuo.in/bowen/HTML5player/music/yiwangeshebude.ogg'
},
{
title: '琵琶语',
artist: '轻音乐',
album: '琵琶语',

mp3: 'http://7xnu97.com2.z0.glb.qiniucdn.com/music/琵琶语.mp3',
//ogg: 'http://dxsn.gongzuo.in/bowen/HTML5player/music/yiwangeshebude.ogg'
},
{
title: '灰色头像',
artist: '许嵩',
album: '灰色头像',

mp3: 'http://sc1.111ttt.com/2016/5/11/26/204260758006.mp3',
//ogg: 'http://dxsn.gongzuo.in/bowen/HTML5player/music/yiwangeshebude.ogg'
},
{
title: '一万个舍不得',
artist: '庄心妍',
album: '一万个舍不得',

mp3: 'http://sc1.111ttt.com/2016/5/11/03/204032243151.mp3',
//ogg: 'http://dxsn.gongzuo.in/bowen/HTML5player/music/yiwangeshebude.ogg'
},
{
title: 'Mother',
artist: '久石让',
album: 'Mother',

mp3: 'http://sc1.111ttt.com/2016/1/10/29/203292219528.mp3',
//ogg: 'http://dxsn.gongzuo.in/bowen/HTML5player/music/yiwangeshebude.ogg'
},

{
title: 'いつも何度でも',
artist: '久石让',
album: 'いつも何度でも',

mp3: 'http://sc1.111ttt.com/2016/1/10/07/203071113128.mp3',
//ogg: 'http://dxsn.gongzuo.in/bowen/HTML5player/music/yiwangeshebude.ogg'
},

{
title: '克罗地亚狂想曲',
artist: 'MM-CR',
album: '克罗地亚狂想曲',

mp3: 'http://sc1.111ttt.com/2016/1/10/15/203152210198.mp3',
//ogg: 'http://dxsn.gongzuo.in/bowen/HTML5player/music/yiwangeshebude.ogg'
},

{
title: '后来',
artist: '刘若英',
album: '后来',

mp3: 'http://sc1.111ttt.com/2016/1/10/14/203142218178.mp3',
//ogg: 'http://dxsn.gongzuo.in/bowen/HTML5player/music/yiwangeshebude.ogg'
},

{
title: '断点',
artist: '轻音乐',
album: '断点',

mp3: 'http://sc1.111ttt.com/2016/1/10/14/203141810035.mp3',
//ogg: 'http://dxsn.gongzuo.in/bowen/HTML5player/music/yiwangeshebude.ogg'
},

{
title: '安妮的仙境',
artist: '轻音乐',
album: '安妮的仙境',

mp3: 'http://sc1.111ttt.com/2016/4/10/07/203071041155.mp3',
//ogg: 'http://dxsn.gongzuo.in/bowen/HTML5player/music/yiwangeshebude.ogg'
},

{
title: '林中鸟',
artist: '葛林',
album: '林中鸟',

mp3: 'http://sc1.111ttt.com/2016/1/10/07/203072036376.mp3',
//ogg: 'http://dxsn.gongzuo.in/bowen/HTML5player/music/yiwangeshebude.ogg'
},

{
title: '童话镇',
artist: '陈一发',
album: '童话镇',

mp3: 'http://sc1.111ttt.com/2016/4/10/21/203211541338.mp3',
ogg: 'http://dxsn.gongzuo.in/bowen/HTML5player/music/yiwangeshebude.ogg'
},];

	// 加载播放列表，不需要
//	for (var i=0; i<playlist.length; i++){
//		var item = playlist[i];
//		$('#playlist').append('<li>'+item.artist+' - '+item.title+'</li>');
//	}

	var time = new Date(),
		currentTrack = shuffle === 'true' ? time.getTime() % playlist.length : 0,
		trigger = false,
		audio, timeout, isPlaying, playCounts;
		

	var play = function(){
		audio.play();
		$('.playback').addClass('playing');
		timeout = setInterval(updateProgress, 500);
		isPlaying = true;
	}

	var pause = function(){
		audio.pause();		
		$('.playback').removeClass('playing');
		clearInterval(updateProgress);
		isPlaying = false;
	}
	// Update progress
	var setProgress = function(value){
		var currentSec = parseInt(value%60) < 10 ? '0' + parseInt(value%60) : parseInt(value%60),
			ratio = value / audio.duration * 100;

		$('.timer').html(parseInt(value/60)+':'+currentSec);
		$('.progress .pace').css('width', ratio + '%');
		$('.progress .slider a').css('left', ratio + '%');
	}

	var updateProgress = function(){
		setProgress(audio.currentTime);
	}

	// Progress slider
	$('.progress .slider').slider({step: 0.1, slide: function(event, ui){
		$(this).addClass('enable');
		setProgress(audio.duration * ui.value / 100);
		clearInterval(timeout);
	}, stop: function(event, ui){
		audio.currentTime = audio.duration * ui.value / 100;
		$(this).removeClass('enable');
		timeout = setInterval(updateProgress, 500);
	}});

	// Volume slider
	var setVolume = function(value){
		audio.volume = localStorage.volume = value;
		$('.volume .pace').css('width', value * 100 + '%');
		$('.volume .slider a').css('left', value * 100 + '%');
	}

	var volume = localStorage.volume || 0.5;
	$('.volume .slider').slider({max: 1, min: 0, step: 0.01, value: volume, slide: function(event, ui){
		setVolume(ui.value);
		$(this).addClass('enable');
		$('.mute').removeClass('enable');
	}, stop: function(){
		$(this).removeClass('enable');
	}}).children('.pace').css('width', volume * 100 + '%');

	$('.mute').click(function(){
		if ($(this).hasClass('enable')){
			var position = (-189)+"px "+ (-6)+"px";//下移到新位置
			$('.mute').css({backgroundPosition:position});
			
			setVolume($(this).data('volume'));
			$(this).removeClass('enable');
		} else {
			
			var position = (-152)+"px "+ (-66)+"px";//下移到新位置
			$('.mute').css({backgroundPosition:position});
			
			$(this).data('volume', audio.volume).addClass('enable');
			setVolume(0);
		}
	});

	// Switch track
	var switchTrack = function(i){
		if (i < 0){
			track = currentTrack = playlist.length - 1;
		} else if (i >= playlist.length){
			track = currentTrack = 0;
		} else {
			track = i;
		}

		$('audio').remove();
		loadMusic(track);
		if (isPlaying == true) play();
	}

	// Shuffle
	var shufflePlay = function(){
		var time = new Date(),
			lastTrack = currentTrack;
		currentTrack = time.getTime() % playlist.length;
		if (lastTrack == currentTrack) ++currentTrack;
		switchTrack(currentTrack);
	}

	// Fire when track ended
	var ended = function(){
		pause();
		audio.currentTime = 0;
		playCounts++;
		if (continous == true) isPlaying = true;
		if (repeat == 1){
			play();
		} else {
			if (shuffle === 'true'){
				shufflePlay();
			} else {
				if (repeat == 2){
					switchTrack(++currentTrack);
				} else {
					if (currentTrack < playlist.length) switchTrack(++currentTrack);
				}
			}
		}
	}

	var beforeLoad = function(){
		var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
		$('.progress .loaded').css('width', (100 / (this.duration || 1) * endVal) +'%');
	}

	// Fire when track loaded completely
	var afterLoad = function(){
		if (autoplay == true) play();
	}

	// Load track
	var loadMusic = function(i){
		var item = playlist[i],
	//	newaudio = $('<audio>').html('<source src="'+item.mp3+'"><source src="'+item.ogg+'">').appendTo('#player');	
		newaudio = $('<audio>').html('<source src="'+item.mp3+'">').appendTo('#player');	
		$('.cover').html('<strong>'+item.title+'</strong><span class="artist">');
		$('.tag').html(item.artist);
		$('#playlist li').removeClass('playing').eq(i).addClass('playing');
		audio = newaudio[0];
		audio.volume = $('.mute').hasClass('enable') ? 0 : volume;
		audio.addEventListener('progress', beforeLoad, false);
		audio.addEventListener('durationchange', beforeLoad, false);
		audio.addEventListener('canplay', afterLoad, false);
		audio.addEventListener('ended', ended, false);
	}

	loadMusic(currentTrack);
	
  
	$('.playback').on('click', function(){		
		if ($(this).hasClass('playing')){
			pause();
			var position = (-290)+"px "+ (-88)+"px";//下移到新位置
			$('.playback').css({backgroundPosition:position});
		} else {
			play();
			var position = (-105)+"px "+ (0)+"px";//上移到新位置
			$('.playback').css({backgroundPosition:position});
		}
	});
	
	$('.rewind').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(--currentTrack);
		}
	});
	$('.fastforward').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(++currentTrack);
		}
	});
	$('#playlist li').each(function(i){
		var _i = i;
		$(this).on('click', function(){
			switchTrack(_i);
		});
	});

	if (shuffle === 'true') $('.shuffle').addClass('enable');
	if (repeat == 1){
		$('.repeat').addClass('once');

	} else if (repeat == 2){
		$('.repeat').addClass('all');

	}

	$('.repeat').on('click', function(){		
		
		if ($(this).hasClass('once')){
			var position = (-219)+"px "+ (0)+"px";//下移到新位置
			$('.repeat').css({backgroundPosition:position});
			
//			var position = (-254)+"px "+ (0)+"px";//下移到新位置
//			$('.repeat').css({backgroundPosition:position});
			
			repeat = localStorage.repeat = 2;
			$(this).removeClass('once').addClass('all');
			
		} else if ($(this).hasClass('all')){
			var position = (-219)+"px "+ (0)+"px";//下移到新位置
			$('.repeat').css({backgroundPosition:position});

//			var position = (-254)+"px "+ (0)+"px";//下移到新位置
//			$('.repeat').css({backgroundPosition:position});

			repeat = localStorage.repeat = 0;
			$(this).removeClass('all');
			
		} else {
			var position = (-254)+"px "+ (0)+"px";//下移到新位置
			$('.repeat').css({backgroundPosition:position});	

//			var position = (-219)+"px "+ (0)+"px";//下移到新位置
//			$('.repeat').css({backgroundPosition:position});
			repeat = localStorage.repeat = 1;
			$(this).addClass('once');			
		}
	});

	$('.shuffle').on('click', function(){
		if ($(this).hasClass('enable')){
			shuffle = localStorage.shuffle = 'false';
			$(this).removeClass('enable');
		} else {
			shuffle = localStorage.shuffle = 'true';
			$(this).addClass('enable');
		}
	});
})(jQuery);
