/* eslint-disable */
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
/*
 * @Author: Miya
 * @Date: 2021-09-25 21:45:04
 * @LastEditTime: 2021-09-25 23:15:00
 * @LastEditors: Miya
 * @Description: Components Export
 * @FilePath: \mermaidui2\src\components\index.ts
 */
/* eslint-disable */
var index_vue_1 = require("./mi-button/index.vue");
var components = {
    miButton: index_vue_1["default"]
};
function install(vue) {
    var keys = Object.keys(components);
    keys.forEach(function (name) {
        // @ts-ignore
        var component = components[name];
        vue.component(component.name || name, component);
    });
}
exports["default"] = __assign({ install: install }, components);
