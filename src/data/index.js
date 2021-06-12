import goalData from './goals.json';
import potData from './pot.json';
import lastUpdatedData from  './lastUpdated.json';

const finishedMatches = goalData.matches.filter(match => {
    return match.status === 'FINISHED' || match.status === 'AWARDED'
});
export const finishedMatchesCount = finishedMatches.length;
export const totalMatchesCount = goalData.matches.length;

export const goalsScored = finishedMatches.map(match => {
  if (
    match.score?.extraTime?.homeTeam !== null &&
    match.score?.extraTime?.awayTeam !== null
  ) {
    return match.score.extraTime.homeTeam + match.score.extraTime.awayTeam;
  }
  else if (
    match.score?.fullTime?.homeTeam !== null &&
    match.score?.fullTime?.awayTeam !== null
  ) {
    return match.score.fullTime.homeTeam + match.score.fullTime.awayTeam;
  }
  else if (
    match.score?.halfTime?.homeTeam !== null &&
    match.score?.halfTime?.awayTeam !== null
  ) {
    return match.score.halfTime.homeTeam + match.score.halfTime.awayTeam;
  }
  else {
    return 0;
  }
}).reduce((count, acc) => count + acc)

export const averageGoalsPerGame = (goalsScored / finishedMatchesCount).toFixed(2);
export const projectedTotalGoals = Math.round(averageGoalsPerGame * totalMatchesCount);
export const entries = potData.entries;
export const entriesCount = potData.entries.length;
export const prizePot = `£${potData.prizePot / 100}`;
export const lastUpdated = new Date(lastUpdatedData.lastUpdated);
