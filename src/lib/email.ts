import nodemailer from 'nodemailer';

// Create transporter - configure with your email service
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email service
  auth: {
    user: process.env.EMAIL_USER || '',
    pass: process.env.EMAIL_PASSWORD || '',
  },
});

export async function sendLeadNotification(leadData: {
  name: string;
  email: string;
  phone: string;
  businessName?: string;
  service?: string;
  message?: string;
}) {
  // Check if email credentials are configured
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.error('EMAIL_USER and EMAIL_PASSWORD are not configured. Please add them to .env.local');
    console.log('📧 Lead Notification (Email not sent - credentials missing):', leadData);
    return { success: true, message: 'Lead received (email pending setup)' };
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER || '',
      to: 'contact@feelifysolution.com',
      subject: `🎯 New Lead: ${leadData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #F7D046;">New Lead Received!</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p><strong>Name:</strong> ${leadData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${leadData.email}">${leadData.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${leadData.phone}">${leadData.phone}</a></p>
            ${leadData.businessName ? `<p><strong>Business:</strong> ${leadData.businessName}</p>` : ''}
            ${leadData.service ? `<p><strong>Service Interest:</strong> ${leadData.service}</p>` : ''}
          </div>
          
          ${leadData.message ? `
            <div style="background: #fff; padding: 20px; border-left: 4px solid #F7D046; margin: 20px 0;">
              <p><strong>Message:</strong></p>
              <p>${leadData.message}</p>
            </div>
          ` : ''}
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Received from: Feelify Solutions Website<br>
            Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </p>
        </div>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully to contact@feelifysolution.com');
    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}

export async function sendPartnerNotification(partnerData: {
  name: string;
  company: string;
  partnershipType: string;
  email: string;
  phone: string;
  message?: string;
}) {
  // Check if email credentials are configured
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.error('EMAIL_USER and EMAIL_PASSWORD are not configured. Please add them to .env.local');
    console.log('📧 Partner Notification (Email not sent - credentials missing):', partnerData);
    return { success: true, message: 'Inquiry received (email pending setup)' };
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER || '',
      to: 'contact@feelifysolution.com',
      subject: `🤝 Partnership Inquiry: ${partnerData.company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #F7D046;">New Partnership Inquiry!</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p><strong>Name:</strong> ${partnerData.name}</p>
            <p><strong>Company:</strong> ${partnerData.company}</p>
            <p><strong>Partnership Type:</strong> ${partnerData.partnershipType}</p>
            <p><strong>Email:</strong> <a href="mailto:${partnerData.email}">${partnerData.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${partnerData.phone}">${partnerData.phone}</a></p>
          </div>
          
          ${partnerData.message ? `
            <div style="background: #fff; padding: 20px; border-left: 4px solid #F7D046; margin: 20px 0;">
              <p><strong>Message:</strong></p>
              <p>${partnerData.message}</p>
            </div>
          ` : ''}
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Received from: Feelify Solutions - Brands Page<br>
            Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </p>
        </div>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully to contact@feelifysolution.com');
    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}
