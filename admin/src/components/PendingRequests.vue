<template>
  <div>
    <div class="container">
      <h2 class="text-center">Pending Requests</h2>

      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-2">
              <img
                src="https://image.ibb.co/jw55Ex/def_face.jpg"
                class="img img-rounded img-fluid"
              />
              <p class="text-secondary text-center">15 Minutes Ago</p>
            </div>
            <div class="col-md-10">
              <p>
                <a
                  class="float-left"
                  href="https://maniruzzaman-akash.blogspot.com/p/contact.html"
                  ><strong>Event</strong></a
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
                Lorem Ipsum is simply dummy text of the pr make but also the
                leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
              <p>
                <button class="ui positive basic button">Approve</button>
                <button class="ui negative basic button">Decline</button>
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
export default {
  name: "Dash",
  props: {
    logout: {
      type: Function,
    },
  },
  data() {
    return {
      events: [1, 2, 3, 4, 5],
    };
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
