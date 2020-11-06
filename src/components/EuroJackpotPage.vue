<template>
    <div>
        Euro Jackpot Table

        <b-table striped hover :items="items" :busy="isBusy">
            <template #table-busy>
                <div class="text-center text-danger my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong>Loading...</strong>
                </div>
            </template>
        </b-table>
    </div>

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import gql from 'graphql-tag'

const GET_JACKPOT = gql`
    query draw($type: String, $limit: Int){
        draw(type: $type, limit: $limit) {
            draws {
                date
                gameAmount
                jackpot
            }
        backendError
    }
}`;

@Component
export default class EuroJackpotPage extends Vue {

    created() {
        this.getData();
    }

    private isBusy = false
    private items: Array<object> = []

    private getData(): void {
        this.isBusy = true;
        this.$apollo.query({
            query: GET_JACKPOT,
            variables: {
                type: "eurojackpot",
                limit: 50
            }
        }).then(response => {
            this.items = response.data.draw.draws;
            this.isBusy = false;
        }).catch(error => {
            console.log(error)
        })
    }
}
</script>

<style scoped>

</style>