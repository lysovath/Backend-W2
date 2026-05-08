import Duration from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

     /**
      * @type {string}
      * @private
      */
     _participantId

     /**
      * @type {string}
      * @private
      */
     _sport

     /**
      * @type {Duration}
      * @private
      */
     _duration
       // TODO
       /**
        * @param {string} name 
        * @param {string} sportName 
        * @param {Duration} duration 
        */
       constructor(participantId, sport, duration){
          this._participantId = participantId;
          this._sport = sport;
          this._duration = duration
       }
  }

  export default RaceResult;