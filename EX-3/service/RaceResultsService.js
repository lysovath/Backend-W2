import fs from "fs"

import Duration from "../model/Duration.js";
import RaceResult from "../model/RaceResult.js";

/**
 * This class handle the race results management system.
 */
export class RaceResultsService {
  /**
   * The list of race results.
   * @type {Array<RaceResult>}
   * @private
   */
  _raceResults = [];

  get raceResults() {
    return this._raceResults;
  }

  /**
   * Adds a new race result to the race list.
   * @param {RaceResult} result - The prace result.
   */
  addRaceResult(result) {
    // TODO
    this._raceResults.push(result)
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    // TODO
    fs.writeFileSync(filePath, JSON.stringify(this._raceResults));
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    // TODO
    try {
      this._raceResults = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Retrieves the race time for a given participant and sport.
   * @param {string} participantId - Participant ID.
   * @param {string} sport - Sport name.
   * @returns {Duration|null} Duration if found, else null.
   */
  getTimeForParticipant(participantId, sport) {
       // TODO
       const result = this._raceResults.find(result => result._participantId === participantId && result._sport === sport);
       if(result !== undefined){
        return result.duration;
       }
       return null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
        // TODO
        // console.log(this._raceResults);
      const particicpantResults = this._raceResults.filter(result => {
        // console.log(participantId, result._participantsId);
        return result._participantId === participantId;
      });
      let total = new Duration();
      particicpantResults.forEach(result => {
        total._totalSeconds += result._duration._totalSeconds;
      })
      return total;
  }
}

export default RaceResultsService;
