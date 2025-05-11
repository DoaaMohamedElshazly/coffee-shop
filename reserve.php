<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "coffee-shop_db";

// استلام البيانات من الفورم
$name = $_POST['name'];
$email = $_POST['email'];
$persons = $_POST['persons'];
$date = $_POST['date'];
$time = $_POST['time'];
$message = $_POST['message'];

// إنشاء الاتصال
$conn = new mysqli($servername, $username, $password, $dbname);

// التحقق من الاتصال
if ($conn->connect_error) {
    die("Connection falied:" . $conn->connect_error);
}

// تجهيز الاستعلام
$sql = "INSERT INTO bookings (YourName, Email, Persons, Date, Time, Message)
        VALUES (?, ?, ?, ?, ?, ?)";

// تجهيز البيان
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssisss", $name, $email, $persons, $date, $time, $message);

// تنفيذ
if ($stmt->execute()) {
    echo "Reservation Successfully.";
} else {
    echo "An error occurred." . $stmt->error;
}

// إغلاق الاتصال
$stmt->close();
$conn->close();
?>
