import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST || "IN10.FASTWEBHOST.COM";
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "465", 10);
const SMTP_USER = process.env.SMTP_USER || "hello@voxentraglobal.com";
const SMTP_PASS = process.env.SMTP_PASS || "Majid5426!@#";

export const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export interface LeadEmailPayload {
  leadId: string;
  fullName: string;
  businessEmail: string;
  phoneNumber: string;
  company?: string;
  industry?: string;
  leadType?: string;
  monthlyRequirement?: string;
  message?: string;
}

export async function sendLeadNotificationEmail(payload: LeadEmailPayload) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; }
          .header { background: #0F4C81; color: #ffffff; padding: 24px; text-align: center; }
          .header h1 { margin: 0; font-size: 20px; font-weight: bold; }
          .content { padding: 24px; color: #1e293b; }
          .field { margin-bottom: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px; }
          .label { font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: bold; letter-spacing: 0.5px; }
          .value { font-size: 15px; font-weight: 600; color: #0f172a; margin-top: 4px; }
          .footer { background: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
          .badge { display: inline-block; background: #10B981; color: #ffffff; padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span class="badge">NEW INCOMING B2B LEAD</span>
            <h1 style="margin-top: 10px;">Voxentra Lead Notification</h1>
            <p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.9;">Lead Ref ID: ${payload.leadId}</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Full Name</div>
              <div class="value">${payload.fullName}</div>
            </div>
            <div class="field">
              <div class="label">Business Email</div>
              <div class="value"><a href="mailto:${payload.businessEmail}" style="color: #0F4C81;">${payload.businessEmail}</a></div>
            </div>
            <div class="field">
              <div class="label">Direct Phone</div>
              <div class="value"><a href="tel:${payload.phoneNumber}" style="color: #10B981;">${payload.phoneNumber}</a></div>
            </div>
            <div class="field">
              <div class="label">Company / Agency</div>
              <div class="value">${payload.company || "N/A"}</div>
            </div>
            <div class="field">
              <div class="label">Target Industry Vertical</div>
              <div class="value">${payload.industry || "General Inquiry"}</div>
            </div>
            <div class="field">
              <div class="label">Lead Format</div>
              <div class="value">${payload.leadType || "Live Transfers"}</div>
            </div>
            <div class="field">
              <div class="label">Monthly Target Volume</div>
              <div class="value">${payload.monthlyRequirement || "Standard"}</div>
            </div>
            ${
              payload.message
                ? `
              <div class="field">
                <div class="label">Campaign Requirements / Notes</div>
                <div class="value" style="font-weight: normal; background: #f8fafc; padding: 10px; border-radius: 8px; border: 1px solid #e2e8f0;">
                  ${payload.message}
                </div>
              </div>
            `
                : ""
            }
          </div>
          <div class="footer">
            Sent automatically from Voxentra Lead Generation Platform to hello@voxentraglobal.com
          </div>
        </div>
      </body>
    </html>
  `;

  return await transporter.sendMail({
    from: `Voxentra Lead Engine <hello@voxentraglobal.com>`,
    to: "hello@voxentraglobal.com",
    subject: `🔥 New B2B Lead (${payload.industry || "General"}) - ${payload.fullName} (${payload.company || "Agency"})`,
    html: htmlContent,
  });
}
