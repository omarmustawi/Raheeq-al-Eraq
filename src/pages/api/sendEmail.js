import nodemailer from "nodemailer";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const number = req.body;
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // configure your email provider (e.g., SMTP server)
      service: "gmail", // e.g., 'gmail'
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    // Setup email data
    const mailOptions = {
      from: "raheekiraq@gmail.com",
      to: "raheekiraq@gmail.com", // Replace with your email
      subject: "طلب تواصل من زبون:", // subject of message that you recive it on email
      text: `رقم الزبون ${number}`,
    };
    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
