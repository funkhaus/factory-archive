import Sample from "./Sample";

export default {
  title: "Sample"
};

export const hello = () => ({
  components: { Sample },
  template: "<Sample />"
});

export const helloWithMessage = () => ({
  components: { Sample },
  template: '<Sample msg="My Message" />'
});
