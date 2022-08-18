<template>
<div class="content-wrapper">
<MainComponent/>
<BackgroundComponent/>
</div>
</template>

<script>
import BackgroundComponent from "./components/BackgroundAnimation/Background-Component.vue"
import MainComponent from "./components/MainComponent/main-component.vue"
export default {
  name: 'App',
  components: {
    BackgroundComponent,MainComponent
  }
}
</script>

<style>
.content-wrapper{
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#app {

}
@font-face {
  font-family: "Crimson";
  src: url(fonts/CrimsonText-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Dancing";
  src: url(fonts/DancingScript-Regular.ttf) format("truetype");
}

*{
    font-family: "Crimson", oswaldregular, sans-serif;
}

html{
	scroll-behavior: smooth;
  margin:0;
  overflow-x: hidden;

}

body{
  background-color: transparent;
}


/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #e2dfdf;
  border-radius: 4px;

}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(83, 82, 82);
}

</style>
