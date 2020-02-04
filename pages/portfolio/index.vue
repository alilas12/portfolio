<template>
    <b-container fluid class="d-flex flex-column">
        <b-row>
            <b-col class="p-0">
                <div class="bg-light btext text-center">
                    <h1>Portfolio</h1>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="p-0 mb-4">
                <b-list-group class="mt-3 justify-content-center" horizontal>
                    <b-list-group-item>All</b-list-group-item>
                    <b-list-group-item>Development</b-list-group-item>
                    <b-list-group-item>Design</b-list-group-item>
                </b-list-group>
            </b-col>
        </b-row>
        <b-row class="align-self-center w-75">
            <b-col class="col-3 mb-4">
                <a v-b-modal.modal-1><img class="w-100" src="~/assets/img/voorbeeldWeb.jpg"/></a>
            </b-col>
            <b-col class="col-3 mb-4">
                <a v-b-modal.modal-1><img class="w-100" src="~/assets/img/voorbeeldWeb.jpg"/></a>
            </b-col>
            <b-col class="col-3 mb-4">
                <a v-b-modal.modal-1><img class="w-100" src="~/assets/img/voorbeeldWeb.jpg"/></a>
            </b-col>
            <b-col class="col-3 mb-4">
                <a v-b-modal.modal-1><img class="w-100" src="~/assets/img/voorbeeldWeb.jpg"/></a>
            </b-col>
            <b-col class="col-3 mb-4">
                <a v-b-modal.modal-1><img class="w-100" src="~/assets/img/voorbeeldWeb.jpg"/></a>
            </b-col>
        </b-row>
        <b-modal tabindex="-1" id="modal-1">
            <img class="w-100" src="~/assets/img/voorbeeldWeb.jpg"/>
        </b-modal>
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
.modal-header{
    display: none;
}
.modal-body{
    background-color: none !important;
}
</style>