<template>
  <b-container fluid>
    <b-row>
      <b-col class="p-0">
        <div class="bg-light btext">
          <div>
            <h1>I'm a developer</h1>
            <p style="width: 20vw;">orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum sed tellus quis fringilla. 
            Curabitur mattis lobortis arcu ut euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas tempus 
            nulla ac est mollis, id porttitor odio sollicitudin. Quisque sed ultricies purus, quis ullamcorper metus. Morbi arcu diam, rhoncus sit amet imperdiet nec,
            </p>
            <b-button>Hire me now</b-button>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Nav from '~/components/nav'
export default {
  components: {
    Nav,
  }
}
</script>

<style lang="scss">
.btext{
  padding: 8vw;
}
</style>
