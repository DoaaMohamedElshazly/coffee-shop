document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // يمنع إرسال النموذج مؤقتًا
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const persons = document.getElementById("persons").value.trim();
      const date = document.getElementById("date").value.trim();
      const time = document.getElementById("time").value.trim();
  
      // التحقق من إدخال جميع الحقول
      if (!name || !email || !persons || !date || !time) {
        alert("All Fields are required. Please complete the form.");
        return;
      }
  
      // التحقق من الاسم: حروف فقط
      const nameRegex = /^[A-Za-zأ-ي\s]+$/;
      if (!nameRegex.test(name)) {
        alert("Please entre a valid name using letters only.");
        return;
      }
  
      // التحقق من البريد الإلكتروني
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please entre a valid email address.");
        return;
      }
  
      // التحقق من عدد الأشخاص
      const num = parseInt(persons);
      if (isNaN(num) || num <= 0) {
        alert("Please entre a valid number of persons (postive number only).");
        return;
      }
  
      // إذا كان كل شيء تمام
      alert("Thank you! your booking has been submitted.");
      form.submit(); // إرسال النموذج بعد التحقق
    });
  });
  