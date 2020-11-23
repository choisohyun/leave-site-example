<template>
  <CodeListVue />
  <CreateIssueVue />
  <IssueListVue />
</template>

<script>
import CodeListVue from "../components/CodeList.vue";
import CreateIssueVue from "../components/CreateIssue.vue";
import IssueListVue from "../components/IssueList.vue";
export default {
  name: "Repository",
  components: [CodeListVue, CreateIssueVue, IssueListVue],
};
</script>

<style>
</style>