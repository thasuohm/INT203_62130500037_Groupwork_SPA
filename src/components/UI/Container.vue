<template>
    <div class= "border" :class="[shape,borderColor,maxW,bgColor]">
       <slot></slot> 
       
    </div>
</template>



<script>
export default {
    props:{
    borderColor:{ 
        type: String,
        default: 'border-gray-600',
    },
    maxW:{
        type: String,
        default: 'max-w-2xl',

    },
    bgColor:{
        type: String,
        default: 'bg-white'
    },
   shape:{
       type: String,
       default : 'rounded'
   }








   }





}


</script>