module.exports = (api) => {
    api.cache(true);

    const presets = [
        "next/babel",
        "@emotion/babel-preset-css-prop"
    ];

    const plugins = [
        "emotion",
        "graphql-tag"
    ];

    return {
        presets,
        plugins,
    };
}