export const resolvers = {
    Query:{
        authors: ()=>{
            return [{
                id:1,
                name: "Akshay Varma"
            }]
        },
        books:()=>{
            return [{
                id: 1,
                title: "Experiences with life",
                publishedYear: 2024
            }]
        }
    }
}