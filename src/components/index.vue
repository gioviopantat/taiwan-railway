<template>
  <div id="app">
    <!-- <img class="abc" src="../assets/123.png" /> -->
    <div class="topbar">
      <h1
        v-on:mouseover="hover1"
        v-on:mouseleave="leave1"
        class="topbar-station-text"
      >
        {{ Station }}
      </h1>
      <h1 class="topbar-history-text">History</h1>
      <h1 class="topbar-commodity-text">Commodity</h1>
      <h1 class="topbar-tickets-text">Tickets</h1>
      <img class="avatar-woman" src="../assets/_1_.png" />
    </div>
    <img class="logo1" src="../assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "index",
  data: () => ({
    Station: "Station",
  }),
  methods: {
    hover() {
      this.Station = "車站";
    },
    leave() {
      this.Station = "Station";
    },
  },
};
</script>

<style scoped>
.abc {
  min-width: 100%;
  min-height: 100%;
}
.topbar {
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 154px;
  display: inline-block;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  padding-left: 50%;
}
.topbar-station-text {
  top: 88px;
  left: 9.3%;
  width: 92px;
  height: 40px;
  text-align: left;
  font: normal normal normal 25px/50px Apple LiSung;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  position: absolute;
}
.topbar-history-text {
  top: 88px;
  left: 16.4%;
  width: 94px;
  height: 40px;
  text-align: left;
  font: normal normal normal 25px/50px Apple LiSung;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  position: absolute;
}
.topbar-commodity-text {
  top: 7.5%;
  right: 21%;
  width: 145px;
  height: 40px;
  text-align: right;
  font: normal normal 300 25px/50px Apple LiSung;
  letter-spacing: -0.3px;
  color: #707070;
  opacity: 1;
  position: absolute;
}
.topbar-tickets-text {
  top: 7.5%;
  right: 14.2%;
  width: 89px;
  height: 40px;
  text-align: right;
  font: normal normal 300 25px/50px Apple LiSung;
  letter-spacing: 0.9px;
  color: #707070;
  opacity: 1;
  position: absolute;
}
.avatar-woman {
  top: 6.8%;
  right: 7.7%;
  width: 62px;
  height: 62px;
  opacity: 1;
  position: absolute;
}
.logo1 {
  top: 7.1%;
  left: 49.3%;
  position: absolute;
}
</style>
