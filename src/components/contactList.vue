<template>
  <div>
    <ul v-if="contactList.length > 0" class="contact__list">
      <li v-for="(contact, index) in contactList" :key="index">
        <button class="card contact--compact" @click="showByIndex = index">
          <h2 class="contact__name">{{ contact.name }}</h2>
        </button>
        <button @click="deleteContact(contact)">Delete</button>
        <contact-details v-show="showByIndex == index" :contact="contact" @close="showByIndex = -1"></contact-details>
      </li>
    </ul>
    <div v-else>
      <h2>Call me, maybe?</h2>
      <img
        src="https://i.pinimg.com/564x/e6/89/47/e689476d68157a3b33961489db179a81.jpg"
        alt="placeholder image"
        width="500"
      />
    </div>
  </div>
</template>
<script>
import contactDetails from "@/components/contactDetails.vue";
import { mapState } from "vuex";

export default {
  name: "contactList",
  data() {
    return {
      showByIndex: -1,
    };
  },
  components: {
    contactDetails,
  },
  computed: {
    ...mapState(["contactList"]),
  },
  methods: {
    deleteContact(contact) {
      this.$store.commit("deleteContact", contact);
    },
  },
};
</script>
<style scoped>
h2 {
  text-align: right;
}

img {
  max-width: 100%;
}

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

.contact__name::before {
  content: url("../assets/icons/IconUser.svg");
  margin-right: 0.4rem;
}
</style>