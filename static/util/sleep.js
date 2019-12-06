// sleep(ms).then()来执行完成后的需求

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}