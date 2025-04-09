// Define the event parameters type
export type AnalyticsEventParams = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
};

// Function to track events
export const trackEvent = (params: AnalyticsEventParams) => {
  // Check if window and gtag are available (client-side only)
  if (typeof window !== "undefined" && (window as any).gtag) {
    const { action, category, label, value, ...rest } = params;

    // Send the event to Google Analytics using the gtag function
    (window as any).gtag("event", action, {
      event_category: category || "Button Click",
      event_label: label,
      value: value,
      ...rest,
    });

    // Log the event in development mode
    if (process.env.NODE_ENV === "development") {
      console.log("🔍 Analytics Event:", {
        action,
        category: category || "Button Click",
        label,
        value,
        ...rest,
      });
    }
  } else if (process.env.NODE_ENV === "development") {
    console.warn("⚠️ Google Analytics not available (gtag not found)");
  }
};

// Helper function to sanitize button names
const sanitizeButtonName = (name: string): string => {
  return name.toLowerCase().replace(/\s+/g, "_");
};

// Helper function specifically for button clicks
export const trackButtonClick = (
  buttonName: string,
  additionalParams: Record<string, any> = {}
) => {
  const sanitizedButtonName = sanitizeButtonName(buttonName);

  trackEvent({
    action: "button_click_" + sanitizedButtonName,
    category: "Button",
    label: buttonName, // Keep original name for display purposes
    ...additionalParams,
  });
};
