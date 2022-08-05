import { shallowMount } from "@vue/test-utils";
import publicTitle from "@/components/common/publicTitle.vue";

describe("这是测试自动注册的公共组件单元", () => {
  const title = "默认标题";
  const wrapper = shallowMount(publicTitle, {
    propsData: { title }
  });
  test("public_title测试", () => {
    expect(wrapper.text()).toMatch(title);
  });
});
