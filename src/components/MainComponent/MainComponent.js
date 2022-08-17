import AutorComponent from "../AutorBox/autor-box.vue"
import NavbarMenu from "../NavbarMenu/navbar-menu.vue"
import MainPage from "../MainPage/main-page.vue"
export default {
  name: 'main-component',
  components: {AutorComponent, NavbarMenu,MainPage},
  props: [],
  data () {
    return {
      fullScreen: null,
    }
  },
  computed: {

  },
  mounted () {
    this.getWindowSize();
    window.addEventListener('resize', this.getWindowSize);

  },
  methods: {
    getWindowSize(){
      console.log("resizing")
      console.log(window.innerWidth)
      this.fullScreen = window.innerWidth >= 1600 ? true : false;
    },

  }
}


