class ApiService {
    private readonly BASE_URL = 'http://localhost:3001';

    async get(endpoint: string) {
        try {
            const response = await fetch(`${this.BASE_URL}/${endpoint}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('There was a problem with the fetch operation: ', error);
            throw error;
        }
    }

    async post(endpoint: string, data: any) {
        try {
            const response = await fetch(`${this.BASE_URL}/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('There was a problem with the fetch operation: ', error);
            throw error;
        }
    }

}

export default new ApiService();