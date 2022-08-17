
export default {
  name: 'navbar-menu',
  components: {},
  props: [],
  data () {
    return {
      activeNavbar: null,
    }
  },
  computed: {

  },
  mounted () {
    this.preventAnchors();
  },
  methods: {

    preventAnchors(){
      document.querySelectorAll('a[href^="#"').forEach(anchor => {
        anchor.addEventListener("click", function(e){
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
          });
        });
      });

    },

    handleNavBarClick(activeElement){
      this.activeNavbar = activeElement;
      console.log(this.activeNavbar)
    }

  }
}


