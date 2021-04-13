<template>
    <div class= "border" :class="[shape,bordercolor,maxW,bgcolor]">
       <slot></slot> 
       
    </div>
</template>



<script>
export default {
    props:{
    bordercolor:{ 
        type: String,
        default: 'border-gray-600',
    },
    maxW:{
        type: String,
        default: 'max-w-2xl',

    },
    bgcolor:{
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