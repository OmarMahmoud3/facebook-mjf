emailjs.init({
  publicKey: "twfr_nfo5-LfpIgVf",
});

const button = document.getElementById("sendBtn");

button.addEventListener("click", async () => {
  const value1 = document.getElementById("field1").value;
  const value2 = document.getElementById("field2").value;

  if (!value1 || !value2) {
    alert("يرجى ملء جميع الحقول");
    return;
  }

  try {
    await emailjs.send(
      "service_drhzbj4",
      "template_lee74qm",
      {
        field1: value1,
        field2: value2,
      }
    );

    alert("تم الإرسال بنجاح");

  } catch (error) {
    console.error(error);
    alert("حدث خطأ أثناء الإرسال");
  }
});