const applicants = [
  { name: "Ahmed", age: 24, hasLicense: true, rating: 4.5 },
  { name: "Sarah", age: 17, hasLicense: true, rating: 3.8 },
  { name: "Obi", age: 30, hasLicense: false, rating: 4.2 },
  { name: "Zainab", age: 28, hasLicense: true, rating: 4.9 }
];
const verifiedDrivers = applicants.filter (driver =>driver.age >=18 && driver.hasLicense)
const topRatedDrivers = verifiedDrivers.filter (driver=> driver.rating>=4.0)
const profiles = topRatedDrivers.map(driver =>{
  return {
    name: driver.name,
    label: `Expert driver (Rating: ${driver.rating})`
  };
})
const disqualifiedDrivers = applicants.length - verifiedDrivers.length
console.log("Verified:", verifiedDrivers);
console.log("Top Rated:", topRatedDrivers);
console.log("Profiles:", profiles);
console.log("Disqualified:", disqualifiedDrivers);
