<template>
  <v-app>
    <ul>
     
      <li>
        <router-link to="/myproject-fake-block">/My project fake block</router-link>
      </li>
      
      
    </ul>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
