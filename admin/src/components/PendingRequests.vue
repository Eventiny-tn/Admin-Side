<template>
  <div>
    <div class="container">
      <h2 class="text-center">Pending Requests</h2>

      <div class="card" v-for="(event, i) in events" :key="i">
        <div class="card-body">
          <div class="row">
            <div class="col-md-2">
              <img :src="event.cover" class="img img-rounded img-fluid" />
              <p class="text-secondary text-center">
                {{ event.time }}
              </p>
            </div>
            <div class="col-md-10">
              <p>
                <a class="float-left"
                  ><strong>{{ event.name }}</strong></a
                >
              </p>
              <div class="clearfix"></div>
              <p>
                {{ event.caption }}
              </p>
              <p>
                <button
                  class="ui positive basic button"
                  @click="approveRequest(event.id)"
                >
                  Approve
                </button>
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
import moment from "moment";
import swal from "sweetalert";

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
      axios.get("http://localhost:3001/event").then(({ data }) => {
        let currentData = [];
        for (let i = 0; i < data.length; i++) {
          data[i].time = moment(data[i].time).fromNow();
          currentData.push(data[i]);
        }
        this.$data.events = currentData;
        console.log("==>>", data);
      });
    },
    declineEvent(id) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this event file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          if (id) {
            axios
              .delete("http://localhost:3001/event/" + id)
              .then(({ data }) => {
                console.log(data);
                this.getAllPendingRequests();
              });
          }
          swal("Ok! the event has been deleted!", {
            icon: "success",
          });
        } else {
          swal("The event is safe!");
        }
      });
    },
    approveRequest(id) {
      if (id) {
        axios
          .put("http://localhost:3001/event/approve/" + id)
          .then(({ data }) => {
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
