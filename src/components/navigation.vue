<template>
  <navigation class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Home</router-link>

      <div>
        <ul class="navbar-navigation me-auto mb-2 mb-md-0" v-if="!auth">
          <li class="navigation-item">
            <router-link to="/login" class="navigation-link">Login</router-link>
          </li>
          <li class="navigation-item">
            <router-link to="/register" class="navigation-link">Register</router-link>
          </li>
        </ul>

        <ul class="navbar-navigation me-auto mb-2 mb-md-0" v-if="auth">
          <li class="navigation-item">
            <a href="#" class="navigation-link" @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </navigation>
</template>

<script lang="ts">
import {computed} from 'vue';
import {useStore} from "vuex";

export default {
  name: "navigation",
  setup() {
    const store = useStore();

    const auth = computed(() => store.state.authenticated)

    const logout = async () => {
      await fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
      });
    }

    return {
      auth,
      logout
    }
  }
}
</script>
