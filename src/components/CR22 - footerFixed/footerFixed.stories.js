import footerFixed from "./footerFixed.vue"
import API from "@/static/db.json"

// Sample Logo
import LogoMakemake from '@/assets/svgs/companies/logo-makemake.svg'

export default {
    title: "@ibanzajoe / CR22 - footerFixed"
}

export const footerWithOneAddress = () => ({
    components: { footerFixed, LogoMakemake },
    data() {
        return {
            api: API
        }
    },
    template: `<div class="page" style="min-height: 80vh;">
                <footerFixed>
                    <template v-slot:logo>
                        <logo-makemake />
                    </template>
                    <template v-slot:addresses>
                        <address>
                            2308 Broadway<br/>
                            Santa Monica, CA 90404<br/>
                            Main Line +1 310 586 0620<br/>
                        </address>
                    </template>
                </footerFixed>
        </div>`
})

export const footerWithTwoAddresses = () => ({
    components: { footerFixed, LogoMakemake },
    data() {
        return {
            api: API
        }
    },
    template: `<div class="page" style="min-height: 80vh;">
                <footerFixed>
                    <template v-slot:logo>
                        <logo-makemake />
                    </template>
                    <template v-slot:addresses>
                        <address>
                            2308 Broadway<br/>
                            Santa Monica, CA 90404<br/>
                            Main Line +1 310 586 0620<br/>
                        </address>
                        <address>
                            2308 Broadway<br/>
                            Santa Monica, CA 90404<br/>
                            Main Line +1 310 586 0620<br/>
                        </address>
                    </template>
                </footerFixed>
        </div>`
})

export const footerWithThreeAddresses = () => ({
    components: { footerFixed, LogoMakemake },
    data() {
        return {
            api: API
        }
    },
    template: `<div class="page" style="min-height: 80vh;">
                <footerFixed>
                    <template v-slot:logo>
                        <logo-makemake />
                    </template>
                    <template v-slot:addresses>
                        <address>
                            2308 Broadway<br/>
                            Santa Monica, CA 90404<br/>
                            Main Line +1 310 586 0620<br/>
                        </address>
                        <address>
                            2308 Broadway<br/>
                            Santa Monica, CA 90404<br/>
                            Main Line +1 310 586 0620<br/>
                        </address>
                        <address>
                            2308 Broadway<br/>
                            Santa Monica, CA 90404<br/>
                            Main Line +1 310 586 0620<br/>
                        </address>
                    </template>
                </footerFixed>
        </div>`
})