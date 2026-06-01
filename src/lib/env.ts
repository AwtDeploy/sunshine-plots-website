function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function getMongoConfig() {
  return {
    uri: requireEnv("MONGODB_URI"),
    dbName: process.env.MONGODB_DB_NAME ?? "sunshine_plots",
  };
}

export function getSmtpConfig() {
  return {
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? "587"),
    user: requireEnv("SMTP_USER"),
    pass: requireEnv("SMTP_PASS"),
    from: process.env.SMTP_FROM ?? process.env.SMTP_USER!,
    notifyTo: requireEnv("LEADS_NOTIFY_TO"),
  };
}
