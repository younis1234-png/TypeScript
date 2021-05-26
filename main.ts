import { LikeComponent } from "./like.component";

let component = new LikeComponent(10, true);

component.onClick();
console.log(
  `LikesCount: ${component.likesCount}, isSelected: ${component.isSelected}`
);

// we cant compile 
// we need to target 

// tsc *.ts --target ES5 && node main.js