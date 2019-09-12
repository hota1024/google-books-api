"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var VolumeClient_1 = require("./VolumeClient");
/**
 * GoogleBooksCore class
 */
var GoogleBooksCore = /** @class */ (function () {
    function GoogleBooksCore(options) {
        if (options === void 0) { options = {}; }
        this.options = options;
        this.axios = axios_1["default"].create({
            baseURL: this.baseURL()
        });
        this.volume = new VolumeClient_1.VolumeClient(this.axios);
    }
    /**
     * Computed options
     */
    GoogleBooksCore.prototype.computedOptions = function () {
        var options = {
            base: this.options.base || 'https://www.googleapis.com/books',
            version: this.options.version || 'v1'
        };
        return options;
    };
    /**
     * Google Books API base url
     */
    GoogleBooksCore.prototype.baseURL = function () {
        var options = this.computedOptions();
        return options.base + "/" + options.version;
    };
    return GoogleBooksCore;
}());
exports.GoogleBooksCore = GoogleBooksCore;
exports.GoogleBooks = new GoogleBooksCore();
