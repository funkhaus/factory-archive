import SideBySide from "./SideBySide"
import API from "@/static/db.json"

export default {
    title: "@dchiamp / SideBySide"
}

export const Panel = () => ({
    components: { SideBySide },
    data() {
        return {
            api: API,
            items: [
                {
                    image: API.images[0],
                    text:
                        "<p>Lorem ipsum dolor sit amet, cu nobis consul qui. Eu audiam detraxit intellegat cum. Cum graeci noluisse an, quidam placerat voluptatibus eam id, qui nulla posidonium no. No atqui nominati vis, graece facilisi interpretaris ut qui. Ut dolorem phaedrum contentiones his, qui mucius adipisci at.<br>Duo numquam accusam interesset te, at eam iriure phaedrum, justo maiorum his te. Sit ex ferri utroque adversarium, et lorem omittam consequuntur vix, at regione ornatus maluisset vis. Duo an purto temporibus. Eripuit reprimique an sed. Usu ei ponderum electram, cu iudico tibique duo, id nam modo fugit molestiae. Viris equidem voluptaria eu nec, sed at rebum dolorum iudicabit.</p>"
                },
                {
                    image: API.images[1],
                    text:
                        "<p>Quem liberavisse te nec. Agam minim delenit mel ea. Est eu autem ceteros omnesque, his cu tantas feugait adolescens. At eum porro regione. Duo no oratio dissentiunt.<br>Ex assum affert has. Ei blandit intellegam mel. Eos dico propriae nominati ne. Tale repudiandae ea per.</p>"
                },
                {
                    image: API.images[5],
                    text:
                        "<p>In exerci eripuit vis, in vix eros graece, dicit moderatius eum an. Qui etiam facilis an, mei ad doctus blandit fabellas. Porro munere docendi ad usu, ut vis sint suscipit efficiantur. His in lucilius signiferumque, case noster appareat sea id. Graece possim cetero ne ius, liber utroque nam ut. Omnis eripuit reprimique ei sit, has id veri iriure liberavisse, per elitr ridens eripuit in.</p>"
                },
                {
                    image: API.images[3],
                    text:
                        "<p>Nam discere deserunt no, decore nominavi rationibus eu mea. Cum ut possit sanctus abhorreant. Ea quem dicit munere qui, augue propriae an quo. Ex omnium convenire est, usu vidit essent animal et.<br>At oblique tibique pro, ei has possit ponderum atomorum. Mea nibh copiosae luptatum te, in qui facilisis ullamcorper, ipsum noster reprehendunt quo ut. Evertitur forensibus ne nam, tantas eleifend mediocritatem eam ad. Fuisset verterem ea eam. Et mea mollis praesent. Oratio prodesset ei vim, vix vero rebum assueverit ei, mel quod feugiat concludaturque ea.</p>"
                },
                {
                    image: API.images[4],
                    text:
                        "<p>Ex vocent habemus fierent quo, vis esse contentiones te. Porro percipit postulant id quo, usu eu quem illud. Atomorum definitionem ne eum, quis mollis cum ne. Nec et option suscipit, alterum partiendo elaboraret ne mea, movet elitr vivendum ea nec. Fabulas propriae eum cu, agam soluta vel no, vivendo ponderum torquatos ius eu. Eam scaevola salutatus voluptaria ei, ad quo elit fabellas, fugit homero cu vis. Sumo meis assueverit ad his, quo sonet principes splendide cu. His nonumes consulatu intellegam ad. In sit munere iuvaret, facete invidunt corrumpit te eam. No fuisset singulis ocurreret vis, ei partem referrentur eos, an sea novum tractatos.</p>"
                }
            ]
        }
    },
    template: `<side-by-side  :items="items"/>`
})
