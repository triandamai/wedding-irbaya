<script setup lang="ts">
definePageMeta({
    
})
</script>
<template>
<div>
    <div id="overlay">
		<div class="content">
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box fadeInUp animated-fast">
						<img src="assets/images/hero-circle.png" width="400" alt="" class="couple-main">
					</div>
				</div>
				<div class="row">
					<div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
						<h1>Rizka & Woko</h1>
						<p class="overlay-message" style="margin-bottom: 0">Kepada Bapak/Ibu/Saudara/i</p>
						<p class="overlay-message">Kami Mengundang Anda Untuk Hadir Di Acara Pernikahan Kami.</p>

						<nuxt-link to="/main" class="btn btn-primary" id="open-invitation">Buka Undangan</nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<style>
.overlay-message{
  font-family:'Yanone Kaffeesatz', Arial, sans-serif;
}
</style>