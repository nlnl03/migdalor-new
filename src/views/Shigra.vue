<template>

<div class="wrap">
  <TopBar/>
  <Time/>
  <Jobs/>
  <NoticeBoard/>
</div>

</template>


<script>
import NoticeBoard from "@/components/mainPage/noticeBoard/NoticeBoard.vue"

import Time from "@/components/mainPage/time/Time.vue"
import TopBar from "@/components/mainPage/topBar/TopBar.vue"
import Jobs from "@/components/mainPage/jobs/Jobs.vue"
export default {
  name: 'Shigra',
  props: {
  },
  components:{
    TopBar,
    Time,
    Jobs,
    NoticeBoard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.wrap {
  display: grid; 
  position: relative;
  grid-template-columns: 0.1fr 2.8fr 1.3fr 1.6fr 0.1fr; 
  grid-template-rows: 0.5fr 0.7fr 0.4fr 2.1fr; 
  gap: 30px 20px; 
  background-color: var(--bg-color);
  grid-template-areas: 
    ". header header header ."
    ". jobs jobs Time ."
    ". jobs jobs Time ."
    ". calendar calendar noticeBoard ."; 
    height: 100vh;
    width: 100vw;
}

.header { grid-area: header; }
.phones { grid-area: phones; }
.Time { grid-area: Time; }
.noticeBoard { grid-area: noticeBoard; }
.calendar { grid-area: calendar; }
.jobs { grid-area: jobs; }
.hamal { grid-area: hamal; }

</style>
