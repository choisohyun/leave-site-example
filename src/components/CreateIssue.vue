<template>
  <div>
    <h1>CreateIssue</h1>
    <label>
      <input type="text" placeholder="제목을 입력하세요." v-model="title">
      <textarea placeholder="내용을 입력하세요." v-model="content" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'CreateIssue',
  data() {
    return {
      title: '',
      content: '',
      canLeaveSite: true
    }
  },
  methods: {
    unLoadEvent: function (event) {
      if (this.canLeaveSite) return;

      event.preventDefault();
      event.returnValue = '';
    },
    changeCanLeaveSite: function () {
      this.$emit('change-can-leave-site', this.canLeaveSite);
    }
  },
  watch: {
    title: function () {
      this.canLeaveSite = false;
      this.changeCanLeaveSite();
    },
    content: function () {
      this.canLeaveSite = false;
      this.changeCanLeaveSite();
    }
  },
  mounted() {
    window.addEventListener('beforeunload', this.unLoadEvent);
  },
  beforeUnmount() {
    window.removeEventListener('beforeunload', this.unLoadEvent);
  },

};
</script>

<style>
</style>