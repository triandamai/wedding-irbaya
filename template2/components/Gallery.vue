<script setup lang="ts">

const slides = [
	  "1.jpeg",
      "2.jpeg",
      "3.jpeg",
      "4.jpeg",
	  "5.jpeg",
      "6.jpeg",
      "7.jpeg",
      "9.jpeg",
	  "10.jpeg"
]

</script>
<template>
	<div id="fh5co-gallery" style="background: url('~/assets/images/background/repeat-background/so-white.png'); background-repeat:repeat ">
		<img class="flower-3-top" src="~/assets/images/background/flowers/top-2.svg">
		<img class="flower-4-bottom" src="~/assets/images/background/flowers/bottom-2.svg">

		<div class="container">
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
					<h2>Galeri Foto</h2>
					<!-- <h3 style="color: #bf9b73">Khitbah Day - 07 November 2021</h3> -->
				</div>
			</div>
			<div class="row row-bottom-padded-md animate-box">
				<div class="col-md-12">
					<div id="inline-gallery-container" class="inline-gallery-container" style="position: relative; height: 500px">
					  <carousel :slides="slides" :interval="3000" controls indicators></carousel>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>