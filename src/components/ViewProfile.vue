<template>
    <container class="mt-24 mr-auto ml-auto" v-if="isView" bgcolor="bg-gray-400" maxW="max-w-3xl">
        <div class="mt-12 mb-24 pb-8 pl-12">
            <h1 class="text-5xl float-left">Profile</h1>
            <img :src="viewProfile.url" class="rounded-full w-60 h-60 mr-auto ml-auto mb-12" />

            <router-link to="/AddProfile">
                <base-button v-if="!editMode" labels="Editing " @click="editing()" class="mr-2"></base-button>
            </router-link>
            <router-link to="/ProfileList">
                <base-button
                    v-if="!editMode"
                    bgcolor="bg-red-600"
                    bordercolor="border-red-600"
                    hover="hover:bg-red-700"
                    labels="Remove this Profile"
                    @click="removePro(this.viewProfile.id)"
                ></base-button>
            </router-link>

            <b v-if="editMode" class="mr-2">EDITING MODE</b>
            <h1 class="text-XL">
                <new-profile
                    @submit-form="editForm"
                    :viewProfile="viewProfile"
                    :editMode="editMode"
                    v-if="editMode"
                    ref="NewProfile"
                ></new-profile>
            </h1>

            <div v-if="!editMode">
                <h1 class="text-2xl pt-4">
                    <b>Profile Data</b>
                </h1>
                <div class="grid grid-cols-1 pt-2 text-xl">
                    <h1 class="float-left -ml-24 pt-2">
                        <b>Name:</b>
                        {{ viewProfile.name }}
                    </h1>
                    <h1 class="float-left -ml-24 pt-2">
                        <b>Age</b>
                        : {{ viewProfile.age }}
                    </h1>
                </div>
            </div>
        </div>
    </container>
</template>

<script>
export default {
    props: {

        viewProfile: {

            type: Object

        },
        isView: {
            type: Boolean

        },
        editMode: {
            type: Boolean
        }


    },
    methods: {
        removePro(id) {

            var proId = id;

            alert("this profile has been delete we will redirect to profileListPage")
            this.$emit('remove-pro', proId);

        },

        editing() {


            this.$emit('editing');

        },

        editForm() {

            this.$emit('editForm');

        }




    },






}
</script>