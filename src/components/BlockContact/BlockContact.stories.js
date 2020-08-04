import BlockContact from "./BlockContact"
import API from "@/static/db.json"

const Contact = {
    name: "Danielle Hinde",
    title: "Founder / Executive Producer",
    email: "danielle@doomsday.com"
}

export default {
    title: "@dchiamp / BlockContact"
}

export const Default = () => ({
    components: { BlockContact },
    data() {
        return {
            contact: Contact
        }
    },
    template: `<block-contact  :name="contact.name" :title="contact.title" :email="contact.email"/>`
})
