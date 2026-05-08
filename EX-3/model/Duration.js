/**
 * Represents a duration of time, stored internally as total seconds.
 * Immutable: all operations return a new instance.
 */

//  TODO - You need to export your class to use it

class Duration {
  /**
   * Total duration in seconds.
   * @type {number}
   * @private
   */
  _totalSeconds;

  /**
   * Creates a new Duration object.
   * @param {number} [seconds=0] - The number of seconds.
   */
  constructor(seconds = 0) {
     // YOUR CODE
     if(seconds < 0){
      this._totalSeconds = 0;
     } else {
      this._totalSeconds = seconds;
     }
  }

  /**
   * Creates a new Duration from a number of minutes and seconds.
   * @param {number} [minutes=0] - The number of minutes.
   * @param {number} [seconds=0] - The number of seconds.
   * @returns {Duration} A new Duration instance.
   */
  static fromMinutesAndSeconds(minutes = 0, seconds = 0) {
     // YOUR CODE
     return new Duration(minutes * 60 + seconds);
  }

  /**
   * Returns a new Duration by adding another duration.
   * @param {Duration} other - Another duration to add.
   * @returns {Duration} A new Duration representing the sum.
   */
  plus = (other) => {
         // YOUR CODE
         return new Duration(this._totalSeconds + other._totalSeconds);
  };

  // YOUR COMMENT
  /**
   * Return a new Duration by subtract with another duration
   * @param {Duration} other - Another duration to subtract
   * @returns {Duration} The different between the two duration
   */
  minus = (other) => {
         // YOUR CODE
         return new Duration(this._totalSeconds - other._totalSeconds);
  };

  /**
   * Converts the duration into a human-readable string, e.g., "0h 2mn 30s".
   * @returns {string} The formatted duration string.
   */
  toString = () => {
      // YOUR CODE
      let total = this._totalSeconds;
      const hour = Math.floor(total/3600);
      total -= hour*3600;
      const minute = Math.floor(total/60);
      total -= minute*60;
      return `${hour}h ${minute}mn ${total}s`;
  };
}

export default Duration;
