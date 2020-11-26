<template>
  <div>
    <h1><router-link :to="{ path: '/detail-issue' }">Detail Issue</router-link></h1>
    <ul>
      <li v-for="({ name, type }, index) in tabData" :key="index">
        <router-link :to="{ path: $route.path, query: { tabName: type } }" @click="checkCanLeavePage()">
          {{ name }}
        </router-link>
      </li>
    </ul>
    
    <code-list-vue v-if="isShowContent('code')" />
    <issue-list-vue v-if="isShowContent('issue')" />
    <create-issue-vue v-if="isShowContent('create')" @change-can-leave-site="changeCanLeaveSite" />
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
      currentTab: 'code',
      canLeaveSite: true
    }
  },
  methods: {
    isShowContent: function (type) {
      console.log(this.$route)
      return this.$route.query.tabName === type;
    },
    changeCanLeaveSite: function (value) {
      this.canLeaveSite = value;
    },
    checkCanLeavePage: function () {
      if (!this.canLeaveSite) {
        if (!confirm('이 사이트에서 나가시겠습니까?\n변경사항이 저장되지 않을 수 있습니다.ㅇ')) return;
        this.canLeaveSite = true;
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.canLeaveSite) next();
    else if (confirm('이 사이트에서 나가시겠습니까?\n변경사항이 저장되지 않을 수 있습니다.')) {
      next();
    }
  }
};
</script>

<style>
</style>