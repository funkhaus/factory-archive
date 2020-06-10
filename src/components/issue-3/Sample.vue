<template>
  <div class="sample">
    <p>
      This is a sample component with a message prop
    </p>

    <pre v-if="msg">{{ msg }}</pre>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sample {
  p {
    font-size: 2rem;
  }

  pre {
    background-color: lightblue;
    padding: 1rem;
  }
}
</style>
