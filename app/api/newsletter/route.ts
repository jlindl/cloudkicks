import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // Authenticate with Google Sheets API
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/spreadsheets',
            ],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const spreadsheetId = '1pXs505I9xiA-PpOkDnE0m3dcqqmAYHD3h7n0j3YWwOM';
        const range = 'Sheet1!A:A'; // Appends to the first empty row in column A

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [email, new Date().toISOString()],
                ],
            },
        });

        return NextResponse.json({ success: true });
    } catch (error: unknown) {
        console.error('Error appending to Google Sheet:', error);
        return NextResponse.json({ error: 'Failed to save email' }, { status: 500 });
    }
}
