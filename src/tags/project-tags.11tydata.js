export default {
    eleventyComputed: {
        title: (data) => `Projects tagged: ${data.tag}`,
        metaDescription: (data) => `All projects tagged with "${data.tag}"`,
    },
};
