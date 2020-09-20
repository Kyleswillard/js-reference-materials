//Demerit Points
//speed limit 70
//under limit = ok
// === limit = ok
// every 5 over += 1
// Math.floor()
// 80 = 2 pts
//more than 12 pts = suspended
// checkSpeed(180);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  
  if (speed < speedLimit + kmPerPoint)
    console.log('ok');
else {
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12)
  console.log('License Suspended');
  else 
    console.log('points', points)
}
}