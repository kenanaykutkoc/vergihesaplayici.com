import { buildHeadTags } from "@/utils/build-head-tags.js";

/** @type {PageDef} */
const AnaSayfaPageDef = () => {
    const title = "Vergi Hesaplayıcı";
    const url = "/";
    /* const breadcrumbs = [
        {
            title,
            url
        }
    ]; */
    const head = {
        titleTemplate: null,
        ...buildHeadTags({
            title,
            description: "Telefon ve oyun konsolu gibi farklı ürün gruplarının yurt içi ve yurt dışı fiyatlarına Türkiye'de ne kadar vergi uygulandığını hesaplayın.",
            ogImage: "ana-sayfa/og/ana-sayfa.jpg"
        })
    };

    return {
        title,
        url,
        breadcrumbs: [], // We make it empty until complete the migration
        head
    };
};

export {
    AnaSayfaPageDef
};