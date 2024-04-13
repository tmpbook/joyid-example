<template>
    <div id="app">
      <button class="btn btn-primary" @click="onConnect">
        Connect JoyID
      </button>
    </div>
  </template>
   
  <script lang="ts">
  import { ref } from "vue";
  import { connect } from "@joyid/evm";
   
  export default {
    setup() {
      const address = ref(null);
   
      const onConnect = async () => {
        try {
          const res = await connect();
          address.value = res;
        } catch (error) {
          console.error(error);
        }
      };
   
      return { address, onConnect };
    },
  };
  </script>