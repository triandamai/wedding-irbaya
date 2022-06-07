<script setup lang="ts">
import Modal from './Modal.vue';
import { firestore } from "@@/composables/firebase"
import { collection, doc, getDocs, setDoc, addDoc } from "firebase/firestore"
const showDialog = ref(false)

const wishList = ref<Array<any>>([])

async function getWish() {
	const wishCollection = collection(firestore, "WEDDING_WISH")
	const wishSnapshot = await getDocs(wishCollection)
	const listWish = wishSnapshot.docs.map((doc) => {
		const data = doc.data()
		return {
			name: data.name,
			present: data.present,
			wish: data.wish
		}
	}
	)
	wishList.value = listWish
}

async function addWish({ name, present, wish }) {
	console.log("tes")
	await addDoc(collection(firestore, "WEDDING_WISH"), {
		name: name,
		present: present,
		wish: wish
	})
	showDialog.value = false
}

onMounted(() => {
	getWish()
})
</script>
<template>
	<div id="fh5co-testimonial"
		style="background: url('~/assets/images/background/repeat-background/so-white.png'); background-repeat:repeat; border-top: 1px solid #f2f2f2">
		<img height="400" class="flower-bukutamu-right" style="right: 0;top: 0;position: absolute;"
			src="~/assets/images/background/flowers/top-right-3.svg">
		<img height="400" class="flower-bukutamu-left" style="position: absolute; left: 0; bottom: 0"
			src="~/assets/images/background/flowers/bottom-left-3.svg">
		<div class="container">
			<div class="row animate-box">
				<div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
					<h2>Buku Tamu & Ucapan</h2>
					<span style="color: #bf9b73">Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.</span>
				</div>
			</div>

			<div class="row animate-box wish-message">
				<div class="col-md-8 col-md-offset-2">
					<div class="list-group">
						<a class="list-group-item" v-for="(item,index) in wishList" :key="index">
							<div class="name"><span class="strong" style="font-size: 24px">{{item.name}}</span>
								<span class="label label-success">{{item.present == "hadir" ? "Hadir" :
									'Tanpa Keterangan'}}</span></div>
							<hr style="margin-top: 0;">
							<div class="comment">{{item.wish}}</div>
						</a>
					</div>
				</div>
			</div>

			<div id="button-send" class="text-center animate-box wish-message">
				<button @click="showDialog = true" href="#" target="_blank" class="btn btn-primary btn-sm">Kirim
					Ucapan</button><br>
				<!-- <i style="font-size: 15px">Note : Hanya bisa diisi jika mempunyai akun github. Jika belum ada silahkan
					daftar terlebih dahulu</i> -->
			</div>
		</div>
		<Modal v-show="showDialog" @close="showDialog = !showDialog" @submit="addWish" />
	</div>
</template>
<style>
.wish-message {
	font-family: 'Yanone Kaffeesatz', Arial, sans-serif;
}
</style>