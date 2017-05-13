<template>
    <div v-if="isLoading" class="loader">
        <span>Loading..</span>
    </div>
</template>

<script>

/*
This component listens for specific event emissions
in order to show & hide the global loading dialog.
*/
export default {
    data () {
        return {
            isLoading: false
        }
    },

    mounted () {
        this.EventHolder.$on('startLoading', () => {
            this.isLoading = true
        });

        this.EventHolder.$on('stopLoading', () => {
            this.isLoading = false
        });
    }
}

</script>

<style>
    .loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
    }

    .loader span {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        font-size: 22px;
        color: black;
    }
</style>