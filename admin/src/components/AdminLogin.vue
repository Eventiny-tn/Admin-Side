<template>
  <div class="container register-form">
    <div class="form">
      <div class="note">
        <h1>Eventiny Admin Side</h1>
      </div>
      <div class="form-content">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="   Admin Email..."
                v-model="login.username"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="   Password..."
                v-model="login.password"
              />
            </div>
          </div>
        </div>
        <div>
          <button type="button" class="btnSubmit" @click="onSubitLogin(login)">
            Submit
          </button>
        </div>
        <div class="img">
          <img
            class=" medium ui image"
            src="https://www1.chester.ac.uk/sites/default/files/styles/hero/public/Events%20Management%20festival%20image.jpg?itok=eJ3k-5R6"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
    };
  },
  props: {
    onSubitLogin: {
      type: Function,
    },
  },
  methods: {},
};
</script>
<style scoped>
.row {
  margin: auto;
}
.img {
  position: relative;
  float: left;
  max-height: 100%;
  max-width: 100%;
  min-width: 2%;
  min-height: 2%;
  margin-left: 60%;
  margin-top: -13%;
  margin-right: 2%;
  margin-bottom: 2%;

  opacity: none;
}
.form-content {
  display: block;
}
h1 {
  font-family: "Shippori Mincho", serif;
}
.note {
  text-align: center;
  height: 80px;
  background: -webkit-linear-gradient(left, #0072ff, #8811c5);
  color: #fff;
  font-weight: bold;
  line-height: 80px;
}
.form-content {
  padding: 5%;
  border: 1px solid #ced4da;
  margin-bottom: 2%;
}
.form {
  margin-top: 8%;
}
.form-control {
  border-radius: 1.5rem;
}
.btnSubmit {
  border: none;
  border-radius: 1.5rem;
  padding: 1%;
  width: 20%;
  cursor: pointer;
  background: #0062cc;
  color: #fff;
}
.btnSubmit:hover {
  background-color: #8811c5;
}</style
>>>
