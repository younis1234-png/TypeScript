export class LikeComponent {
  constructor(private _likesCount: number, private _isSelected: boolean) {}

  onClick() {
    // if (this.isSelected) {
    //   this.likesCount--;
    //   // this.isSelected = false;
    // } else {
    //   this.likesCount++;
    //   // this.isSelected = true;
    // }

    this._likesCount += this._isSelected ? -1 : +1;

    // we can have this.isSelected in a cleaner away
    // toggle functionality
    this._isSelected = !this._isSelected;
  }

  get likesCount() {
    return this._likesCount;
  }

  get isSelected() {
    return this._isSelected;
  }
}
