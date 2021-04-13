<template>
    <div>
        <h1 class="text-6xl" v-if="editMode == false">Add New Profile</h1>
        <h1 class="text-6xl" v-if="editMode">Edit Profile</h1>
        <container class="mx-auto my-2 py-3">
            <form @submit.prevent="submitForm(formdata)">
                <div class="pt-4 text-black">
                    <img
                        v-if="editMode"
                        :src="formdata.url"
                        class="rounded-full w-48 h-48 mx-auto mb-8"
                    />
                    <label for="Name">Name:</label>
                    <input
                        type="text"
                        class="border border-black"
                        id="Name"
                        v-model="formdata.name"
                    />
                </div>

                <div class="pt-4 text-black">
                    <label for="Age">Age:</label>
                    <input type="text" class="border border-black" id="Age" v-model="formdata.age" />
                </div>
                <div class="pt-4 text-black">
                    <label for="Url">Profile Image Url:</label>
                    <input type="text" class="border border-black" id="Url" v-model="formdata.url" />
                </div>

                <div v-if="editMode == false">
                    <base-button
                        bgcolor="bg-green-500"
                        bordercolor="border-green-500"
                        hover="hover:bg-green-600"
                        class="mt-8"
                        labels="Submit"
                    ></base-button>
                </div>

                <div v-if="editMode">
                    <base-button
                        bgcolor="bg-red-500"
                        bordercolor="border-red-500"
                        hover="hover:bg-red-600"
                        class="mt-8"
                        labels="Submit"
                    ></base-button>
                </div>
            </form>
        </container>
    </div>
</template>

<script>
export default {
    props: {
        viewProfile: {
            type: Object
        },
        editMode: {
            type: Boolean
        }
    },



    data() {
        return {
            formdata: {
                id: null,
                name: null,
                age: null,
                url: null,

            },
            invalidate: [],
        }
    },
    mounted() {
        if (this.editMode) {
            this.editingMode();
        }
    },


    methods: {
        submitForm() {
            const Form = {
                name: this.formdata.name,
                age: this.formdata.age,
                url: this.formdata.url,
            }
            this.validate(Form);
            if (this.invalidate.length > 0) {
                alert(this.invalidate);
                this.invalidate = [];
                return;
            }

            if (Form.url === null || Form.url.length < 25 || Form.url == "") {
                Form.url = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }

            this.formdata.name = ''
            this.formdata.age = null
            this.formdata.url = null

            if (this.editMode === true) {
                this.$emit('edit-form', Form)

                return;
            }



            this.$emit('submit-form', Form)



        },
        editingMode() {
            console.log("EDITMODE WORKING");
            this.formdata = this.viewProfile;
        },
        validate(newForm) {
            if (newForm.name == null || newForm.name.length < 2) {
                this.invalidate.push("Name container 2 or more char")
            }
            if (newForm.name.length > 25) {

                this.invalidate.push("Name cant longer than 25 characters")
            }
            if (!/^[0-9]+$/.test(newForm.age)) {
                this.invalidate.push("Age contain only number");
            }
            if (newForm.age > 120) {
                this.invalidate.push("Age Cant more than 120")
            }





        },






    },
}
</script>