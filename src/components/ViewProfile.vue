<template>
   
        <div class="mt-12 mb-24 pb-8 pl-12 ">
            <h1 class="text-5xl float-left">Profile</h1>
            <img :src="viewProfile.url" class=" rounded-full w-60 h-60 mr-auto ml-auto mb-12" />
           <slot></slot>



           <div v-if="!editMode " >
           <h1 class="text-2xl pt-4"><b>Profile Data</b></h1>
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
           type : Boolean
       }
      

    },

}
</script>