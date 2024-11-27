interface FormData {
  [key: string]: string | boolean | number;
}

export async function submitFormToGoogleSheets(data: FormData): Promise<boolean> {
  try {
    // Convert the data to URL-encoded format which works better with Google Apps Script
    const formBody = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      formBody.append(key, String(value));
    });
    formBody.append('timestamp', new Date().toISOString());

    const response = await fetch('https://script.google.com/macros/s/AKfycbw0N8LUbJPMQKTFbgqWs8QgTi29t-cFpOaudVjstcz3B6bsjz1-UhJvWMq9gwpwCrx7/exec', {
      method: 'POST',
      mode: 'no-cors', // This is required for Google Apps Script
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody.toString(),
    });

    // Since we're using no-cors, we won't get a proper response
    // Instead, we'll assume success if we get here without an error
    return true;
  } catch (error) {
    console.error('Form submission error:', error);
    throw new Error('Failed to submit form. Please try again later.');
  }
}
