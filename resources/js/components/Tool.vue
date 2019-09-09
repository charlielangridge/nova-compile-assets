<template>
    <div>
        <heading class="mb-6">Compile Assets</heading>
        <h1 v-if="active" >PROCESSING...</h1>
        <button v-if="!active" class="form-file-btn btn btn-default btn-primary select-none" @click.prevent="yarnDev">Compile - DEV</button>
        <button v-if="!active" class="form-file-btn btn btn-default btn-primary select-none" @click.prevent="yarnProd">Compile - PROD</button>
        <footer class="mt-4">{{response}}</footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                response: '',
                active: false,
            }
        },
        methods: {
            yarnDev() {
                this.active = true;
                Nova.request().get('/nova-vendor/compile-assets/yarn/dev').then(response => {
                    this.response = "Yarn Dev: " + response.data;
                    this.active = false;
                });
            },
            yarnProd() {
                this.active = true;
                Nova.request().get('/nova-vendor/compile-assets/yarn/prod').then(response => {
                    this.response = "Yarn Prod: " + response.data;
                    this.active = false;
                });
            },
        }
    }
</script>

<style>
    /* Scoped Styles */
</style>
