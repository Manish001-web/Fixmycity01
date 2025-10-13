import axios from 'axios';

const API_BASE_URL = 'https://api.fixmycity.com'; // Replace with your actual API base URL

export const reportIssue = async (issueData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/issues`, issueData);
        return response.data;
    } catch (error) {
        throw new Error('Error reporting issue: ' + error.message);
    }
};

export const getIssues = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/issues`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching issues: ' + error.message);
    }
};

export const getIssueById = async (issueId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/issues/${issueId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching issue: ' + error.message);
    }
};

export const updateIssueStatus = async (issueId, status) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/issues/${issueId}`, { status });
        return response.data;
    } catch (error) {
        throw new Error('Error updating issue status: ' + error.message);
    }
};