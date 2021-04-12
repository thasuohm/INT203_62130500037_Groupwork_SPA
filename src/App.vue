<template>
  <nav-bar>
    <a href="">
      <li class="liNavL">home</li>
    </a>
    <a href="">
      <li class="liNavL">Profile List</li>
    </a>
    <a href="">
      <li class="liNavR">TEST1</li>
    </a>
    <a href="">
      <li class="liNavR">TEST2</li>
    </a>
  </nav-bar>

  <h1 class="text-6xl">Add New Profile</h1>
  <container class="mt-12 mr-auto ml-auto pb-2">
    <new-profile @submit-form="submitForm" />
  </container>

  <h1 class="text-6xl mt-8">Profile List</h1>
  <div class="scaleGrid">
    <div v-for="profile in profiles" :key="profile.id">
      <profile :IMG="profile.url" :Name="profile.name" :Age="profile.age">
        <div class="flex ml-2 mr-2">
          <base-button class="mr-2" labels="View Profile" @click="viewPro(profile.id)"></base-button>
          <base-button
            bgColor="bg-red-600"
            borderColor="border-red-600"
            hover="hover:bg-red-700"
            labels="Remove Profile"
            @click="removePro(profile.id)"
          ></base-button>
        </div>
      </profile>
    </div>
  </div>

  <container class="mt-24 mr-auto ml-auto" v-if="isView" bgcolor="bg-gray-400" maxW="max-w-3xl">
    <view-profile :viewProfile="viewProfile" :isView="isView" :editMode="editMode">
      <base-button v-if="!editMode" labels="Editing " @click="editing()" class="mr-2"></base-button>
      <base-button v-if="!editMode"
            bgColor="bg-red-600"
            borderColor="border-red-600"
            hover="hover:bg-red-700"
            labels="Remove this Profile"
            @click="removePro(this.viewProfile.id)"
          ></base-button>
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
    </view-profile>
  </container>
</template>

<script>
import Profile from './components/Profile.vue'
import navBar from './components/UI/NavBar.vue'
import ViewProfile from './components/ViewProfile.vue'
export default {
  name: 'App',
  components: {
    Profile, navBar, ViewProfile
  },
  data() {
    return {
      profiles: [],
      viewProfile:
      {
        id: null,
        name: '',
        age: '',
        url: '',
      },
      isView: false,
      editMode: false,
      url:'http://localhost:5000/profiles'
     

    }

  },
  methods: {
    editing() {
      this.editMode = true;
      this.$refs.NewProfile.editingMode();
    },
    async removePro(id) {
      
      await fetch(`${this.url}/${id}`, {
        method: 'DELETE'
      })
      this.profiles = this.profiles.filter(f => f.id !== id)

      if (this.viewProfile.id == id) {

        this.isView = false;

      }


    },


    viewPro(id) {
      if (this.viewProfile.id == id && this.isView == true) {
        this.isView = false;
        this.viewProfile.id = null;
        this.editMode = false;
        return;
      }
      this.isView = true;
      this.editMode = false;
      var index = this.profiles.findIndex(f => f.id == id);
      this.viewProfile.id = id;
      this.viewProfile.name = this.profiles[index].name;
      this.viewProfile.age = this.profiles[index].age;
      this.viewProfile.url = this.profiles[index].url;
      alert("Scroll down to See Profile");

    },
    async editForm(Form) {

var index = this.profiles.findIndex(f => f.id == this.viewProfile.id);
if (this.editMode && this.isView) {
  const res = await fetch(`${this.url}/${this.viewProfile.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      name: Form.name,
      age: Form.age,
      url: Form.url
    })
  })
  const data = await res.json()
  this.profiles[index].name = data.name;
  this.profiles[index].age = data.age;
  this.profiles[index].url = data.url;
  this.editMode = false;
  return;
}

},
    async submitForm(newForm) {
      const res = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          name: newForm.name,
          age: newForm.age,
          url: newForm.url,
        })
      })
      const data = await res.json();

      this.profiles.push(data);
     


    },
    async fetchProfiles() {
      const res = await fetch(this.url);
      const data = await res.json();
      return data;
    },


  },
  async created() {
    this.profiles = await this.fetchProfiles();
  }



}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
