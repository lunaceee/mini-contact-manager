<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <slot name="body">
              <form @submit.prevent="onSubmit" class="add-contact-form">
                <a href="#" @click="$emit('close')" class="close-window">Close</a>
                <legend>Contact information</legend>
                <fieldset>
                  <label for="full-name">
                    Full name
                    <span class="required">(required)</span>
                    <p>
                      <input type="text" name="full-name" required v-model="userData.name" />
                    </p>
                  </label>
                  <label for="email">
                    Email
                    <p>
                      <input type="email" name="email" v-model="userData.email" />
                    </p>
                  </label>
                  <label for="phone">
                    Phone Number
                    <p>
                      <input type="tel" name="phone" v-model="userData.phoneNumber" />
                    </p>
                  </label>
                  <label for="address">
                    Address
                    <p>
                      <input type="text" name="address" v-model="userData.address" />
                    </p>
                  </label>
                  <button type="submit" class="btn-add">Add contact</button>
                </fieldset>
              </form>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "contactFormModal",
  data() {
    return {
      userData: {
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.userData) {
        this.$store.commit("addContact", this.userData);
        this.userData = {};
        this.$emit("close");
      }
    },
  },
};
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 251, 251, 0.911);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 20rem;
  margin: 0px auto;
  border-radius: 0.2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  transition: opacity 0.5s;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
/* add contact form */
.add-contact-form {
  background-color: var(--grey);
  box-shadow: 0 2px 4px 0 var(--lighter-grey);
  border-radius: 0.4rem;
  padding: 1rem;
  position: relative;
}

.add-contact-form .close-window {
  position: absolute;
  padding: 0.8rem;
  font-size: small;
  right: 0;
  text-align: center;
  top: 0;
  text-decoration: none;
  color: var(--darkest-grey);
  font-weight: 600;
}

.add-contact-form legend {
  padding: 2rem;
  font-weight: 600;
  text-align: center;
}

.add-contact-form fieldset {
  border: none;
}

.add-contact-form input {
  width: 100%;
  border: 1px solid var(--darkest-grey);
  border-radius: 0.1rem;
  height: 1.5rem;
}

.add-contact-form input:focus {
  border: 2px solid var(--darkest-grey);
}
</style>