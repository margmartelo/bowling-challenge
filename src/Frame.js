'use strict';

class Frame {
  play(frame, roll, pins) {
    this.frame = frame;
    this.roll = roll;
    this.pins = pins;

    if(this.frame > 10) {
      throw new Error("There aren't more than 10 frames");
    }
    if(this.frame < 1) {
      throw new Error("There can't be less than 1 frame");
    }

    if(this.frame <= 10 & this.roll > 2) {
      throw new Error("You can only roll twice per frame");
    }
    return true;
    }
};