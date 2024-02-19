db.users.aggregate([
    {
        $group: {
            _id: "$country",
            totalUsers: { $sum: 1 },
            averageAge: { $avg: "$age" }
        }
    },
    {
        $group: {
            _id: null,
            totalNumberOfUsers: { $sum: "$totalUsers" },
            averageAgeOverall: { $avg: "$averageAge" },
            usersByCountry: {
                $push: {
                    country: "$_id",
                    numberOfUsers: "$totalUsers",
                    averageAge: "$averageAge"
                }
            }
        }
    },
    {
        $project: {
            _id: 0,
            totalNumberOfUsers: 1,
            averageAgeOverall: 1,
            usersByCountry: 1
        }
    }
])
