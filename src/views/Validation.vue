<template>
    <v-container fluid>
        <p>These open-source community-based InSpec profiles validate security of common system components. MITRE is helping to provide stewardship over these profiles, hosted here and at other community vendor sites. If you are interested in new profiles, please contact us at <a :href="mail_link">{{db.email}}</a>. If you are interested in developing and contributing your own profiles, please see our links to Training material.</p>
        <v-layout>
            <v-row
                class="ma-1"
            >
                <v-col
                    v-for="item in items"
                    :key="item.category"
                >
                    <v-card
                        class="mx-auto mt-1"
                    >
                        <v-card-title><h2>{{item.category}}</h2></v-card-title>
                        <v-divider/>
                        <v-container fluid>
                            <v-layout row wrap>
                                <v-row
                                    v-for="(link, entry) in item.values"
                                    :key="link"
                                    class="ma-3"
                                >
                                    <v-btn 
                                        :href="link"
                                        class="text-none"
                                        target="_blank"
                                    >
                                        {{entry}}
                                    </v-btn>
                                    <v-spacer/>
                                </v-row>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
        </v-layout>
    </v-container>
</template>

<script>
    import baselines from "@/assets/data/baselines.json"
    import db from "@/assets/data/db.json"
    
    export default {
        data() {
            return {
                items: baselines.items, // fetch data
                db: db, // catch-all for misc data like the contact email
                width: "1000" // should width be locked in? cards can be bound to this
            }
        },
        computed: {
            mail_link() {
                return "mailto:" + db.email
            }
        }        
    }
</script>

<style scoped>
p {
    text-align:left;
    padding: 5px 0;
    
}
</style>

wrap button text
fix the viewports -- buttons should stack

