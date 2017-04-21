<template>
    <div v-if="isLoading" class="loader">
        Loading..
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
        top: 20px;
        font-size: 16px;
        width: 100%;
        text-align: center;
        color: white;
    }
</style>