let hour = new Date();

let showHour = hour.getHours();

const greeting = () => {
  if (showHour > 18) {
    return 'Good evening';
  } else if (showHour > 12) {
    return 'Good afternoon';
  } else if (showHour > 0){
    return 'Good morning';
  } else {
    return 'Welcome'
  }
}

export default greeting;