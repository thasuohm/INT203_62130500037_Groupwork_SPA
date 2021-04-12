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

      profiles: [
        {
          id: '1',
          name: 'test1',
          age: '12',
          url: 'https://s1.zerochan.net/Arknights.600.3198092.jpg'
        }
        ,
        {
          id: '2',
          name: 'test2',
          age: '13',
          url: 'https://f.ptcdn.info/767/068/000/q82fnqg08PW4HYN7XK9-o.png'
        },
        {
          id: '3',
          name: 'test3',
          age: '14',
          url: 'https://s1.zerochan.net/Arknights.600.3198092.jpg'
        },
        {
          id: '4',
          name: 'test4',
          age: '15',
          url: 'https://f.ptcdn.info/767/068/000/q82fnqg08PW4HYN7XK9-o.png'
        },
      ],
      viewProfile:
      {
        id: null,
        name: '',
        age: '',
        url: '',
      },
      isView: false,
      editMode: false,
     

    }

  },
  methods: {
    editing() {
      this.editMode = true;
      this.$refs.NewProfile.editingMode();
    },
    removePro(id) {
      
      this.profiles = this.profiles.filter(f => f.id !== id);

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
    editForm(Form) {
      var index = this.profiles.findIndex(f => f.id == this.viewProfile.id);
      if (this.editMode && this.isView) {
        this.profiles[index].name = Form.name;
        this.profiles[index].age = Form.age;
        this.profiles[index].url = Form.url;
        
        this.editMode = false;
        return;
      }
    },
    submitForm(newForm) {
      this.profiles.id = new Date().toISOString()
      this.profiles.push(newForm)
    },


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
