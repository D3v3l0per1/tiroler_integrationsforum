<template>
  <v-app>
    
    <navbar />

    <v-container class="mt-5">
      <router-view></router-view>
    </v-container>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>
