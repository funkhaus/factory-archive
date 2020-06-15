import AgencySpecifcation from "./AgencySpecifcation";
import ProjectSpecifcation from "./ProjectSpecifcation";

export default {
  title: "Specifcations"
};

export const Agency = () => ({
  components: { AgencySpecifcation },
  template: "<agency-specifcation/>"
});

export const Project = () => ({
  components: { ProjectSpecifcation },
  template: "<project-specifcation/>"
});
