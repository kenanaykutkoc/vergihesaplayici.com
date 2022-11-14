import { mdiApple } from "@mdi/js";
import { buildHeadTags } from "@/utils/build-head-tags.js";
import TelefonVergisiHesaplayici from "@/data/pages/telefon-vergisi-hesaplayici/telefon-vergisi-hesaplayici.page.js";
import { findCalculatorPresetBySlug } from "@/utils/find-calculator-preset-by-slug.js";

const buildUrl = slug => `/telefon-vergisi-hesaplayici/${slug}/`;

const lastUpdatedDate = new Date("Sat Nov 12 2022 04:16:11 GMT+0300 (GMT+03:00)");

const presets = [
    {
        title: "iPhone SE 3 (2022)",
        slug: "iphone-se-3-2022",
        url: buildUrl("iphone-se-3-2022"),
        icon: mdiApple,
        color: "#555",
        ogImageName: "telefon-vergisi-hesaplayici-iphone-se-2022.jpg",
        pageTitle: "iPhone SE 3'ün (2022) vergisi ne kadar?",
        pageDescription: "iPhone SE 3 (2022)'ün yurt içi ve yurt dışı fiyatlarına ne kadar vergi uygulandığını hesaplayın.",
        options: [
            {
                title: "64GB",
                form: { price: 429, currency: "USD" },
                retailPrice: {
                    value: 16999,
                    lastUpdatedDate,
                    sourceUrl: "https://www.apple.com/tr/shop/buy-iphone/iphone-se"
                }
            },
            {
                title: "128GB",
                form: { price: 479, currency: "USD" },
                retailPrice: {
                    value: 18299,
                    lastUpdatedDate,
                    sourceUrl: "https://www.apple.com/tr/shop/buy-iphone/iphone-se"
                }
            },
            {
                title: "256GB",
                form: { price: 579, currency: "USD" },
                retailPrice: {
                    value: 20899,
                    lastUpdatedDate,
                    sourceUrl: "https://www.apple.com/tr/shop/buy-iphone/iphone-se"
                }
            }
        ]
    },
    {
        title: "iPhone 14",
        slug: "iphone-14",
        url: buildUrl("iphone-14"),
        icon: mdiApple,
        color: "#555",
        ogImageName: "telefon-vergisi-hesaplayici-iphone-14.jpg",
        pageTitle: "iPhone 14'ün vergisi ne kadar?",
        pageDescription: "iPhone 14'ün yurt içi ve yurt dışı fiyatlarına ne kadar vergi uygulandığını hesaplayın.",
        options: [
            {
                title: "128GB",
                form: { price: 799, currency: "USD" },
                retailPrice: {
                    value: 30999,
                    lastUpdatedDate,
                    sourceUrl: "https://www.apple.com/tr/shop/buy-iphone/iphone-14"
                }
            },
            {
                title: "256GB",
                form: { price: 899, currency: "USD" },
                retailPrice: {
                    value: 33599,
                    lastUpdatedDate,
                    sourceUrl: "https://www.apple.com/tr/shop/buy-iphone/iphone-14"
                }
            },
            {
                title: "512GB",
                form: { price: 1099, currency: "USD" },
                retailPrice: {
                    value: 38899,
                    lastUpdatedDate,
                    sourceUrl: "https://www.apple.com/tr/shop/buy-iphone/iphone-14"
                }
            }
        ]
    },
    {
        title: "iPhone 14 Plus",
        slug: "iphone-14-plus",
        url: buildUrl("iphone-14-plus"),
        icon: mdiApple,
        color: "#555",
        ogImageName: "telefon-vergisi-hesaplayici-iphone-14-plus.jpg",
        pageTitle: "iPhone 14 Plus'ın vergisi ne kadar?",
        pageDescription: "iPhone 14 Plus'ın yurt içi ve yurt dışı fiyatlarına ne kadar vergi uygulandığını hesaplayın.",
        options: [
            {
                title: "128GB",
                form: { price: 899, currency: "USD" },
                retailPrice: {
                    value: 34999,
                    lastUpdatedDate,
                    sourceUrl: "https://www.apple.com/tr/shop/buy-iphone/iphone-14"
                }
            },
            {
                title: "256GB",
                form: { price: 999, currency: "USD" },
                retailPrice: {
                    value: 37599,
                    lastUpdatedDate,
                    sourceUrl: "https://www.apple.com/tr/shop/buy-iphone/iphone-14"
                }
            },
            {
                title: "512GB",
                form: { price: 1199, currency: "USD" },
                retailPrice: {
                    value: 42899,
                    lastUpdatedDate,
                    sourceUrl: "https://www.apple.com/tr/shop/buy-iphone/iphone-14"
                }
            }
        ]
    },
    {
        title: "iPhone 14 Pro",
        slug: "iphone-14-pro",
        url: buildUrl("iphone-14-pro"),
        icon: mdiApple,
        color: "#555",
        ogImageName: "telefon-vergisi-hesaplayici-iphone-14-pro.jpg",
        pageTitle: "iPhone 14 Pro'nun vergisi ne kadar?",
        pageDescription: "iPhone 14 Pro'nun yurt içi ve yurt dışı fiyatlarına ne kadar vergi uygulandığını hesaplayın.",
        options: [
            {
                title: "128GB",
                form: { price: 999, currency: "USD" },
                retailPrice: {
                    value: 39999,
                    lastUpdatedDate,
                    sourceUrl: "https://www.apple.com/tr/shop/buy-iphone/iphone-14-pro"
                }
            },
            {
                title: "256GB",
                form: { price: 1099, currency: "USD" },
                retailPrice: {
                    value: 42599,
                    lastUpdatedDate,
                    sourceUrl: "https://www.apple.com/tr/shop/buy-iphone/iphone-14-pro"
                }
            },
            {
                title: "512GB",
                form: { price: 1299, currency: "USD" },
                retailPrice: {
                    value: 47899,
                    lastUpdatedDate,
                    sourceUrl: "https://www.apple.com/tr/shop/buy-iphone/iphone-14-pro"
                }
            },
            {
                title: "1TB",
                form: { price: 1499, currency: "USD" },
                retailPrice: {
                    value: 53199,
                    lastUpdatedDate,
                    sourceUrl: "https://www.apple.com/tr/shop/buy-iphone/iphone-14-pro"
                }
            }
        ]
    },
    {
        title: "iPhone 14 Pro Max",
        slug: "iphone-14-pro-max",
        url: buildUrl("iphone-14-pro-max"),
        icon: mdiApple,
        color: "#555",
        ogImageName: "telefon-vergisi-hesaplayici-iphone-14-pro-max.jpg",
        pageTitle: "iPhone 14 Pro Max'in vergisi ne kadar?",
        pageDescription: "iPhone 14 Pro Max'in yurt içi ve yurt dışı fiyatlarına ne kadar vergi uygulandığını hesaplayın.",
        options: [
            {
                title: "128GB",
                form: { price: 1099, currency: "USD" },
                retailPrice: {
                    value: 43999,
                    lastUpdatedDate,
                    sourceUrl: "https://www.apple.com/tr/shop/buy-iphone/iphone-14-pro"
                }
            },
            {
                title: "256GB",
                form: { price: 1199, currency: "USD" },
                retailPrice: {
                    value: 46599,
                    lastUpdatedDate,
                    sourceUrl: "https://www.apple.com/tr/shop/buy-iphone/iphone-14-pro"
                }
            },
            {
                title: "512GB",
                form: { price: 1399, currency: "USD" },
                retailPrice: {
                    value: 51899,
                    lastUpdatedDate,
                    sourceUrl: "https://www.apple.com/tr/shop/buy-iphone/iphone-14-pro"
                }
            },
            {
                title: "1TB",
                form: { price: 1599, currency: "USD" },
                retailPrice: {
                    value: 57199,
                    lastUpdatedDate,
                    sourceUrl: "https://www.apple.com/tr/shop/buy-iphone/iphone-14-pro"
                }
            }
        ]
    }
];

export default slug => {
    const preset = findCalculatorPresetBySlug(slug, presets);
    if (!preset) {
        return false;
    }

    const title = preset.pageTitle;
    const url = preset.url;
    const description = preset.pageDescription;
    const head = buildHeadTags({
        title,
        description,
        ogImageName: preset.ogImageName ?? "telefon-vergisi-hesaplayici.jpg"
    });
    const breadcrumbs = [
        ...TelefonVergisiHesaplayici.breadcrumbs,
        { title: preset.title, url }
    ];

    return {
        title,
        calculatorTitle: TelefonVergisiHesaplayici.title,
        url,
        description,
        head,
        breadcrumbs,
        preset
    };
};

export {
    presets
};