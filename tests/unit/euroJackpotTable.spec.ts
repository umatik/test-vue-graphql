import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import EuroJackpotPage from "@/components/EuroJackpotPage.vue";
import {BTable} from 'bootstrap-vue';

describe('EuroJackpotPage.vue', () => {
    it('test', () => {

        const wrapper = shallowMount(EuroJackpotPage, {
            stubs: {
                'b-table' : BTable
            }
        })
        wrapper.setData({
            isBusy: false
        })

        //expect(wrapper.is).to.include(msg)
    })
})