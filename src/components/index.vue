<template>
  <div id="app">
    <img class="abc" src="../assets/123.png" />
    <div class="topbar">
        <h1 @mouseover="hover1" @mouseleave="leave1" class="topbar-station-text">{{ Station }}</h1>
        <h1  class="topbar-history-text">History</h1>
        <h1  class="topbar-commodity-text">Commodity</h1>
        <h1   class="topbar-tickets-text">Tickets</h1>
        <img class="avatar-woman" src="../assets/_1_.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data: () => ({
    Station: 'Station'
  }),

  method: {
    hover1() {
      this.Station = "車站";
    },
    leave1() {
      this.Station = 'Station';
    }
  }
}
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
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        opacity: 1;
        padding-left: 50%;
        
    }
    .topbar-station-text {
        top: 89px;
        left: 10%;
        width: 92px;
        height: 40px;
        text-align: left;
        font: normal normal normal 30px/40px STSong;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1;
        position: absolute;
    }
    .topbar-history-text {
        top: 88px;
        left: 16%;
        width: 94px;
        height: 40px;
        text-align: left;
        font: normal normal normal 30px/40px STSong;
        letter-spacing: 0px;
        color: #707070;
        opacity: 1;
        position: absolute;
    }
    .topbar-commodity-text {
        top: 88px;
        right: 16%;
        width: 145px;
        height: 40px;
        text-align: right;
        font: normal normal 300 30px/25px Apple LiSung;
        letter-spacing: -0.3px;
        color: #707070;
        opacity: 1;
        position: absolute;
    }.topbar-tickets-text {
        top: 88px;
        right: 10%;
        width: 89px;
        height: 40px;
        text-align: right;
        font: normal normal 300 30px/25px Apple LiSung;
        letter-spacing: 0.9px;
        color: #707070;
        opacity: 1;
        position: absolute;
    }
    .avatar-woman {
        top: 53px;
        right: 4.5%;
        width: 76px;
        height: 76px;
        opacity: 1;
        position: absolute;
    }
</style>
