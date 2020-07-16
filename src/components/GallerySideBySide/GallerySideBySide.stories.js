import GallerySideBySide from "./GallerySideBySide"
import API from "@/static/db.json"

const Items = [
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
            "<p>We&#8217;re rescuing ya. Who said that? SURE you can die! You want to die?! Pansy. I didn&#8217;t ask for a completely reasonable excuse! I asked you to get busy! Meh.</p>\n<p>Too much work. Let&#8217;s burn it and say we dumped it in the sewer. Incidentally, you have a dime up your nose. Doomsday device? Ah, now the ball&#8217;s in Farnsworth&#8217;s court! I&#8217;ve been there. My folks were always on me to groom myself and wear underpants. What am I, the pope?</p>\n<p>Why am I sticky and naked? Did I miss something fun? No, of course not. It was… uh… porno. Yeah, that&#8217;s it. Who are those horrible orange men? Fry! Quit doing the right thing, you jerk! I decline the title of Iron Cook and accept the lesser title of Zinc Saucier, which I just made up. Uhh… also, comes with double prize money.</p>\n<p>We&#8217;ll need to have a look inside you with this camera. Dear God, they&#8217;ll be killed on our doorstep! And there&#8217;s no trash pickup until January 3rd. But, like most politicians, he promised more than he could deliver.</p>\n"
    },
    {
        image: API.images[4],
        text:
            "<p>Ex vocent habemus fierent quo, vis esse contentiones te. Porro percipit postulant id quo, usu eu quem illud. Atomorum definitionem ne eum, quis mollis cum ne. Nec et option suscipit, alterum partiendo elaboraret ne mea, movet elitr vivendum ea nec. Fabulas propriae eum cu, agam soluta vel no, vivendo ponderum torquatos ius eu. Eam scaevola salutatus voluptaria ei, ad quo elit fabellas, fugit homero cu vis. Sumo meis assueverit ad his, quo sonet principes splendide cu. His nonumes consulatu intellegam ad. In sit munere iuvaret, facete invidunt corrumpit te eam. No fuisset singulis ocurreret vis, ei partem referrentur eos, an sea novum tractatos.</p>"
    }
]

export default {
    title: "@dchiamp / GallerySideBySide"
}

export const Default = () => ({
    components: { GallerySideBySide },
    data() {
        return {
            api: API,
            items: Items
        }
    },
    template: `<gallery-side-by-side  :items="items" style="background-color: beige;"/>`
})
