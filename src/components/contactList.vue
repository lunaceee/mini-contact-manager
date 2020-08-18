<template>
  <div>
    <div v-if="contactList.length > 0">
      <contact-details></contact-details>
    </div>
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
  components: {
    contactDetails,
  },
  computed: {
    ...mapState(["contactList"]),
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
</style>