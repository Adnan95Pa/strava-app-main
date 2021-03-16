<template>
  <div v-if="loaded" class="athlete q-gutter-x-md">
    <img class="athlete__avater" :src="athlete.profile" alt="" />
    <div class="athlete__name">
      {{ athlete.firstname + " " + athlete.lastname }} <br />
    </div>
    <div>{{ athlete.city }}</div>
  </div>
</template>

<script>
import { getAthlete } from "../../api";
export default {
  data() {
    return {
      athlete: {},
      loaded: false
    };
  },
  created() {
    getAthlete(localStorage.access_token).then((res) => {
      this.athlete = res;
      this.loaded = true
    });
  },
};
</script>

<style scoped>
.athlete {
  padding: 20px;
  width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.athlete__avater {
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.athlete__name {
  font-weight: bold;
  font-size: 25px;
  padding: 5px 35px;
  background-color: #4a795a31;
  border-radius: 25px;
  margin: 10px;
  color: #09ac60;
}
</style>