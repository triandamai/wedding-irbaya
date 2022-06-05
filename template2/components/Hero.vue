<script setup lang="ts">
const diff = ref<{
	year:number,
	month:number,
	day:number,
	hour:number,
	minute:number,
	second:number
}>({
	year:0,
	month:0,
	day:0,
	hour:0,
	minute:0,
	second:0
})
const timer= ref<NodeJS.Timer>(null)
const futureDate = new Date(2022,7,1)
const getDateDiff=(from,to)=>{
	const diff = new Date(to.getTime() - from.getTime())
	return {
		year: diff.getUTCFullYear() - 1970,
		month: diff.getUTCMonth(),
		day:diff.getUTCDate() -1,
		hour:diff.getUTCHours(),
		minute:diff.getUTCMinutes(),
		second:diff.getUTCSeconds()
	}
}

onBeforeMount(()=>{
	timer.value = setInterval(()=>{
		diff.value = getDateDiff(new Date(),futureDate)
	},1000)
})

onBeforeUnmount(()=>{
	clearInterval(timer.value)
})

</script>
<template>
	<div id="fh5co-header">
		<div class="container">
			<img class="flower-1" style="position: absolute; right: 0; top: 0" src="~/assets/images/background/flowers/top-right-1.svg">
			<img class="flower-1" style="position: absolute; left: -25px; top:0" src="~/assets/images/background/flowers/top-left-1.svg">
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
					<h2>The Wedding Of</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
					<img src="~/assets/images/hero-circle.png" width="300" alt="" class="">
				</div>
			</div>
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
					<h1>Eka Rizqika & Sarwoko</h1>
					<p style="color: #bf9b73">Kami berharap Anda menjadi bagian dari hari istimewa kami!</p>
					<div class="simply-countdown simply-countdown-wedding">
						<div class="container-countdown">
						
							<span>
								<p>{{diff.day}}</p>
								Hari
							</span> 
							<span>
								<p>{{diff.hour}}</p>
								Jam
								</span> 
							<span>
								<p>{{diff.minute}}</p>
								Menit
							</span> 
							<span>
								<p>{{diff.second}}</p>
								Detik
							</span> 
						</div>
					</div>
					<br>
					<p>
						<a href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MmFla2xyOTZ1a3YyaTByMjljOWpqcHAxZm0gdHJpYW5kYW1haUBt&tmsrc=triandamai%40gmail.com" target="_blank" class="btn btn-primary btn-sm">Save the date</a><br>
						<i style="font-size: 15px">*Klik tombol ini untuk menyimpan tanggal pada google kalender</i>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.container-countdown{
	display: flex;
	flex-wrap: nowrap;
	align-content: center;
	margin: auto;
	text-align: center;
	justify-content: center;
}
.container-countdown > span{
	margin: auto;
	width: 100px;
  	margin: 10px;
  	text-align: center;
  	line-height: 75px;
  	font-size: 10px;
}
</style>