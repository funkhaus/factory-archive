import footerFixed from "./footerFixed.vue"
import API from "@/static/db.json"

// Sample Logo
import LogoMakemake from '@/assets/svgs/companies/logo-makemake.svg'

export default {
    title: "@ibanzajoe / CR22 - footerFixed"
}

const slotText = `<address>2308 Broadway<br/>Santa Monica, CA 90404<br/>Main Line +1 310 586 0620</address>`

export const footerWithOneAddress = () => ({
    components: { footerFixed, LogoMakemake },
    data() {
        return {
            api: API
        }
    },
    template: `<div class="page" style="min-height: 80vh;">
                <footer-fixed>
                    <template v-slot:logo>
                        <logo-makemake />
                    </template>
                    <template v-slot:addresses>
                        ${slotText}
                    </template>
                </footer-fixed>
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
                <footer-fixed>
                    <template v-slot:logo>
                        <logo-makemake />
                    </template>
                    <template v-slot:addresses>
                        ${slotText}
                        ${slotText}
                    </template>
                </footer-fixed>
        </div>`
})