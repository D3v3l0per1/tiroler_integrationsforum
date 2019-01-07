<template>
  <div>
    <v-toolbar fixed dark class="primary">

      <v-toolbar-title>
        <v-btn flat>
          Tiroler Integrationsforum
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="item in menuItems" :key="item.key" :to="item.link">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <v-toolbar-side-icon class="hidden-md-and-up" @click="sidenav = true"></v-toolbar-side-icon>

    </v-toolbar>

    <v-navigation-drawer temporary fixed v-model="sidenav">
      <v-toolbar dark class="primary lighten-3" flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Tiroler Integrationsforum
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-title>
            {{ item.title }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sidenav: false,
      menuItems: [
        { title: 'Home', icon: '', link: '/' },
        { title: 'Aktuelles & Informationen', icon: '', link: '#info' },
        { title: 'Über uns', icon: '', link: '#ueber_uns' },
        { title: 'Organisationen', icon: '', link: '#organisation' },
        { title: 'Kontakt', icon: '', link: '#kontakt' }
      ]
    }
  }
}
</script>
