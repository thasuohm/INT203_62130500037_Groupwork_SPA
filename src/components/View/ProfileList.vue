<template>
  <div>
    <h1 class="text-6xl mt-8">Profile List</h1>
    <div class="scaleGrid">
      <div v-for="profile in profiles" :key="profile.id">
        <profile :IMG="profile.url" :Name="profile.name" :Age="profile.age">
          <div class="flex ml-2 mr-2">
            <router-link to="/ViewProfile">
              <base-button class="mr-2" labels="View Profile" @click="viewPro(profile.id)"></base-button>
            </router-link>
            <base-button
              bgcolor="bg-red-600"
              bordercolor="border-red-600"
              hover="hover:bg-red-700"
              labels="Remove Profile"
              @click="removePro(profile.id)"
            />
          </div>
        </profile>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  props: ['profiles'],

  methods: {
    viewPro(id) {
      var proId = id;
      this.$emit("view-pro", proId);

    }
    ,
    removePro(id) {

      var proId = id;
      this.$emit("remove-pro", proId);

    }




  },


}





</script>