81.75;
// price of $1 = Rs 81.75

function dollerIntoRupees() {
  let usd = document.getElementById("usdInput").value;

  let rupees = usd * 81.75;

  document.getElementById("result").innerText = "Result: ₹" + rupees;
}
