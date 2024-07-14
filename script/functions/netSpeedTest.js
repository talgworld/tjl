async function measureSpeed(url) {
  const startTime = performance.now();
  const fileSizeInBytes = 10 * 1024 * 1024; // 10 MB file (adjust as needed)

  try {
    const response = await fetch(url);
    const endTime = performance.now();
    const durationInSeconds = (endTime - startTime) / 1000;
    const speedMbps = (fileSizeInBytes / (1024 * 1024)) / durationInSeconds;
    return speedMbps;
  } catch (error) {
    console.error('An error occurred while measuring the speed:', error);
    return 0; // Return a default value in case of an error
  }
}

//measure mid of times
// let formulaMaker = async () => {
//   let sp_1 = await measureSpeed('https://i.pinimg.com/736x/34/6a/1f/346a1f4363e1b59f6860fdce6abc1082.jpg');
//   let sp_2 = await measureSpeed('https://yahoo.com');
//   let sp_3 = await measureSpeed('https://blender.org');
  
//   // Add measurements for other URLs here
  
//   let countOfSites = 3;
//   let formula = (sp_1 + sp_2 + sp_3) / countOfSites; // Add other speeds as needed
//   let sp_1f = sp_1 / formula * 100
//   let sp_2f = sp_2 / formula * 100
//   let sp_3f = sp_3 / formula * 100
//   console.log("speeds: "+sp_1.toFixed(2)+" - "+sp_2.toFixed(2)+" - "+sp_3.toFixed(2)+" - and mid: "+formula.toFixed(2) + ' Mbps');
//   console.log("correctness: "+sp_1f.toFixed(2)+" - "+sp_2f.toFixed(2)+" - "+sp_3f.toFixed(2)+' %');
// };

setInterval( async ()=>{
    let measurement = await measureSpeed('https://i.pinimg.com/736x/34/6a/1f/346a1f4363e1b59f6860fdce6abc1082.jpg');
    let calc = (measurement/2).toFixed(2);
    console.clear()
    console.log("DS: " + calc + "Mps");
}, 1000);
