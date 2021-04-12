<template>
    <div class ="border border-black w-60 h-auto ml-2 mt-6 pb-2 rounded">
  <img :src="IMG"  class="rounded-full w-48 h-48 mr-auto ml-auto">   
  <h1 class =" mt-6"><span >name : </span><span class = "text-l text-black">{{ Name }}</span></h1>
  <h1><span>Age : </span><span class = "text-l text-black">{{ Age }}</span></h1>
  <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
      IMG:{
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      },
      Name:{type : String},
      Age:{type:  String},


    }
    
}
</script>

