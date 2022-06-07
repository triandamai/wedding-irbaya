<script setup lang="ts">
const emit = defineEmits(['close','submit'])

const nama = ref("")
const wish = ref("")
const present = ref("tidak_hadir")

function submit(){
    if(nama.value == ""){
        alert("Mohon inputkan nama Anda")
        return
    }
    emit("submit",{
        name:nama.value,
        wish:wish.value,
        present:present.value
    })
    nama.value = ""
    wish.value = ""
    present.value = "hadir"
}
</script>

<template>
    <div class="modal-backdrop">
        <div class="modal">
            <header class="modal-header">
                <slot name="header">
                    Kirim ucapan
                </slot>
                <button type="button" class="btn-close" @click="$emit('close', '')">
                    x
                </button>
            </header>

            <section class="modal-body">
                <input v-model="nama" class="type-1" placeholder="Nama kamu" />
                <label>Hadir
                    <input v-model="present" type="radio" value="hadir" name="fruit" checked />
                    <span></span>
                </label>
                <label>Tidak hadir
                    <input v-model="present" type="radio" value="tidak_hadir" name="fruit" />
                    <span></span>
                </label>
                <textarea v-model="wish" placeholder="Ucapan disini..">

        </textarea>
            </section>

            <footer class="modal-footer">
                <button type="button" class="btn-gree btn" @click="submit">
                    Simpan
                </button>
            </footer>
        </div>
    </div>
</template>
<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;

}

.modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: inline-block;
    margin: auto;
    /* display: flex;
    flex-direction: column; */
    /* max-width: 50%; */
    /* margin: auto;
    min-height: 100vh; */
}

.modal-header,
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
}

.modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
}

.modal-body {
    position: relative;
    padding: 20px 10px;
}

.btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
}


textarea {
    width: 100%;
    resize: vertical;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #eee;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
}

input {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
}

.type-1 {
    border-radius: 10px;
    border: 1px solid #eee;
    transition: .3s border-color;
}

/* container */
label {
    display: block;
    margin-bottom: 4px;
    position: relative;
    /* to contain absolute elements */
    padding-left: 30px;
    /* free space for custom radio button */
    cursor: pointer;
}

/* hide default radio button  */
label input[type=radio] {
    position: absolute;
    /* prevent taking any space */
    /* cross-browser hidingg */
    opactiy: 0;
    width: 0;
    height: 0;
}

/* custom radio button */
label span {
    position: absolute;
    /* position to the free space in <label> */
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background-color: #ddd;
    border-radius: 50%;
    transition: .3s background-color;
    /* slight transition */
}

/* the check icon */
label span:after {
    content: "";
    position: absolute;
    display: none;

    /* middle */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 8px;
    height: 8px;
    border-radius: 50%;
}

label:hover span {
    background-color: #ccc;
}

/**** Here's the trick ***/
label input:checked~span {
    background-color: #2eaadc;
}

label input:checked~span:after {
    display: block;
}
</style>