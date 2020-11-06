import Vue from 'vue'
import VueApollo from 'vue-apollo'
import App from './App.vue'
import router from './router'

import {ApolloClient} from 'apollo-client'
import {createHttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'https://www.lottohelden.de/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

Vue.config.productionTip = false

Vue.use(VueApollo);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
    router,
    apolloProvider,
    render: h => h(App)
}).$mount('#app')
