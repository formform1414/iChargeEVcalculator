function totalCost() {
  const battery = document.getElementById('battery').value;
  const percentLeft = document.getElementById('percentLeft').value;
  const unitRate = document.getElementById('unitRate').value;

  let totalNeededkWh = (((100-percentLeft)/100)*battery);
  let totalCost = totalNeededkWh * unitRate;

  return document.getElementById('result').innerHTML =   "ชาร์จอีก " + totalNeededkWh.toFixed(2) + " kWh " + "<br>ทั้งหมด " + totalCost.toFixed(2) + " บาท"
}

function resetData() {
  document.getElementById('battery').value = "";
  document.getElementById('percentLeft').value = "";
  document.getElementById('unitRate').value = "";
  document.getElementById('result').innerHTML = "";
}

