import axios from 'axios';

const AI_API_URL = 'https://api.example.com/ai'; // Replace with your actual AI API endpoint

export const identifyIssueFromImage = async (imageData: FormData): Promise<string> => {
    try {
        const response = await axios.post(`${AI_API_URL}/identify`, imageData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data.issue; // Assuming the API returns an object with an 'issue' property
    } catch (error) {
        console.error('Error identifying issue from image:', error);
        throw new Error('Could not identify issue. Please try again later.');
    }
};

export const identifyIssueFromText = async (description: string): Promise<string> => {
    try {
        const response = await axios.post(`${AI_API_URL}/analyze`, { description });
        return response.data.issue; // Assuming the API returns an object with an 'issue' property
    } catch (error) {
        console.error('Error identifying issue from text:', error);
        throw new Error('Could not identify issue. Please try again later.');
    }
};