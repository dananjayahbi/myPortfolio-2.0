const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const siteSettingsSchema = new Schema({
    siteTitle: {
        type: String,
        required: true,
    },
    siteDescription: {
        type: String,
        required: true,
    },
    siteKeywords: {
        type: String,
        required: true,
    },
    siteAuthor: {
        type: String,
        required: true,
    },
    siteLogo: {
        type: String,
        required: true,
    },
    siteFavicon: {
        type: String,
        required: true,
    },
    sitePrimaryColor: {
        type: String,
        required: true,
    },
    siteSecondaryColor: {
        type: String,
        required: true,
    },
    siteAccentColor: {
        type: String,
        required: true,
    },
    siteDarkMode: {
        type: Boolean,
        required: true,
    },
    siteFont: {
        type: String,
        required: true,
    },
    siteFontSize: {
        type: String,
        required: true,
    },
    siteFontWeight: {
        type: String,
        required: true,
    },
    siteFontColor: {
        type: String,
        required: true,
    },
    siteFontColorAccent: {
        type: String,
        required: true,
    },
    siteFontColorDark: {
        type: String,
        required: true,
    },
    siteFontColorLight: {
        type: String,
        required: true,
    },
    siteFontColorPrimary: {
        type: String,
        required: true,
    },
    siteFontColorSecondary: {
        type: String,
        required: true,
    },
});

const SiteSettings = mongoose.model("SiteSettings", siteSettingsSchema);

module.exports = SiteSettings;