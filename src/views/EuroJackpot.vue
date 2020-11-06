<template>
    <div>
        <EuroJackpotPage></EuroJackpotPage>
    </div>
</template>

<script lang="ts">

import {Component, Vue} from 'vue-property-decorator';
import EuroJackpotPage from '@/components/EuroJackpotPage.vue'; // @ is an alias to /src

@Component({
    components: {
        EuroJackpotPage,
    },
})

export default class Home extends Vue {
}


</script>