const getSleepHours = day => {
    switch (day) {
      case 'monday':
        return 7;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 8;
        break;
      case 'thursday':
        return 8;
        break;
      case 'friday':
        return 6;
        break;
      case 'saturday':
        return 7;
        break;
      case 'sunday':
        return 7;
        break;
  
      default:
        return 'Error!'
    }
  };
  
  console.log(getSleepHours('monday'));
  console.log(getSleepHours('saturday'));
  console.log(getSleepHours('friday'));
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours *= 7;
  }
  
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log('User got the perfect amount of sleep');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('User got more sleep than needed');
      console.log('You had extra ' + (actualSleepHours - idealSleepHours) + ' hours more sleep. More than needed!');
    } else if (actualSleepHours < idealSleepHours) {
      console.log('User needs more rest!');
      console.log('You got '+ (idealSleepHours - actualSleepHours) + 'hour(s) less sleep than you needed this week. Go get some rest!');
    }
  };
  
  console.log(calculateSleepDebt());
  