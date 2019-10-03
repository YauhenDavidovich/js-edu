/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let weeks_to_become_master = 0;
      let zeroLevel = 1300;
      let basicLevel = 800;       
      if (knowsProgramming === true) {
        weeks_to_become_master = basicLevel/(config[focus]);
      } else {
        weeks_to_become_master = zeroLevel/(config[focus]);
      }    
      return Math.ceil(weeks_to_become_master);
  };
  