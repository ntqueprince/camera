// 📷 Camera upload (tag mandatory after capture)
document.getElementById("cameraUpload").addEventListener("change", function(event) {
  const file = event.target.files[0];
  if (file) {
    const tagInput = document.getElementById("tagInput");

    // 👇 User ko force karo ki pehle tag dale
    if (!tagInput.value.trim()) {
      alert("Please enter a tag before uploading the captured photo!");
      event.target.value = ""; // reset file input
      return;
    }

    const tag = tagInput.value.trim();
    const progressBar = document.getElementById("progress");
    const statusText = document.getElementById("status");

    uploadFile(file, tag, progressBar, statusText);
  }
});
