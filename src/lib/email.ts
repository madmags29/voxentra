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
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
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
  linkedin?: string;
  message?: string;
  zipCode?: string;
  serviceNeeded?: string;
  leadSource?: string;
}

export async function sendLeadNotificationEmail(payload: LeadEmailPayload) {
  const isLandingLead = Boolean(payload.serviceNeeded || payload.zipCode || payload.leadSource);

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
          .highlight { background: #eff6ff; border-left: 4px solid #0F4C81; padding: 12px 16px; border-radius: 6px; margin-bottom: 16px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span class="badge">${isLandingLead ? "🔥 NEW LANDING PAGE QUOTE REQUEST" : "NEW INCOMING B2B LEAD"}</span>
            <h1 style="margin-top: 10px;">${payload.leadSource || "Voxentra Lead Notification"}</h1>
            <p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.9;">Lead Ref ID: ${payload.leadId}</p>
          </div>
          <div class="content">
            ${
              payload.serviceNeeded
                ? `
              <div class="highlight">
                <div class="label" style="color: #1d4ed8;">Requested Service</div>
                <div class="value" style="font-size: 18px; color: #1e40af;">${payload.serviceNeeded}</div>
                ${payload.zipCode ? `<div style="font-size: 13px; color: #475569; margin-top: 4px;">Service ZIP Code: <strong>${payload.zipCode}</strong></div>` : ""}
              </div>
            `
                : ""
            }

            <div class="field">
              <div class="label">Full Name</div>
              <div class="value">${payload.fullName}</div>
            </div>
            <div class="field">
              <div class="label">Direct Phone</div>
              <div class="value"><a href="tel:${payload.phoneNumber}" style="color: #10B981; font-size: 16px; font-weight: bold;">${payload.phoneNumber}</a></div>
            </div>
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${payload.businessEmail}" style="color: #0F4C81;">${payload.businessEmail}</a></div>
            </div>
            ${
              payload.zipCode && !payload.serviceNeeded
                ? `
              <div class="field">
                <div class="label">ZIP Code</div>
                <div class="value">${payload.zipCode}</div>
              </div>
            `
                : ""
            }
            <div class="field">
              <div class="label">Industry / Vertical</div>
              <div class="value">${payload.industry || "Home Services"}</div>
            </div>
            ${
              payload.company && payload.company !== "N/A"
                ? `
              <div class="field">
                <div class="label">Company / Property</div>
                <div class="value">${payload.company}</div>
              </div>
            `
                : ""
            }
            ${
              payload.leadSource
                ? `
              <div class="field">
                <div class="label">Lead Source</div>
                <div class="value">${payload.leadSource}</div>
              </div>
            `
                : ""
            }
            ${
              payload.linkedin
                ? `
              <div class="field">
                <div class="label">LinkedIn Profile / Company Page</div>
                <div class="value"><a href="${payload.linkedin.startsWith("http") ? payload.linkedin : `https://${payload.linkedin}`}" target="_blank" style="color: #0A66C2; text-decoration: underline;">${payload.linkedin}</a></div>
              </div>
            `
                : ""
            }
            ${
              payload.message
                ? `
              <div class="field">
                <div class="label">Project Details / Message</div>
                <div class="value" style="font-weight: normal; background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0; line-height: 1.5;">
                  ${payload.message}
                </div>
              </div>
            `
                : ""
            }
          </div>
          <div class="footer">
            Sent automatically to hello@voxentraglobal.com &bull; Voxentra Instant Dispatch System
          </div>
        </div>
      </body>
    </html>
  `;

  const subject = isLandingLead
    ? `⚡ Free Quote Request: ${payload.serviceNeeded || payload.industry || "Home Services"} - ${payload.fullName} (${payload.zipCode ? `ZIP ${payload.zipCode}` : "Quote"})`
    : `🔥 New B2B Lead (${payload.industry || "General"}) - ${payload.fullName} (${payload.company || "Agency"})`;

  return await transporter.sendMail({
    from: `Voxentra Lead Engine <hello@voxentraglobal.com>`,
    to: "hello@voxentraglobal.com",
    subject,
    html: htmlContent,
  });
}
