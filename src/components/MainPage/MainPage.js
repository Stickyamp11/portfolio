import ProjectCard from "../ProjectCard/project-card.vue"

export default {
  name: 'main-page',
  components: {ProjectCard},
  props: [],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

    getImgUrl(img) {
      return require('../../assets/'+ img)
  }

  }
}


