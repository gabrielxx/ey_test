import { mount } from "@vue/test-utils";
import contentImage from "@/components/contentImage.vue"

describe("contentImage.vue props check", () => {
  it("renders props.src when passed", () => {
    const source = "image.jpg";
    const wrapper = mount(contentImage, {
      propsData: { 'src' : source },
    });
    expect(wrapper.props('src')).toMatch(source);
    expect(wrapper.text()).toMatch('Eliminar')

  });
 
});


