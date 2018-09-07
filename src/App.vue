<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <v-app id="inspire">
      <router-view/>
    </v-app>
  </div>
</template>
