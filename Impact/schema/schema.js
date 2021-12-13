const DB = [
    {
        users,
        userID: {
            name: 'JoeDoe',
            email: 'JoeDoe@gmail.com',
            userID: '123ABC345daef123',
            sex: 'male/female/nonBinary/other',
            age: 0,
            location: 'jerusalem, Israel',
            role: 'ole/admin/superAdmin',
            organization: 'Soup Kitchen',
            userPref: [
                'dinner',
                'shabbat',
                'family',
            ]
        }
    },
    {
    events,
        autoID: {
            eventName: 'Dinner with the Rabbi',
            organization: 'Soup Kitchen',
            address: {
                streetName: 'streetname',
                houseNumber: 123,
                city: 'jerusalem',
            },
            date: { dateObj },
            duration: 2,
            coverImage: 'imgeURLimg123com',
            maxCapacity: 100,
            currentCapacity: 10,
            article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            tags: [
                'dinner',
                'shabbat',
                'family',
            ],
            contactInfo: {
                phone: '12345678',
                email: 'joeDoe@gmail.com',
                website: 'www.google.com',
            },
        }
    }
]