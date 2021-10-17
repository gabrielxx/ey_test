import { mount } from "@vue/test-utils";
import contentImage from "@/components/contentImage.vue"

describe("contentImage.vue render text", () => {
  it("render text", () => {
    const wrapper = mount(contentImage);
    expect(wrapper.text()).toMatch('Eliminar')
  });
 
});


