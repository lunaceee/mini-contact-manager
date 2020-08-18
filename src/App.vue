<template>
  <div id="app" class="container">
    <h1>ContaCat Manager</h1>
    <button class="btn--add" id="show-modal" @click="showModal = true">Add contact</button>
    <contact-form-modal v-if="showModal" @close="showModal = false"></contact-form-modal>
    <contact-list class="contact-list"></contact-list>
  </div>
</template>

<script>
import contactFormModal from "@/components/contactFormModal.vue";
import contactList from "@/components/contactList.vue";

export default {
  name: "ContactManager",
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    contactList,
    contactFormModal,
  },
};
</script>
