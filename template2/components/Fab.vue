<script setup lang="ts">


defineEmits([
	'go'
])
const audio = ref<HTMLAudioElement>()
const btn = ref<string>()

function playSound(){
	if(!audio.value.paused){
		btn.value = "https://i.imgur.com/IDzX9gL.png"
		audio.value.pause()
	}else{
		btn.value = "https://i.imgur.com/quyUPXN.png"
		audio.value.play()
	}
	
}

onMounted(()=>{
	playSound()
})
</script>
<template>
	<div id="floating-button" class="float">
		<div class="control-center open">
			<button  class="audio-play" @click="playSound">
				<img :src="btn"/>
				<audio loop="true" ref="audio" src="/audio/music.mp3"  />
			</button>
			
			<ul class="right-sidebar">
				<!--gallery-->
				<li @click="$emit('go','fh5co-gallery')" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADe0lEQVRoge2YTWgVVxiG35Mr1n+qopYkik1dFKRiJGgWLmqrLsSFPy3Y1G6soFkJdulWcFHBgAFRQcGFLgRr1W6kLvz/SdpNQQqtfyXG+oMuaheamMfFzMXPw0zuzOTcG5H7bu7MOe/3fe878805M1eqo4463m8ADUAHcBroBwYJg8E43ylgA9BQDfEtwO+BBFfCb8DHeTW64cRLuiZpxkguQk48ktTunLuTNSDRQHw7eyW1BhKWB72SljjnhrKQ0/pug0ZHvCS1Sfo6KznNQEcYLYWRuX6agUWBhBRFW/kAmDscMc3AzKBy8mOWOb4YLyiJSDNQCqtH9yQtlzRJ0gpJ/1Tg2/rNko7k2ieqsMZ/6eVfUSkgQcv6JK3hd79kXPfOrxXI8V3SYK0MtFc4z4KFmZlVaKG7cdtMAlYC9wq00ECS1rSdmKTxWsI553wt5TGLIi10QNISRUttu6SDBTVWDyl39RXQmcLvBIZG0GJZWih7VyTkGwQ2VYj5Fhh4Fw0MAB3e/EagD9iYwcQzYAswG5gOrANu1crAC7wNBNhM1E7Ev997818BL+P52yR8pACTgfPVNvACWOONbzXiyxgCtnm8VcDNJPGGMwE4Wy0D/wMrvbEfSH9Qh4DtHr/BHI8HThB9Njaa8XHAL9Uw8Ll3viPtSnnYkZBrInDOcP4C5pj5sbG5cAY8ATszigfoAcab2CnAxQTeXeATwxsDHAtuIKf4G8A0E/shcHUY/gNgvuGXgENBDAAO6Moh/gIw2cRPjQ1VwkNggVd3bwgDB3KIPwtMMLGzgD9yxD8GWk28A/aM1MCDjMVPA+NMXBPwZw7xZTwFFifoKBnOYB4DZzIUPQV8YGLmEK0wRfEcWObpaDLzfXkMfFOh2FFgjOHPI8M7fkYTX5i89tPT/6ob1kAJ6E0pchgoGe6nwP0A4sv41eTuNuM/ZjYQBzcDd7zk+3h7h/0M+Deg+H6gOc79EfCfmVuay0CcpIU3L11dgDNzi4AnAcVfAZri3A44buZ6bO28JpzvHmgnek0eCQaAv4GfgNXEdzaut8vjLktW946BqG2Oe+J3j7auVBAtFo1Eq0030SpkcRKzYIQoOJvoRawW2I9ZqkOaaAEuVVF4Dzl6vtCTTfTArVX0d1+rpEZJRa7WK0kPJd2XdF7Sz5IuO+dG/X+pOuqoo0Z4DePtUHAz1eX1AAAAAElFTkSuQmCC)"></li>
				<!--chat-->
				<li @click="$emit('go','fh5co-testimonial')" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABKklEQVRIidWVq04DQRhGv900QUFFCVWgUYQ6PAgeAUVwSDwplocoCamsqKlE4ICQECDlAfAYoAoDHEQ7SdnO7lw6CE6yYi45384/kxnpv5NVDQJ1SXuSdiVtSGpOhl4kDSVdSOplWTYKSgVqwAnwjps3oA3UfOVN4NpDXOQKWHHJ68BDhNxwDyxVBZzPITeclclbwHeCgC9g03jzqYwDOU6VJ7mkfVvAdgK5YccWsGqZ2JC0HNA2rNkCsEwslszVNizM9ABPCTbYMLSt4LLkb2K4sQV0ZS9TDD1rL9BJUJ670ljGV8XjHPJPYKtybUADuI0MOPUqIOPr+hgYBcgHQO62/w5aBA6BPvAMvE6+In1g9uzHUpB38X1sAgM+gKOk4qmANrD+J/JQfgANB//YYXlyuAAAAABJRU5ErkJggg==)"></li>
			</ul>
			<!--calendar-->
			<div @click="$emit('go','fh5co-event')" class="option-btn open"></div>
			<ul class="left-sidebar">
				<!--countdown-->
				<li @click="$emit('go','fh5co-header')" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABG0lEQVRIidXVTS4EQRjG8SZ2IrEnETEcQmYsjLkCiUu4g1P42FpxhmGG2IvEcAcfG9Z+FtOS1qaramZ6wZPUpqve5//2k36rs+wvCLd+6yaldjaR8TmKm95iDcIhzrA4bmEHp3jCR74ecYKdwrm7PLoBllOMN9AfkX1ZPaxjBff5s4OY+RbeEsy/9YoWFrCP+VjnVeabaAYgjZRoLqvaLJypUi9m3gnlkACAdtGzPAd70VeMazcEaNYA2AoBlmoA/JiBudJmcPzRzLJsJgKo9jCc1mk1KHqWI7qOdJeifghwXgPgIriL7hTxXEXxWMXzBOZpV0UOaeUFqXox/MLShYbAvVRQF2tjmZdAbRwb/kje8/WAI2xPbPxv9AUiVMwGoTr9YAAAAABJRU5ErkJggg==)"></li>
				<!--couple-->
				<li @click="$emit('go','fh5co-couple')" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB7UlEQVRIie2VPUiVURjH/+eqSSJN4tDWRRAH5xD8QDCwgqAWhwwSaarBwUGaHFwcBAchGqNNdDaKoKAkBEvUURAVRInw82Jx0Z/De64+Xu5773nv0CD3P533eZ//+T3nW6qoomstwAEPgXfAKnAA7AE/gWGgJsbXAIwCi8ARkAF+AS+AqlLQJmCB4voMDAL1xvfUFxin98WgLX5kIdoHbnvfK+AswJMBvgGPLbQGWAmEAgx7XzuQTeDLaSgHfpLA9Bu45X0/yoAC/AXSKUn9AfvuTNIXSb3OuUOgQ9LdAJ8kfZDUJenYf9dKGqiW1JyXuCbpq6RlSRuStiStO+f2TM6DQOiSpOfOuV1gStKIj3eKyx2ZJdqxrlRvwHzMNP4DlomOYx/m+AEdJm9H5mM8cBQCNvKA00AbcKOIp9GuswW3JgBnjO9toKfWVmrBdQnAVkkKvlBKUsbHY6ephNbKMaUkffftj0C6jD5uhiRhrtlcoAXY9jPwJrATq+5AT+eVNfbBZqLjdAq0JwTPBOQ7YM54Nu3PMR/8A9wrYH4UAwZ4VgSaBmYtFOi1CSlgxiTMA5PAhG9jcrfywFngJQGXT1x1VcBrosc8X/sm734BOERPX9AdXrBCoh3YI+mOogdiXdIn59xJWSOqqKL/qXMXI9MKbss7gAAAAABJRU5ErkJggg==)"></li>
			</ul>
		</div>
	</div>
    </template>