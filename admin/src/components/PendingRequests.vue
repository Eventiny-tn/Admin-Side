<template>
  <div>
    <div class="container">
      <h2 class="text-center">Pending Requests</h2>

      <div class="card" v-for="(event, i) in events" :key="i">
        <div class="card-body">
          <div class="row">
            <div class="col-md-2">
              <img :src="event.images[0]" class="img img-rounded img-fluid" />
              <p class="text-secondary text-center">
                {{ event.time }}
              </p>
            </div>
            <div class="col-md-10">
              <p>
                <a class="float-left"
                  ><strong>{{ event.name }}</strong></a
                >
                <span class="float-right"
                  ><i class="text-warning fa fa-star"></i
                ></span>
                <span class="float-right"
                  ><i class="text-warning fa fa-star"></i
                ></span>
                <span class="float-right"
                  ><i class="text-warning fa fa-star"></i
                ></span>
                <span class="float-right"
                  ><i class="text-warning fa fa-star"></i
                ></span>
              </p>
              <div class="clearfix"></div>
              <p>
                {{ event.cover }}
              </p>
              <p>
                <button class="ui positive basic button">Approve</button>
                <button
                  class="ui negative basic button"
                  @click="declineEvent(event.id)"
                >
                  Decline
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--/row-->
</template>

<script>
import axios from "axios";
// import moment from "moment";
export default {
  name: "Dash",
  props: {
    logout: {
      type: Function,
    },
  },
  data() {
    return {
      events: [],
    };
  },
  methods: {
    getAllPendingRequests() {
      axios.get("http://localhost:3000/event").then(({ data }) => {
        this.$data.events = data;
        console.log("==>>", data);
      });
    },
    declineEvent(id) {
      console.log(id);
      if (id) {
        axios.delete("http://localhost:3000/event/" + id).then(({ data }) => {
          console.log(data);
          this.getAllPendingRequests();
        });
      }
    },
  },
  mounted() {
    this.getAllPendingRequests();
  },
};
</script>

<style scoped>
.card-inner {
  margin-left: 4rem;
}
body {
  background-color: #eee;
}

#pinBoot {
  position: relative;
  max-width: 100%;
  width: 100%;
}
img {
  width: 100%;
  max-width: 100%;
  height: auto;
}
.white-panel {
  position: absolute;
  background: white;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  padding: 10px;
}
/*
stylize any heading tags withing white-panel below
*/

.white-panel h1 {
  font-size: 1em;
}
.white-panel h1 a {
  color: #a92733;
}
.white-panel:hover {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  margin-top: -5px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
</style>
