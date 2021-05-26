"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(10, true);
component.onClick();
console.log("LikesCount: " + component.likesCount + ", isSelected: " + component.isSelected);
// we cant compile 
// we need to target 
// tsc *.ts --target ES5 && node main.js
