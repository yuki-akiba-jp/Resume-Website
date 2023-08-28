document.getElementById("download").addEventListener("click", function () {
  let resumeElement = document.querySelector(".resume");
  let button = document.getElementById("download");
  button.remove();
  let opt = {
    margin: 10,
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  html2pdf().from(resumeElement).set(opt).save();
});
