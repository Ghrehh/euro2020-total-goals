import goalData from './goals.json';
import potData from './pot.json';
import lastUpdatedData from  './lastUpdated.json';

const finishedMatches = goalData.matches.filter(match => {
    return match.status === 'FINISHED' || match.status === 'AWARDED'
});
export const finishedMatchesCount = finishedMatches.length;
export const totalMatchesCount = goalData.matches.length;

export const goalsScored = finishedMatches.map(match => {
  const baseScore = () => {
    if (
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
  };

  const penaltiesScore = () => {
    if (
      match.score?.penalties?.homeTeam !== null &&
      match.score?.penalties?.awayTeam !== null
    ) {
      return match.score.penalties.homeTeam + match.score.penalties.awayTeam;
    } else {
      return 0;
    }
 }

  return baseScore() - penaltiesScore();
}).reduce((count, acc) => count + acc)

export const averageGoalsPerGame = (goalsScored / finishedMatchesCount).toFixed(2);
export const projectedTotalGoals = Math.round(averageGoalsPerGame * totalMatchesCount);
export const entries = potData.entries;
export const entriesCount = potData.entries.length;
export const prizePot = `£${potData.prizePot / 100}`;
export const lastUpdated = new Date(lastUpdatedData.lastUpdated);
