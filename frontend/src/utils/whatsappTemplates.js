export const whatsappTemplates = {
  confirmed: ({ name, date, packageName }) =>
    `✅ *Booking Confirmed!*\n\n` +
    `Dear ${name},\n\n` +
    `Your booking for *${packageName}* has been confirmed.\n` +
    `📅 Travel Date: ${date}\n\n` +
    `🚌 Pickup & details will be shared soon.\n\n` +
    `Thank you for choosing *Kaushalya Tours & Stays* 🌏`,

  cancelled: ({ name, packageName }) =>
    `❌ *Booking Cancelled*\n\n` +
    `Dear ${name},\n\n` +
    `Your booking for *${packageName}* has been cancelled.\n\n` +
    `For help, contact us anytime.\n\n` +
    `– Kaushalya Tours & Stays`,
};