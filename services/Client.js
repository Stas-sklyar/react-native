export const fetchClients = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: 'Client 1',
                    status: 'active',
                    begeleiders: ['Begeleider 2', 'Begeleider 3']
                },
                {
                    id: 2,
                    name: 'Client 2',
                    status: 'inactive',
                    begeleiders: ['Begeleider 1', 'Begeleider 2']
                },
                {
                    id: 3,
                    name: 'Client 3',
                    status: 'active',
                    begeleiders: ['Begeleider 3']
                }
            ]);
        }, 1000);
    });
};

export const createClient = async (client) => {
    console.log(client)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1500);
    });
};