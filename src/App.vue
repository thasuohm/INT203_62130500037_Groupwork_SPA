<template>
  <nav-bar>
    <router-link v-if="editMode == false" to="/" @click="this.isView = false">
      <li class="liNavL">Home</li>
    </router-link>
    <router-link v-if="editMode == false" to="/AddProfile" @click="this.isView = false">
      <li class="liNavL">AddProfile</li>
    </router-link>
    <router-link v-if="editMode == false" to="/ProfileList">
      <li class="liNavL">ProfileList</li>
    </router-link>
    <router-link v-if="editMode == false" to="/AboutUs" @click="this.isView = false">
      <li class="liNavR">About us</li>
    </router-link>
  </nav-bar>

  <router-view
    @submit-form="submitForm"
    :profiles="profiles"
    @view-pro="viewPro"
    @remove-pro="removePro"
    @editing="editing"
    @edit-form="editForm"
    :viewProfile="viewProfile"
    :isView="isView"
    :editMode="editMode"
  ></router-view>

  
</template>

<script>

import navBar from './components/UI/NavBar.vue'

export default {
  name: 'App',
  components: {
    navBar
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
      url: 'http://localhost:5000/profiles'


    }

  },
  methods: {
    editing() {
      this.editMode = true;
      this.$refs.NewProfile.editingMode();
    },
    async removePro(id) {

      const res = await fetch(`${this.url}/${id}`, {
        method: 'DELETE'
      })
      res.status === 200
        ? (this.profiles = this.profiles.filter(f => f.id !== id)
        )
        : alert('Error to delete')

      if (this.viewProfile.id == id) {
        this.isView = false;
      }


    },
    viewPro(id) {
      this.isView = true;
      this.editMode = false;
      var index = this.profiles.findIndex(f => f.id == id);
      this.viewProfile.id = id;
      this.viewProfile.name = this.profiles[index].name;
      this.viewProfile.age = this.profiles[index].age;
      this.viewProfile.url = this.profiles[index].url;


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
        alert("Edit success")
        window.location.href = '/ProfileList';
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
      alert("Add new Profile Success");


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
