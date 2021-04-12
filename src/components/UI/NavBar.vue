<template>
    <ul class="ulNavBar" :class="[bgColor,position]">
        <slot></slot>
    </ul>
</template>


<script>
export default {
    props:{
        bgColor:{
            type: String , 
            default : 'bg-black'


        },

        position:{
            type :String,
            default : 'top-0'

        }


    }




}
</script>