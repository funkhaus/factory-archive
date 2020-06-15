import { mount } from "@vue/test-utils";
import Sample from "./Sample.vue";

describe("Sample", () => {
  test("renders correctly", () => {
    const wrapper = mount(Sample, {
      propsData: {
        msg: "your message"
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test("shows given message", () => {
    const wrapper = mount(Sample, {
      propsData: {
        msg: "your message"
      }
    });
    
    expect(wrapper.find("pre").text()).toBe("your message");
  });

  test("hides pre when no message", () => {
    const wrapper = mount(Sample, {
      propsData: {}
    });
    expect(wrapper.find("pre").exists()).toBe(false)
  });
});
