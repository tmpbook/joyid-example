<template>
  <div id="app">
    <div v-if="address">
      <h1 class="text-xl mb-4">Connected: {{ address }}</h1>
      <button class="btn btn-primary" @click="logout">Disconnect</button>
      <div class="divider"></div>
    </div>
    <button v-else class="btn btn-primary" @click="onConnect">
      Connect JoyID
    </button>
  </div>
</template>
 
<script lang="ts">
import { ref } from "vue";
import { connect, disconnect, getConnectedAddress } from "@joyid/evm";
 
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
 
    const logout = () => {
      disconnect();
      address.value = null;
    };
 
    return { address, onConnect, logout };
  },
};
</script>