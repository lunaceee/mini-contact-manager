<template>
  <ul class="contact__list">
    <li v-for="(contact, index) in contactList" :key="index">
      <button class="card contact--compact" @click="showByIndex = index">
        <h2 class="contact__name">{{ contact.name }}</h2>
      </button>
      <div class="card contact--details" v-show="showByIndex == index">
        <div class="close-card">
          <a href="#" @click="showByIndex  = -1">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="times-circle"
              class="svg-inline--fa fa-times-circle fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20"
              height="20"
            >
              <path
                fill="var(--darkest-grey)"
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
              />
            </svg>
          </a>
        </div>
        <div class="contact__avatar" v-if="contact.avatar">
          <img width="100" height="100" :src="contact.avatar" alt="user avatar" />
        </div>
        <div class="contact__info">
          <h2 class="name" v-if="contact.name">{{ contact.name }}</h2>
          <p class="phone" v-if="contact.phoneNumber">
            <span>{{ contact.phoneNumber }}</span>
          </p>
          <p class="email" v-if="contact.email">
            <span>{{ contact.email }}</span>
          </p>
          <p v-if="contact.address" class="address">
            <span>{{ contact.address }}</span>
          </p>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "contactDetail",
  data() {
    return {
      showByIndex: -1,
    };
  },
  computed: {
    ...mapState(["contactList"]),
  },
};
</script>
<style scoped>
.contact__list {
  display: grid;
  grid-gap: 1rem;
}

.contact__list li {
  display: flex;
}

.contact__list li > * {
  margin: 0.5rem;
}

.contact__name::before {
  content: url("../assets/icons/IconUser.svg");
  margin-right: 0.4rem;
}

.card {
  border-radius: 0.2rem;
  box-shadow: 0 2px 4px 0 var(--lighter-grey);
  z-index: 1;
  background-color: #fff;
  padding: 0.8rem;
}

.contact--compact {
  display: flex;
  min-width: 10rem;
  align-items: baseline;
  cursor: pointer;
  height: 5rem;
}

.contact--compact > * {
  padding: 0 0.2rem;
}

.contact--details {
  display: flex;
  flex-direction: column;
  width: 14rem;
  padding: 1rem 1.6rem;
}

.close-card {
  text-align: right;
}

.contact__avatar {
  display: flex;
  justify-content: center;
}

.contact__avatar img {
  border-radius: 4px;
  border: 2px solid var(--darkest-grey);
}

.contact__info {
  display: flex;
  flex-direction: column;
}

.contact__info h2 {
  text-align: center;
}

.phone,
.email,
.address {
  display: flex;
  align-items: center;
  word-break: break-all;
}

.phone::before {
  content: url(../assets/icons/IconPhone.svg);
}

.email::before {
  content: url(../assets/icons/IconEmail.svg);
}

.address::before {
  content: url(../assets/icons/IconAddress.svg);
}

.contact__info span {
  padding: 0 0.4rem;
}
</style>