import Sample from "./Sample";

export default {
  title: "issue-3"
};

export const SampleComponent = () => ({
  components: { Sample },
  template: "<Sample />"
});

export const SampleWithMessage = () => ({
  components: { Sample },
  template: '<Sample msg="My Message" />'
});
