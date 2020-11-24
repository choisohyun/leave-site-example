<template>
  <div>
    <ul>
      <li v-for="({ name, type }, index) in tabData" :key="index">
        <router-link
            :to="{ path: $route.fullPath, query: { tabName: type } }"
            @click="onClickTab(type)"
        >
          {{ name }}
        </router-link>
      </li>
    </ul>
    
    <code-list-vue v-if="isShowContent('code')" />
    <create-issue-vue v-if="isShowContent('issue')" />
    <issue-list-vue v-if="isShowContent('create')" />
  </div>
</template>

<script>
import CodeListVue from "../components/CodeList.vue";
import CreateIssueVue from "../components/CreateIssue.vue";
import IssueListVue from "../components/IssueList.vue";
export default {
  name: "Repository",
  components: {CodeListVue, CreateIssueVue, IssueListVue},
  data() {
    return {
      tabData: [
        {name: '코드 리스트', type: 'code'},
        {name: '이슈 리스트', type: 'issue'},
        {name: '새 이슈 만들기', type: 'create'},
      ],
      currentTab: 'code'
    }
  },
  methods: {
    onClickTab: function (type) {
      this.currentTab = type;
    },
    isShowContent: function (type) {
      return this.currentTab === type;
    }
  },
  watch: {
    
  }
};
</script>

<style>
</style>