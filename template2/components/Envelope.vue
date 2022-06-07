<script setup lang="ts">


const copyRekening=(norek)=>{
      const element = document.createElement("input")
      element.value = norek
      document.body.appendChild(element);
      element.select();
      document.execCommand('copy');
      document.body.removeChild(element);
    }


</script>
<template>
	<div id="fh5co-gallery"
		style="background: url('~/assets/images/background/repeat-background/so-white.png'); background-repeat:repeat ">
		<img class="flower-3-top" src="~/assets/images/background/flowers/top-2.svg">
		<img class="flower-4-bottom" src="~/assets/images/background/flowers/bottom-2.svg">

		<div class="container">
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
					<h2>Amplop digital</h2>
					<p class="envelope-message">
						Doa Restu Anda ,merupakan karunia yang sangat berarti bagi kami.
						<br>Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.

					</p>
				</div>
			</div>
			<div class="row row-bottom-padded-md animate-box">
				<div class="col-md-12">
					<div id="inline-gallery-container" class="inline-gallery-container"
						style="position: relative; height: 500px">
						<div class="row">
							<div class="col-md-10 col-md-offset-1">
								<div class="col-md-6 col-sm-6 text-center">
									<div class="event-wrap animate-box">
										<h3 style="font-family: 'Oswald', Arial, serif;">BCA</h3>

										<div class="event-col">
											<i class="icon-calendar"></i>
											<span>No. Rekening:</span>
											<span class="tanggal">0462045008</span>
										</div>
										<p style="font-family: 'Courgette', Arial, serif">A/N Eka Rizqika</p>

										<button @click="copyRekening('0462045008')"   class="btn btn-primary">Copy text <i
												class="icon-map2"></i></button >
									</div>
								</div>
								<div class="col-md-6 col-sm-6 text-center">
									<div class="event-wrap animate-box">
										<h3 style="font-family: 'Oswald', Arial, serif;">Bank Jateng</h3>

										<div class="event-col">
											<i class="icon-calendar"></i>
											<span>No. Rekening:</span>
											<span class="tanggal">3003228036</span>
										</div>
										<p style="font-family: 'Courgette', Arial, serif">A/N Eka Rizqika</p>

										<button  @click="copyRekening('3003228036')" class="btn btn-primary">Copy Text<i
												class="icon-map2"></i></button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.envelope-message {
	font-family: 'Yanone Kaffeesatz', Arial, sans-serif;
}
</style>
